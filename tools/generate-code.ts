/**
 * To debug this file using the launch config (Current TS File) need to make 2 changes in tsconfig.json
 * 1. add to include.src "Tools"
 * 2. change compilerOptions.module to "commonjs".
 * I have not investigated a way to do this automatically, but the debugging is extremely helpful with conditional breakpoints.
 * 
 * "could not resolve entry" is the error, if you forget to switch it back as 'src' and 'tool's will be subdirs in compiled.
 */
import { Project, VariableDeclarationKind, NamespaceDeclaration, ClassDeclaration, PropertyDeclaration, CodeBlockWriter, SourceFile, JSDoc, ConstructorDeclaration, Scope, MethodDeclaration, ParameterDeclaration, SyntaxKind, ClassMemberTypes } from 'ts-simple-ast'
import { GeneratedParameter, CreateInfo, CreationType } from "../src/codeGenerationDescriptors";
import { InstanceMetadataParameter, CreatedInstanceMetadata } from "../src/CreatedInstance"

const ReactReconcilerCreatedInstanceMetadata = "CreatedInstanceMetadata";
const PropertyUpdateInterface = "PropertyUpdate";
const BABYLON_NAMESPACE = "BABYLON";
const BABYLON_GUI_NAMESPACE = "GUI"
const ClassNamesPrefix = 'Fiber';

// NOTE: this is important as 'strings' are what are available for NPM import and trigger react reconciler.
const REACT_EXPORTS : Set<string> = new Set<string>();

// These are the base/factory classes we used to generate everything.  Comment them out to skip generation (you must keep "Node", though)
let classesOfInterest : Map<String, ClassNameSpaceTuple | undefined> = new Map<String, ClassNameSpaceTuple | undefined>();

// always needed:
classesOfInterest.set("Node", undefined)

// decides what is generated
classesOfInterest.set("Camera", undefined);
classesOfInterest.set("Material", undefined);
classesOfInterest.set("Mesh", undefined);
classesOfInterest.set("MeshBuilder", undefined)
classesOfInterest.set("Light", undefined);
classesOfInterest.set("Control", undefined);
classesOfInterest.set("Control3D", undefined);
classesOfInterest.set("GUI3DManager", undefined);
classesOfInterest.set("BaseTexture", undefined);
classesOfInterest.set("AdvancedDynamicTexture", undefined);
classesOfInterest.set("ShadowGenerator", undefined)
classesOfInterest.set("EnvironmentHelper", undefined);
classesOfInterest.set("VRExperienceHelper", undefined);
classesOfInterest.set("AbstractScene", undefined);
classesOfInterest.set("Scene", undefined);

const getNamespace = (classDeclaration : ClassDeclaration) : string => {
  let symbol = classDeclaration.getType().compilerType.symbol;
  return (symbol as any).parent.name
}

type ClassNameSpaceTuple = {
  classDeclaration: ClassDeclaration,
  namespace: string
}

const project: Project = new Project({})
project.addExistingSourceFiles(`${__dirname}/../node_modules/babylonjs/**/*.ts`)
project.addExistingSourceFiles(`${__dirname}/../node_modules/babylonjs-gui/**/*.ts`)
const BabylonSourceTS = project.getSourceFileOrThrow('babylon.d.ts')
const BabylonGuiSourceTS = project.getSourceFileOrThrow('babylon.gui.module.d.ts')

const babylonNamespaces: NamespaceDeclaration[] = BabylonSourceTS.getNamespaces().filter(n => n.getName() === BABYLON_NAMESPACE)
babylonNamespaces.forEach(namespaceDeclaration => {
  namespaceDeclaration.getClasses().forEach(babylonClass => {
      const className = babylonClass.getName()
      if (className !== undefined && classesOfInterest.has(className)) {
        classesOfInterest.set(className, {
          classDeclaration: babylonClass,
          namespace: BABYLON_NAMESPACE
        });
      }
    })
});

const babylonGuiNamespaces: NamespaceDeclaration[] = BabylonGuiSourceTS.getNamespaces().filter(n => n.getName() === 'BABYLON.GUI')
babylonGuiNamespaces.forEach(namespaceDeclaration => {
  namespaceDeclaration.getClasses().forEach(babylonClass => {
      const className = babylonClass.getName()

      if (className !== undefined && classesOfInterest.has(className)) {
        classesOfInterest.set(className, {
          classDeclaration: babylonClass,
          namespace: BABYLON_GUI_NAMESPACE
        });
      }
    })
});

