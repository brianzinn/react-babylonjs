// NOTE: if you rename this to .ts then you will need to cast everything as any, because ts-simple-ast
const { Project, VariableDeclarationKind } = require('ts-simple-ast')
const BABYLON = require('babylonjs')
const sortJson = require('sort-json')
const { promisify } = require('util')
const { writeFile } = require('fs')

// save object as JSON
const write = promisify(writeFile)
const save = (filename, obj) => write(filename, JSON.stringify(sortJson(obj, { depth: 4 }), null, 2))

const info = {}

// get family of className, if defined
const getFamily = name => {
  for (let k of Object.keys(info)) {
    if (info[k].indexOf && info[k].indexOf(name) !== -1) {
      return k
    }
  }
}

const stuff = Object.keys(BABYLON).filter(p => p[0] !== '_')

// get names of cameras
info.cameras = stuff
  .filter(p => p.indexOf('Camera') !== -1 && p.indexOf('Input') === -1 && p !== 'serializeAsCameraReference')

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

// get info about classes that have been found
const componentsJson = {}
const project = new Project({})
project.addExistingSourceFiles(`${__dirname}/../node_modules/babylonjs/**/*.ts`)
const sourceFile = project.getSourceFileOrThrow('babylon.d.ts')
const babylonNamespaces = sourceFile
  .getNamespaces()
  .filter(n => n.getName() === 'BABYLON')


const meshClasses = []
let MeshBuilder
babylonNamespaces.forEach(n =>
  n.getClasses().forEach(
    c => {
      // all classes here
      const name = c.getName()
      const family = getFamily(name)
      if (family) {
        const constructor = c.getConstructors()[0]
        // here you know it's a class we already found
        componentsJson[name] = {
          name,
          family,
          props: c.getInstanceProperties().map(m => m.getName()).filter(p => p[0] !== '_'),
          args: []
        }
        if (constructor) {
          componentsJson[name].args = c.getConstructors()[0].getParameters().map(p => p.getName())
        }
      }
      if (name === 'MeshBuilder') {
        MeshBuilder = c
      }

      // we can get this also from navigating the namespaces parent/child.  ie: mesh -> parent -> parent ... Node
      if (name === 'Node' || name === 'TransformNode' || name === 'AbstractMesh' || name === 'Mesh') {
        meshClasses.push(c);
      }
    }
  )
)

if (MeshBuilder) {
  info.meshes.forEach(name => {
    const method = MeshBuilder.getMethod(`Create${name}`)
    if (!method) {
      return
    }
    const meshInfo = { name, args: [], family: 'meshes' }
    method.getParameters().forEach(p => {
      const pname = p.getName()
      meshInfo.args.push(pname)
      if (pname === 'options') {
        // console.log(name, p.print())
        meshInfo.options = p.getType().getProperties().map(f => f.getName())
      }
    })
    componentsJson[name] = meshInfo
  })
}

const saveComponents = async () => {
  // save info in JSON files
  await save(`${__dirname}/../src/components.json`, componentsJson)
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

  generatedSourceFile.addImportDeclaration({
    moduleSpecifier: "babylonjs",
    defaultImport: "BABYLON"
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

  let meshPropertiesToAdd = []
  meshClasses.forEach(meshClass => {
    // const className = meshClass.getName();
    meshClass.getProperties().forEach(property => {
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

      meshPropertiesToAdd.push(property);
    })
  })

  const classDeclarationMeshPropsHandler = generatedSourceFile.addClass({
    name: "MeshPropsHandler",
    isExported: true
  });
  classDeclarationMeshPropsHandler.addImplements("PropsHandler<BABYLON.Mesh, MeshProps>")
  let getPropertyUpdatesMethodMesh = classDeclarationMeshPropsHandler.addMethod({
    name: "getPropertyUpdates",
    returnType: `${PropertyUpdateType}[] | null`
  });
  getPropertyUpdatesMethodMesh.addParameters([{
    name: "createdInstance",
    type: `${ReactReconcilerCreatedInstanceClassName}<BABYLON.Mesh>`
  }, {
    name: "oldProps",
    type: "MeshProps"
  }, {
    name: "newProps",
    type: "MeshProps"
  }])

  getPropertyUpdatesMethodMesh.setBodyText(writer => {
    writer.writeLine("// generated code")
    writer.writeLine("let mesh: BABYLON.Mesh = createdInstance.babylonJsObject;")
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
        case "BABYLON.Vector3":
          writer.writeLine(`// Mesh.${propertyName} of Vector3 uses object equals to find diffs:`)
          writer.write(`if (newProps.${propertyName} && (!oldProps.${propertyName} || !oldProps.${propertyName}.equals(newProps.${propertyName})))`).block(() => {
            writer.writeLine(`updates.push({\npropertyName: '${propertyName}',\nvalue: newProps.${propertyName},\ntype: '${type}'\n});`);
          });
        break;
        default:
          writer.writeLine(`// TODO: type: ${type} property (not coded) BABYLON.Mesh.${propertyName}.`);
        break;
      }
    })
    return writer.writeLine("return updates.length == 0 ? null : updates;");;
  })

  let tags = Object.keys(componentsJson)
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
