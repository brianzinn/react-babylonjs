import { Project, VariableDeclarationKind, NamespaceDeclaration, ClassDeclaration, PropertyDeclaration, Node, Symbol, SyntaxKind, Type, ExpressionWithTypeArguments } from 'ts-simple-ast'
import BABYLON from 'babylonjs'
const sortJson = require('sort-json')
import { promisify } from 'util'
import { writeFile } from 'fs'

// save object as JSON
const write = promisify(writeFile)
const save = (filename: string, obj: any) => write(filename, JSON.stringify(sortJson(obj, { depth: 4 }), null, 2))

type infoType = {
  cameras: string[]
  lights: string[]
  materials: string[]
  meshes: string[]
}

interface Visitor {
  visit(node: Node): void;
}

const info : infoType = {
  cameras: [],
  lights: [],
  materials: [],
  meshes: []
}

// get family of className, if defined
const getFamily = (name: string | undefined) : string | undefined => {

  if (name === undefined) {
    return undefined;
  }

  for (let family of Object.getOwnPropertyNames(info)) {
    let classNamesInFamily: string[] = (info as any)[family];
    if (classNamesInFamily.indexOf(name) !== -1) {
      console.log(`found className from family: ${name} -> ${family}`)
      return family;
    }
  }

  return undefined;
}

const stuff: string[] = Object.keys(BABYLON).filter(p => p[0] !== '_')

// get names of cameras
info.cameras = stuff
  .filter(p => p.indexOf('Camera') !== -1 && p.indexOf('Input') === -1 && p.indexOf('Metrics') == -1 && p !== 'serializeAsCameraReference')

// get names of lights
info.lights = stuff
  .filter(p => p.indexOf('Light') !== -1 && p !== 'VolumetricLightScatteringPostProcess')

// get names of materials
info.materials = stuff
  .filter(p => (p.indexOf('Material') !== -1 || p.indexOf('Texture') !== -1 || p.indexOf('Sprite') !== -1) && p.indexOf('Defines') === -1)

// get names of meshes
info.meshes = Object.keys(BABYLON.MeshBuilder)
  .filter(m => m.substr(0, 6) === 'Create')
  .map(m => m.substr(6))

// post-fixes
info.meshes.push('Mesh')

type ComponentsJsonType = {
  name: string,
  args: string[],
  family: string,
  options?: string[],
  props?: string[]
}

// get info about classes that have been found
const componentsJson: Map<String, ComponentsJsonType> = new Map<String, ComponentsJsonType>();
const project: Project = new Project({})
project.addExistingSourceFiles(`${__dirname}/../node_modules/babylonjs/**/*.ts`)
const sourceFile = project.getSourceFileOrThrow('babylon.d.ts')
const babylonNamespaces: NamespaceDeclaration[] = sourceFile
  .getNamespaces()
  .filter(n => n.getName() === 'BABYLON')

let cameraDeclarationsMap: Map<String, ClassDeclaration> = new Map<String, ClassDeclaration>();

const meshClasses: ClassDeclaration[] = []
let MeshBuilder: ClassDeclaration | undefined = undefined;
babylonNamespaces.forEach(namespaceDeclaration => {

  namespaceDeclaration.getClasses().forEach(babylonClass => {
      // all classes here
      const className = babylonClass.getName()

      const family = getFamily(className)
      if (className && family) {
        // here you know it's a class we already found
        componentsJson.set(className, {
          name: className,
          family,
          props: babylonClass.getInstanceProperties().map(m => m.getName()).filter(p => p !== undefined && p[0] !== '_') as string[],
          args: []
        })

        const constructor = babylonClass.getConstructors()[0]
        if (constructor) {
          componentsJson.get(className)!.args = babylonClass.getConstructors()[0].getParameters().map(p => p.getName()!)
        }
      }

      if (className === 'MeshBuilder') {
        MeshBuilder = babylonClass
      } else if (className === 'Node' || className === 'TransformNode' || className === 'AbstractMesh' || className === 'Mesh') {
        meshClasses.push(babylonClass);
      } else {
        switch(family) {
          case "cameras":
            cameraDeclarationsMap.set(className!, babylonClass);
            break;
          case "meshes":
            break;
          default:
            console.log(` > family: ${family} -> ${className} not processed further.`)
            break;
        }
      }
    }
  )
})