const addMetadata = (classDeclaration: ClassDeclaration, originalClassDeclaration?: ClassDeclaration, metadata?: InstanceMetadataParameter, extraMetadata? : (newClassDeclaration: ClassDeclaration, metadata: CreatedInstanceMetadata, originalClassDeclaration?: ClassDeclaration) => void) => {
  const createInfoProperty = classDeclaration.addProperty({
    name: 'Metadata',
    type: ReactReconcilerCreatedInstanceMetadata,
    scope: Scope.Public,
    isStatic: true,
    isReadonly : true
  })

  let metadataClone = metadata === undefined ? {} : {...metadata};

  let propertyInit = {
    ...metadataClone,
    className: classDeclaration.getName()!
  }

  if (extraMetadata) {
    extraMetadata(classDeclaration, propertyInit, originalClassDeclaration)
  }

  createInfoProperty.setInitializer(JSON.stringify(propertyInit, null, 2))
}

const createMeshClasses = (sourceFile: SourceFile) => {

  let meshBuilderTuple: ClassNameSpaceTuple = classesOfInterest.get("MeshBuilder")!;
  let factoryMethods: MethodDeclaration[] = meshBuilderTuple.classDeclaration.getStaticMethods();

  console.log(`Creating ${factoryMethods.length} Mesh objects:`)

  factoryMethods.forEach((method: MethodDeclaration) => {
    const methodName: string = method.getName();
    
    if (methodName && methodName.startsWith('Create') || methodName.startsWith('Extrude')) {
      const factoryType : string = methodName.startsWith('Create')
        ? methodName.substr(new String('Create').length)
        : methodName; // ie: ExtrudePolygon, ExtrudeShape & ExtrudeShapeCustom

      REACT_EXPORTS.add(factoryType);

      console.log(` > ${factoryType}`)
      let newClassDeclaration: ClassDeclaration = addClassDeclarationFromFactoryMethod(sourceFile, factoryType, classesOfInterest.get("Mesh")!.classDeclaration, method);
      addCreateInfoFromFactoryMethod(method, meshBuilderTuple.classDeclaration.getName()!, methodName, newClassDeclaration, BABYLON_NAMESPACE)
      addMetadata(newClassDeclaration, undefined /* no original class */, {
        acceptsMaterials: true,
        isMesh: true
      })
    }
  });
}

const addClassDeclarationFromFactoryMethod = (sourceFile: SourceFile, className: string, classDeclaration: ClassDeclaration, factoryMethod: MethodDeclaration, extra?: (cd: ClassDeclaration) => void) => {
  
  const newClassDeclaration = sourceFile.addClass({
    name: `${ClassNamesPrefix}${className}`,
    isExported: true
  });

  if (extra !== undefined) {
    extra(newClassDeclaration)
  }
  // We don't need to inherit anything, also collides with property declarations
  //cameraClassDeclaration.setExtends(`${ClassNamesPrefix}${baseClass!.getName()}`)

  let meshBuilderNamespace = BABYLON_NAMESPACE; // until we add more static builders

  let jsDocs: JSDoc[] = factoryMethod.getJsDocs();
  const generatedComment = 'This code has been generated'
  if (jsDocs.length > 0) {
    newClassDeclaration.addJsDoc(jsDocs[0].getComment()! + '\n\n' + generatedComment)
  } else {
    newClassDeclaration.addJsDoc(generatedComment)
  }

  const propsHandlersPropertyName = 'propsHandlers';

  const propsHandlerBaseName = classDeclaration.getName()

  newClassDeclaration.addProperty({
    name: propsHandlersPropertyName,
    type: `PropsHandler<${meshBuilderNamespace}.${propsHandlerBaseName}, ${ClassNamesPrefix}${propsHandlerBaseName}Props>[]`, // xxx
    scope: Scope.Private
  })

  newClassDeclaration.addImplements(`HasPropsHandlers<${meshBuilderNamespace}.${propsHandlerBaseName}, ${ClassNamesPrefix}${propsHandlerBaseName}Props>`)

  const newConstructor : ConstructorDeclaration = newClassDeclaration.addConstructor();
  newConstructor.setBodyText((writer : CodeBlockWriter) => {
    writer.writeLine(`this.${propsHandlersPropertyName} = [`)
    
    const propsHandlers : string[] = [];
    let handlerClassDeclaration : ClassDeclaration | undefined = classDeclaration;
    while(handlerClassDeclaration) {
      propsHandlers.push(`new ${ClassNamesPrefix}${handlerClassDeclaration.getName()}PropsHandler()`)
      handlerClassDeclaration = handlerClassDeclaration.getBaseClass()
    }
    writer.writeLine(propsHandlers.join('\n,'));
    writer.writeLine("];")
  })

  let getPropertyUpdatesMethod = newClassDeclaration.addMethod({
    name: "getPropsHandlers",
    returnType: `PropsHandler<${meshBuilderNamespace}.${propsHandlerBaseName}, ${ClassNamesPrefix}${propsHandlerBaseName}Props>[]`
  });

  getPropertyUpdatesMethod.setBodyText(writer => {
    writer.writeLine("return this.propsHandlers;")
  })

  let addPropertyHandlerMethod = newClassDeclaration.addMethod({
    name: "addPropsHandler",
    returnType: "void"
  });
  addPropertyHandlerMethod.addParameter({
    name: 'propHandler',
    type: `PropsHandler<${meshBuilderNamespace}.${propsHandlerBaseName}, ${ClassNamesPrefix}${propsHandlerBaseName}Props>`
  })

  addPropertyHandlerMethod.setBodyText(writer => {
    writer.writeLine("this.propsHandlers.push(propHandler);")
  })

  return newClassDeclaration;
}


const addCreateInfoFromFactoryMethod = (method: MethodDeclaration, factoryClass: string, factoryMethod : string, targetClass: ClassDeclaration, namespace: string) : void => {
  let methodParameters : GeneratedParameter[] = []

  method.getParameters().forEach((createMethodParameter: ParameterDeclaration) => {
    const parameterName: string | undefined = createMethodParameter.getName()

    if (parameterName === undefined) {
      return;
    }

    // getText() accomplishes what we need so far.
    const parameterType: string = createMethodParameter.getType().getText();
    const optional : boolean = createMethodParameter.isOptional();

    let generatedParameter : GeneratedParameter = {
      name: parameterName,
      type: parameterType,
      optional
    }

    if (parameterType.startsWith('BABYLON') === false && createMethodParameter.getType().getSymbol() && createMethodParameter.getType().getSymbol()!.getMembers()) {
        let specialProperties : GeneratedParameter[] = []
        generatedParameter.type = specialProperties;

        // getSymbol()!.getMembers() === getProperties()
        createMethodParameter.getType().getSymbol()!.getMembers().forEach(member => {
          let propertyName = member.getName();
          let internalType = member.getTypeAtLocation(member.getValueDeclaration()!);
          let propertyType = internalType.getText()

          
          //let questionToken2 = (member.getValueDeclaration()!.compilerNode as any).questionToken;
          let questionToken = (member.compilerSymbol.valueDeclaration as any).questionToken;
          
          let generatedSubParameter : GeneratedParameter = {
            name: propertyName,
            type: propertyType,
            optional: questionToken !== undefined
          }

          // conditional breakpoint for inspecting in IDE: factoryMethod === 'CreateSphere'
          specialProperties.push(generatedSubParameter)
        })            
      }

      methodParameters.push(generatedParameter);
  })

  const createInfoProperty = targetClass.addProperty({
    name: 'CreateInfo',
    scope: Scope.Public,
    isStatic: true,
    isReadonly : true
  })

  let value : CreateInfo = {
    creationType: CreationType.FactoryMethod,
    libraryLocation: factoryClass,
    namespace,
    factoryMethod: factoryMethod,
    parameters: methodParameters
  }

  createInfoProperty.setInitializer(JSON.stringify(value, null, 2))
}

const getInstanceSetMethods = (classDeclaration: ClassDeclaration) : MethodDeclaration[] => {
  let instanceSetMethods: MethodDeclaration[] = []
  classDeclaration.getInstanceMethods().forEach((methodDeclaration: MethodDeclaration) => {
    const methodName = methodDeclaration.getName();
    if (methodName.startsWith("set")) {
      
      instanceSetMethods.push(methodDeclaration)
    }
  })

  return instanceSetMethods;
}