if (MeshBuilder) {
  info.meshes.forEach(name => {
    const method = MeshBuilder!.getMethod(`Create${name}`)
    if (!method) {
      return
    }
    const meshInfo: ComponentsJsonType = {
      name,
      args: [],
      family: 'meshes'
    }

    method.getParameters().forEach(p => {
      const propertyName = p.getName()
      meshInfo.args.push(propertyName!)

      if (propertyName === 'options') {
        // console.log(name, p.print())
        meshInfo.options = p.getType().getProperties().map(f => f.getName())
      }
    })

    componentsJson.set(name, meshInfo);
  })
}

const saveComponents = async () => {
  // save info in JSON files
  await save(`${__dirname}/../src/components.json`, componentsJson)
}

const getMethodInstanceProperties = (classDeclaration: ClassDeclaration) : PropertyDeclaration[] => {
  let result: PropertyDeclaration[] = [];
  classDeclaration.getProperties().forEach(property => {
    let propertyName = property.getName()
    if (propertyName[0] === '_' || propertyName.startsWith('on')) {
      // console.log(` > skipping ${className}.${propertyName} (hidden/observable)`)
      return;
    }

    if (property.isStatic()) {
      // console.log(` > skipping ${className}.${propertyName} (static)`)
      return;
    }

    if (property.isReadonly()) {
      // console.log(` > skipping ${className}.${propertyName} (read-only)`)
      return;
    }

    result.push(property);
  })

  return result;
}

/**
 * This is used to write classes in inherited order, which is required by compiler.
 */
class OrderedListCreator {
  addDescendantsOrdered = (classDeclarations: ClassDeclaration[], list: string[]): void => {
    classDeclarations.forEach(x => {
      if (list.find(c => c === x.getName()) === undefined) {
        list.push(x.getName()!);
      }
      const derivedClasses = x.getDerivedClasses();
      this.addDescendantsOrdered(derivedClasses, list)
    })
  }
}