const getInstanceProperties = (classDeclaration: ClassDeclaration) : PropertyDeclaration[] => {
  let result: PropertyDeclaration[] = [];

  // for conditional breakpoints on class: classDeclaration.getName() === "Control";
  classDeclaration.getProperties().forEach(property => {
    let propertyName = property.getName()
    if (propertyName[0] === '_') {
      // console.log(` > skipping ${className}.${propertyName} (private/hidden)`)
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

    // add conditional breakpoint to inspect properties.  ie: propertyName==='customShaderNameResolve'
    result.push(property);
  })

  return result;
}

const writeMethodAsUpdateFunction = (classDeclaration: ClassDeclaration, writer: CodeBlockWriter, method: MethodDeclaration, addedMethods: Set<String>, importedNamespace: string, classNameBabylon: string) : void => {
  
  const params: ParameterDeclaration[] = method.getParameters();
  if (params.length === 0) {
    return;
  }

  const methodName = method.getName()

  const meshProperty = classDeclaration.addProperty({
    name: methodName,
    type: 'any', // it's a function signature
  })
  meshProperty.setHasQuestionToken(true);

  let paramTypes: string[] = []
  params.forEach(param => {
    const type = param.getType().getText();
    const questionToken = param.hasQuestionToken ? '?' : ''
    const paramName: string | undefined = param.getName();
    paramTypes.push(`${paramName}${questionToken}: ${type}`)
  })
  
  let type=`(${paramTypes.join(', ')})`

  writer.writeLine(`// ${importedNamespace}.${classNameBabylon}.${methodName} of type '${type}':`)
    writer.write(`if (oldProps.${methodName} !== newProps.${methodName})`).block(() => {
      writer.writeLine(`updates.push({\npropertyName: '${methodName}',\nvalue: newProps.${methodName},\ntype: '${type}'\n});`);
    });

}

const writePropertyAsUpdateFunction = (classDeclaration: ClassDeclaration, writer: CodeBlockWriter, property: PropertyDeclaration, addedProperties: Set<String>, importedNamespace: string, classNameBabylon: string) => {
  const type = property.getType().getText();
  const propertyName: string = property.getName();
  // doesn't really matter if it's 'optional', as nothing is forcing JavaScript users to follow your conventions.
  // const isOptional = property.getQuestionTokenNode();

  // TODO: We need to ensure this is for entire hierarchy. ie: 'name' will be saved multiple times on object creation
  if (addedProperties.has(propertyName)) {
    console.log(' >> skipping already existing property (ie: was overridden like Mesh.scaling): ', propertyName);
    return;
  }
  addedProperties.add(propertyName);
  // console.log(` >> including Mesh.${propertyName} (${type}))`)

  const meshProperty = classDeclaration.addProperty({
    name: propertyName,
    type: type,
  })
  meshProperty.setHasQuestionToken(true);

  if (propertyName.startsWith('on')) {
    writer.writeLine(`// ${importedNamespace}.${classNameBabylon}.${propertyName} of type '${type}/fn':`)
    writer.write(`if (oldProps.${propertyName} === undefined && oldProps.${propertyName} !== newProps.${propertyName})`).block(() => {
      // We need the oldProps[propertyName] here, since we will want to remove that observable (note they are never equal!)
      // TODO: search why these functions are never equal and also removing does not work.  ,prevValue: oldProps.${propertyName}
      writer.writeLine(`updates.push({\npropertyName: '${propertyName}',\nvalue: newProps.${propertyName},\ntype: '${type}'\n});`);
    });
    return;
  }

  switch(type) {
    case "boolean":
    case "number":
    case "string":
    case "string | number": // TODO: split the string on | and check for primitive types.  or use "any" with deep/shallow equals.
      writer.writeLine(`// ${importedNamespace}.${classNameBabylon}.${propertyName} of type '${type}':`)
      writer.write(`if (oldProps.${propertyName} !== newProps.${propertyName})`).block(() => {
        writer.writeLine(`updates.push({\npropertyName: '${propertyName}',\nvalue: newProps.${propertyName},\ntype: '${type}'\n});`);
      });
      break;
    case `${importedNamespace}.Vector3`:
    case `${importedNamespace}.Color3`:
      writer.writeLine(`// ${importedNamespace}.${classNameBabylon}.${propertyName} of ${type} uses object equals to find diffs:`)
      writer.write(`if (newProps.${propertyName} && (!oldProps.${propertyName} || !oldProps.${propertyName}.equals(newProps.${propertyName})))`).block(() => {
        writer.writeLine(`updates.push({\npropertyName: '${propertyName}',\nvalue: newProps.${propertyName},\ntype: '${type}'\n});`);
      });
      break;
    case `${importedNamespace}.Color4`: // Color4.equals() not added until PR #5517
      writer.writeLine(`// ${importedNamespace}.${classNameBabylon}.${propertyName} of ${type}.  Color4.equals() not available in BabylonJS < 4:`)
      writer.write(`if (newProps.${propertyName} && (!oldProps.${propertyName} || oldProps.${propertyName}.r !== newProps.${propertyName}.r || oldProps.${propertyName}.g !== newProps.${propertyName}.g || oldProps.${propertyName}.b !== newProps.${propertyName}.b || oldProps.${propertyName}.a !== newProps.${propertyName}.a))`).block(() => {
        writer.writeLine(`updates.push({\npropertyName: '${propertyName}',\nvalue: newProps.${propertyName},\ntype: '${type}'\n});`);
      });
      break;
    case "BABYLON.GUI.Control":
      writer.writeLine(`// ${importedNamespace}.${classNameBabylon}.${propertyName} of ${importedNamespace}${type} sets once:`)
      writer.write(`if (newProps.${propertyName} && (!oldProps.${propertyName}))`).block(() => {
        writer.writeLine(`updates.push({\npropertyName: '${propertyName}',\nvalue: newProps.${propertyName},\ntype: '${type}'\n});`);
      });
      break;
    default:
      writer.writeLine(`// TODO: type: ${type} property (not coded) ${importedNamespace}.${classNameBabylon}.${propertyName}.`);
      break;
  }
}

const createClassDeclaration = (classDeclaration: ClassDeclaration, rootBaseClass: ClassDeclaration, namespace: string, sourceFile: SourceFile, extra?: (newClassDeclaration: ClassDeclaration, originalClassDeclaration: ClassDeclaration) => void) : ClassDeclaration =>  {
  const baseClass: ClassDeclaration | undefined = classDeclaration.getBaseClass(); // no mix-ins in BabylonJS AFAIK, but would otherwise use baseTypes()
  
  const className = classDeclaration.getName()!

  addPropsAndHandlerClasses(sourceFile, className, className, getInstanceProperties(classDeclaration), getInstanceSetMethods(classDeclaration), namespace, baseClass);

  const newClassDeclaration = sourceFile.addClass({
    name: `${ClassNamesPrefix}${className}`,
    isExported: true
  });
  
  if (extra !== undefined) {
    extra(newClassDeclaration, classDeclaration)
  }

  // We don't need to inherit anything, also collides with property declarations
  //newClassDeclaration.setExtends(`${ClassNamesPrefix}${baseClass!.getName()}`)

  let jsDocs: JSDoc[] = classDeclaration.getJsDocs();
  const generatedComment = 'This code has been generated'
  if (jsDocs.length > 0) {
    newClassDeclaration.addJsDoc(jsDocs[0].getComment()! + '\n\n' + generatedComment)
  } else {
    newClassDeclaration.addJsDoc(generatedComment)
  }

  const propsHandlersPropertyName = 'propsHandlers';

  const rootBaseClassName = rootBaseClass.getName();
  // NOTE: AdvancedDynamicTexture has a different namespace than it's root class.
  const rootBaseClassNamespace = getNamespace(rootBaseClass)

  newClassDeclaration.addProperty({
    name: propsHandlersPropertyName,
    type: `PropsHandler<${rootBaseClassNamespace}.${rootBaseClassName}, ${ClassNamesPrefix}${rootBaseClassName}Props>[]`,
    scope: Scope.Private
  })

  newClassDeclaration.addImplements(`HasPropsHandlers<${rootBaseClassNamespace}.${rootBaseClassName}, ${ClassNamesPrefix}${rootBaseClassName}Props>`)

  const newConstructor : ConstructorDeclaration = newClassDeclaration.addConstructor();
  newConstructor.setBodyText((writer : CodeBlockWriter) => {
    writer.writeLine(`this.${propsHandlersPropertyName} = [`)
    let propsHandlers: string[] = [];

    let baseDeclaration : ClassDeclaration | undefined = classDeclaration
    while(baseDeclaration !== undefined) {
      propsHandlers.push(`new ${ClassNamesPrefix}${baseDeclaration.getName()}PropsHandler()`)
      
      baseDeclaration = baseDeclaration.getBaseClass()
    }

    writer.writeLine(propsHandlers.join(',\n'))
    writer.writeLine("];")
  })

  let getPropertyUpdatesMethod = newClassDeclaration.addMethod({
    name: "getPropsHandlers",
    returnType: `PropsHandler<${rootBaseClassNamespace}.${rootBaseClassName}, ${ClassNamesPrefix}${rootBaseClassName}Props>[]`
  });

  getPropertyUpdatesMethod.setBodyText(writer => {
    writer.writeLine("return this.propsHandlers;")
  })

  let addPropertyHandlerMethod = newClassDeclaration.addMethod({
    name: "addPropsHandler",
    returnType: "void"
  });
  addPropertyHandlerMethod.addParameter({
    name: 'propHandler',
    type: `PropsHandler<${rootBaseClassNamespace}.${rootBaseClassName}, ${ClassNamesPrefix}${rootBaseClassName}Props>`
  })

  addPropertyHandlerMethod.setBodyText(writer => {
    writer.writeLine("this.propsHandlers.push(propHandler);")
  })

  return newClassDeclaration;
}

/**
 * This is used to write classes in inherited order, which is required by compiler.
 * We will probably put all classes in separate files, so this won't be needed.
 */
class OrderedListCreator {
  addDescendantsOrdered = (classDeclarations: ClassDeclaration[], map: Map<string, ClassDeclaration>): void => {
    classDeclarations.forEach(x => {

      if (x.getName() !== undefined && !map.has(x.getName()!)) {
        map.set(x.getName()!, x);
      }

      this.addDescendantsOrdered(x.getDerivedClasses(), map)
    })
  }
}

/**
 * The odd parameters here are because we are also inventing classes not based on real BabylonJS objects (ie: Box, Sphere are actually Mesh)
 * It probably looks like we should just pass along the ClassDeclaration... 
 */
const addPropsAndHandlerClasses = (sourceFile: SourceFile, classNameToGenerate: string, classNameBabylon: string, propertiesToAdd: PropertyDeclaration[], setMethods: MethodDeclaration[], importedNamespace: string, baseClass?: ClassDeclaration) => {
  
  const classDeclarationProps = sourceFile.addClass({
    name: `${ClassNamesPrefix}${classNameToGenerate}Props`,
    isExported: true
  });

  if (baseClass !== undefined) {
    let baseClassName = baseClass.getName()
    classDeclarationProps.setExtends(`${ClassNamesPrefix}${baseClassName}Props`)
  }

  const classDeclarationPropsHandler = sourceFile.addClass({
    name: `${ClassNamesPrefix}${classNameToGenerate}PropsHandler`,
    isExported: true
  });

  classDeclarationPropsHandler.addImplements(`PropsHandler<${importedNamespace}.${classNameBabylon}, ${ClassNamesPrefix}${classNameToGenerate}Props>`)

  let getPropertyUpdatesMethod = classDeclarationPropsHandler.addMethod({
    name: "getPropertyUpdates",
    returnType: `${PropertyUpdateInterface}[] | null`
  });
  getPropertyUpdatesMethod.addParameters([{
    name: "hostInstance",
    type: `${importedNamespace}.${classNameBabylon}`
  }, {
    name: "oldProps",
    type: `${ClassNamesPrefix}${classNameToGenerate}Props`
  }, {
    name: "newProps",
    type: `${ClassNamesPrefix}${classNameToGenerate}Props`
  }, {
    name: "scene",
    type: `${BABYLON_NAMESPACE}.Scene`
  }])

  getPropertyUpdatesMethod.setBodyText((writer : CodeBlockWriter) => {
    writer.writeLine("// generated code")
    
    writer.writeLine(`let updates: ${PropertyUpdateInterface}[] = [];`)

    let addedMeshProperties = new Set();
    propertiesToAdd.sort((a, b) => a.getName().localeCompare(b.getName())).forEach((property: PropertyDeclaration) => {
      writePropertyAsUpdateFunction(classDeclarationProps, writer, property, addedMeshProperties, importedNamespace, classNameBabylon);      
    })

    let addedMeshMethods = new Set();
    setMethods.sort((a,b) => a.getName().localeCompare(b.getName())).forEach((method: MethodDeclaration) => {
      writeMethodAsUpdateFunction(classDeclarationProps, writer, method, addedMeshMethods, importedNamespace, classNameBabylon)
    })
    return writer.writeLine("return updates.length == 0 ? null : updates;");;
  })
}

const addCreateInfoFromConstructor = (sourceClass: ClassDeclaration, targetClass: ClassDeclaration, namespace: string) : void => {
    // this will allow us to do reflection to create the BabylonJS object from application props.
    const ctorArgsProperty = targetClass.addProperty({
      name: 'CreateInfo',
      scope: Scope.Public,
      isStatic: true,
      isReadonly : true
    })
  
    const constructorDeclarations : ConstructorDeclaration[] = sourceClass.getConstructors();
  
    let constructorArguments: GeneratedParameter[] = [];
    if (constructorDeclarations.length > 1) {
      console.error('found multiple constructors (using first):', sourceClass.getName());
    }

    if (constructorDeclarations.length > 0) {
      constructorDeclarations[0].getParameters().forEach(parameterDeclaration => {
        constructorArguments.push({
          name: parameterDeclaration.getName()!,
          type: parameterDeclaration.getType().getText(),
          optional: parameterDeclaration.isOptional()
        })
      })
    }

    let value : CreateInfo = {
      creationType: CreationType.Constructor,
      libraryLocation: sourceClass.getName()!,
      namespace,
      parameters: constructorArguments
    }

    ctorArgsProperty.setInitializer(JSON.stringify(value, null, 2))
}

const createClassesDerivedFrom = (sourceFile: SourceFile, classNamespaceTuple: ClassNameSpaceTuple, metadata?: InstanceMetadataParameter, extra?: (newClassDeclaration: ClassDeclaration, originalClassDeclaration: ClassDeclaration) => void, extraMetadata? : (newClassDeclaration: ClassDeclaration, metadata: CreatedInstanceMetadata, originalClassDeclaration?: ClassDeclaration) => void) : void => { 
  let classDeclaration : ClassDeclaration | undefined = classNamespaceTuple.classDeclaration;
  const className: string = classDeclaration.getName()!;

  const classesToCreate : ClassDeclaration[] = [];

  while(classDeclaration !== undefined) {
    classesToCreate.push(classDeclaration)
    classDeclaration = classDeclaration.getBaseClass()
  }

  classesToCreate.reverse()

  console.log(`Building ${classesToCreate.length} classes derived from '${className}':`)

  for(var i = 0; i < classesToCreate.length; i++) {
    const classDeclaration = classesToCreate[i]

    const baseClassDeclaration : ClassDeclaration | undefined = i > 0 ? classesToCreate[i - 1] : undefined;
    REACT_EXPORTS.add(classDeclaration.getName()!)

    let baseClassDeclarationForCreate = baseClassDeclaration === undefined ? classDeclaration : baseClassDeclaration

    const newClassDeclaration = createClassDeclaration(classDeclaration, baseClassDeclarationForCreate, classNamespaceTuple.namespace, sourceFile, extra);
    addCreateInfoFromConstructor(classDeclaration, newClassDeclaration, classNamespaceTuple.namespace);

    addMetadata(newClassDeclaration, classDeclaration, metadata, extraMetadata);
    console.log(` > ${classDeclaration.getName()}`)
  }
}

/**
 * TODO: We should not be generating abstract classes.
 */
const createClassesInheritedFrom = (sourceFile: SourceFile, classNamespaceTuple: ClassNameSpaceTuple, metadata?: InstanceMetadataParameter, extra?: (newClassDeclaration: ClassDeclaration, originalClassDeclaration: ClassDeclaration) => void, extraMetadata? : (newClassDeclaration: ClassDeclaration, metadata: CreatedInstanceMetadata, originalClassDeclaration?: ClassDeclaration) => void) : void => {
  const orderedListCreator = new OrderedListCreator();
  
  const baseClassDeclaration = classNamespaceTuple.classDeclaration;

  const baseClassName: string = baseClassDeclaration.getName()!;
  REACT_EXPORTS.add(baseClassName)

  const derivedClassesOrdered : Map<string, ClassDeclaration> = new Map<string, ClassDeclaration>();

  orderedListCreator.addDescendantsOrdered([baseClassDeclaration], derivedClassesOrdered)

  console.log(`Building ${derivedClassesOrdered.size} ${baseClassName}s: `)

  derivedClassesOrdered.forEach((derivedClassDeclaration: ClassDeclaration) => {    
    
    REACT_EXPORTS.add(derivedClassDeclaration.getName()!)

    const newClassDeclaration = createClassDeclaration(derivedClassDeclaration, baseClassDeclaration, classNamespaceTuple.namespace, sourceFile, extra);
    addCreateInfoFromConstructor(derivedClassDeclaration, newClassDeclaration, classNamespaceTuple.namespace);

    addMetadata(newClassDeclaration, derivedClassDeclaration, metadata, extraMetadata);
    console.log(` > ${derivedClassDeclaration.getName()}`)
  });
}

const addReactExports = (sourceFile: SourceFile) => {
  let tags: string[] = Array.from(REACT_EXPORTS.keys()) as string[];
  tags.sort( /* use default ASCII sorter */);
  // These are the string imports needed by react-reconciler
  sourceFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    isExported: true,
    declarations: tags.map(tag => {
      // const properTag = tag.charAt(0).toLowerCase() + tag.substr(1);
      return {
        name: tag,
        type: "string",
        initializer: `'${tag}'`
      }
    })
  });
}

const createSingleClass = (classOfInterest: string, sourceFile: SourceFile, baseClass?: ClassDeclaration, metadata?: InstanceMetadataParameter, extra?: () => void) : void => {
  const classToGenerate = classesOfInterest.get(classOfInterest)

  if (classToGenerate === undefined) {
    return; // skipping
  }

  if (baseClass === undefined) {
    baseClass = classToGenerate.classDeclaration
  }

  REACT_EXPORTS.add(classToGenerate.classDeclaration.getName()!)

  const newClassDeclaration = createClassDeclaration(classToGenerate.classDeclaration, baseClass, classToGenerate.namespace, sourceFile, extra);
  addCreateInfoFromConstructor(classToGenerate.classDeclaration, newClassDeclaration, classToGenerate.namespace);

  addMetadata(newClassDeclaration, classToGenerate.classDeclaration, metadata);
  console.log('Single class added')
  console.log(` > ${classToGenerate.classDeclaration.getName()}`)
}

const generateCode = async () => {
  const exportsProject = new Project()
  const generatedSourceFile = exportsProject.createSourceFile(
    `${__dirname}/../src/generatedCode.ts`,
    "",
    { overwrite: true }
  );  

  generatedSourceFile.addImportDeclaration({
    moduleSpecifier: "./PropsHandler",
    namedImports: ["PropsHandler", PropertyUpdateInterface, "HasPropsHandlers"]
  })

  generatedSourceFile.addImportDeclaration({
    moduleSpecifier: "./CreatedInstance",
    namedImports: [ReactReconcilerCreatedInstanceMetadata]
  })

  generatedSourceFile.addImportDeclaration({
    moduleSpecifier: "babylonjs",
    defaultImport: BABYLON_NAMESPACE
  })

  generatedSourceFile.addImportDeclaration({
    moduleSpecifier: "babylonjs-gui",
    defaultImport: BABYLON_GUI_NAMESPACE
  })
 
  const addMeshMetadata = (newClassDeclaration: ClassDeclaration, metadata: CreatedInstanceMetadata, originalClassDeclaration?: ClassDeclaration) => {
    metadata.isMesh = (originalClassDeclaration !== undefined && originalClassDeclaration.getName() === "Mesh")
  }

  // This includes Node, which is base class for ie: Camera, Mesh, etc.
  createClassesDerivedFrom(generatedSourceFile, classesOfInterest.get("Mesh")!, {}, undefined, addMeshMetadata)

  const extra = (newClassDeclaration: ClassDeclaration, originalClassDeclaration: ClassDeclaration) => {
    // consider having targetable as metadata.
    const targetableCameraName = "TargetCamera";

    let baseDeclaration : ClassDeclaration | undefined = originalClassDeclaration
    let isTargetable : boolean = false;
    while(baseDeclaration !== undefined) {
      if (baseDeclaration.getName() === targetableCameraName) {
        isTargetable = true;
        break;
      }
      
      baseDeclaration = baseDeclaration.getBaseClass()
    }

    newClassDeclaration.addProperty({
      name: 'isTargetable',
      type: Boolean,
      scope: Scope.Public,
      isReadonly: true,
      initializer: `${isTargetable}`
    })
  };

  if (classesOfInterest.get("Camera") !== undefined) {
    createClassesInheritedFrom(generatedSourceFile, classesOfInterest.get("Camera")!, { isCamera: true }, extra);
  }

  if (classesOfInterest.get("MeshBuilder") !== undefined) {
    createMeshClasses(generatedSourceFile);
  }

  if (classesOfInterest.get("Material")) {
    createClassesInheritedFrom(generatedSourceFile, classesOfInterest.get("Material")!, { isMaterial: true });
  }

  if (classesOfInterest.get("Light")) {
    createClassesInheritedFrom(generatedSourceFile, classesOfInterest.get("Light")!, undefined, undefined, (classDeclaration: ClassDeclaration, metadata: CreatedInstanceMetadata, originalClassDeclaration?: ClassDeclaration) => {
      if (originalClassDeclaration) {
        // TODO: walk the class hierarchy (or original class) to look for "ShadowLight" instead.
        switch(originalClassDeclaration.getName()) {
          case "DirectionalLight":
          case "PointLight":
          case "SpotLight":
          case "ShadowLight": // I think it's abstract.  Anyway, it can still be created.
            metadata.isShadowLight = true;
            break;
        }
      }
    });
  }

  if (classesOfInterest.get("Control")) {
    createClassesInheritedFrom(generatedSourceFile, classesOfInterest.get("Control")!, { isGUI2DControl: true});
  }

  if (classesOfInterest.get("Control3D")) {
    createClassesInheritedFrom(generatedSourceFile, classesOfInterest.get("Control3D")!, { isGUI3DControl: true});
  }

  if (classesOfInterest.get("BaseTexture")) {
    createClassesInheritedFrom(generatedSourceFile, classesOfInterest.get("BaseTexture")!, {isTexture: true});
    createSingleClass("AdvancedDynamicTexture", generatedSourceFile, classesOfInterest.get("BaseTexture")!.classDeclaration, { isGUI2DControl: true}, () => {})
  } 
  
  createSingleClass("GUI3DManager", generatedSourceFile, undefined, { isGUI3DControl: true }, () => {})
  createSingleClass("ShadowGenerator", generatedSourceFile, undefined, { delayCreation: true }, () => {})
  createSingleClass("EnvironmentHelper", generatedSourceFile, undefined, { isEnvironment: true })
  createSingleClass("VRExperienceHelper", generatedSourceFile)
  
  if (classesOfInterest.get("Scene")) {
    // Scene we only want to generate the handlers. Constructor is very simple - just an Engine
    const sceneTuple: ClassNameSpaceTuple = classesOfInterest.get("Scene")!
    const className: string = sceneTuple.classDeclaration.getName()!
    addPropsAndHandlerClasses(generatedSourceFile, className, className, getInstanceProperties(sceneTuple.classDeclaration), getInstanceSetMethods(sceneTuple.classDeclaration), sceneTuple.namespace, undefined);
  }
  addReactExports(generatedSourceFile);

  generatedSourceFile.formatText();
  await generatedSourceFile.save();
}
generateCode();

console.log('done');