const generateCode = async () => {
  const exportsProject = new Project()
  const generatedSourceFile = exportsProject.createSourceFile(
    `${__dirname}/../src/generatedCode.ts`,
    "",
    { overwrite: true }
  );

  const ReactReconcilerCreatedInstanceClassName = "CreatedInstance";
  const PropertyUpdateType = "PropertyUpdate";

  generatedSourceFile.addImportDeclaration({
    moduleSpecifier: "./render",
    namedImports: [ReactReconcilerCreatedInstanceClassName, PropertyUpdateType]
  })

  const importedNamespace = "BABYLON";

  generatedSourceFile.addImportDeclaration({
    moduleSpecifier: "babylonjs",
    defaultImport: importedNamespace
  })

  const interfaceDeclaration = generatedSourceFile.addInterface({
    name: "PropsHandler",
    isExported: true
  });
  interfaceDeclaration.addTypeParameters([{
    name: 'T'
  }, {
    name: 'U'
  }]);
  let getPropertyUpdatesMethod = interfaceDeclaration.addMethod({
    name: "getPropertyUpdates",
    returnType: `${PropertyUpdateType}[] | null`
  });
  getPropertyUpdatesMethod.addParameters([{
    name: "createdInstance",
    type: `${ReactReconcilerCreatedInstanceClassName}<T>`
  }, {
    name: "oldProps",
    type: "U"
  }, {
    name: "newProps",
    type: "U"
  }])

  const classDeclarationMeshProps = generatedSourceFile.addClass({
    name: "MeshProps",
    isExported: true
  });

  let meshPropertiesToAdd: PropertyDeclaration[] = []
  meshClasses.forEach(meshClass => {
    meshPropertiesToAdd.push(...getMethodInstanceProperties(meshClass))
  })

  const classDeclarationMeshPropsHandler = generatedSourceFile.addClass({
    name: "MeshPropsHandler",
    isExported: true
  });
  classDeclarationMeshPropsHandler.addImplements(`PropsHandler<${importedNamespace}.Mesh, MeshProps>`)
  let getPropertyUpdatesMethodMesh = classDeclarationMeshPropsHandler.addMethod({
    name: "getPropertyUpdates",
    returnType: `${PropertyUpdateType}[] | null`
  });
  getPropertyUpdatesMethodMesh.addParameters([{
    name: "createdInstance",
    type: `${ReactReconcilerCreatedInstanceClassName}<${importedNamespace}.Mesh>`
  }, {
    name: "oldProps",
    type: "MeshProps"
  }, {
    name: "newProps",
    type: "MeshProps"
  }])

  getPropertyUpdatesMethodMesh.setBodyText(writer => {
    writer.writeLine("// generated code")
    writer.writeLine(`let mesh: ${importedNamespace}.Mesh = createdInstance.babylonJsObject;`)
    writer.writeLine(`let updates: ${PropertyUpdateType}[] = [];`)

    let addedProperties = new Set();
    meshPropertiesToAdd.sort((a, b) => a.getName().localeCompare(b.getName())).forEach(property => {
      const type = property.getType().getText();
      const propertyName = property.getName();
      // doesn't really matter if it's 'optional', as nothing is forcing JavaScript users to follow your conventions.
      // const isOptional = property.getQuestionTokenNode();

      if (addedProperties.has(propertyName)) {
        console.log(' >> skipping already existing property (ie: was overridden like Mesh.scaling): ', propertyName);
        return;
      }
      addedProperties.add(propertyName);
      // console.log(` >> including Mesh.${propertyName} (${type}))`)

      const meshProperty = classDeclarationMeshProps.addProperty({
        name: propertyName,
        type: type,
      })
      meshProperty.setHasQuestionToken(true);

      switch(type) {
        case "boolean":
        case "number":
        case "string":
          writer.writeLine(`// Mesh.${propertyName} of type '${type}':`)
          writer.write(`if (oldProps.${propertyName} !== newProps.${propertyName})`).block(() => {
            writer.writeLine(`updates.push({\npropertyName: '${propertyName}',\nvalue: newProps.${propertyName},\ntype: '${type}'\n});`);
          });
        break;
        case `${importedNamespace}.Vector3`:
        case `${importedNamespace}.Color3`:
          writer.writeLine(`// Mesh.${propertyName} of Vector3 uses object equals to find diffs:`)
          writer.write(`if (newProps.${propertyName} && (!oldProps.${propertyName} || !oldProps.${propertyName}.equals(newProps.${propertyName})))`).block(() => {
            writer.writeLine(`updates.push({\npropertyName: '${propertyName}',\nvalue: newProps.${propertyName},\ntype: '${type}'\n});`);
          });
        break;
        default:
          writer.writeLine(`// TODO: type: ${type} property (not coded) ${importedNamespace}.Mesh.${propertyName}.`);
        break;
      }
    })
    return writer.writeLine("return updates.length == 0 ? null : updates;");;
  })

  class cameraVisitor implements Visitor {
    visit(node: Node): void {
      if (node.getKind() === SyntaxKind.HeritageClause) {
        
        const nodeType: Type = node.getType()
        
        console.log('Found heritage clause:', node.getKindName(), node.compilerNode)
        
        // const extendsType = this.checker.getTypeAtLocation(firstHeritageClauseType.expression)

      }
    }
  }

  const myVisitors: Visitor[] = [
    new cameraVisitor()
  ]

  const cameraDeclaration : ClassDeclaration = cameraDeclarationsMap.get("Camera")!;
   
  const orderedListCreator = new OrderedListCreator();
  const camerasOrdered : string[] = [];
  orderedListCreator.addDescendantsOrdered([cameraDeclaration], camerasOrdered)

  // TODO: implement an interface 'FiberInstance' with getPropsHandlers() : FiberPropsHandler<T>();
  generatedSourceFile.addClass({
    name: "FiberNode",
    isExported: true
  });

  camerasOrdered.forEach(camera => {    
    const classDeclaration = cameraDeclarationsMap.get(camera)!;

    const baseClass: ClassDeclaration | undefined = classDeclaration.getBaseClass(); // no mix-ins in BabylonJS AFAIK, but would otherwise use baseTypes()

    const classDeclarationMeshPropsHandler = generatedSourceFile.addClass({
      name: "Fiber" + classDeclaration.getName(),
      isExported: true
    });
    classDeclarationMeshPropsHandler.setExtends(`Fiber${baseClass!.getName()}`)

    // build a dynamic getPropsHandler with while(x.getBaseClass() !== undefined)
  });

  let tags : string[] = Array.from(componentsJson.keys()) as string[]
  tags.sort(/* use default ASCII sorter */)

  // These are the string imports needed by react-reconciler
  generatedSourceFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    isExported: true,
    declarations: tags.map(tag => ({
      name: tag,
      type: "string",
      initializer: `'${tag}'`
    }))
  });

  generatedSourceFile.formatText();
  await generatedSourceFile.save();
}

saveComponents();
generateCode();
