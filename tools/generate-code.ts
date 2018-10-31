import { Project, VariableDeclarationKind, NamespaceDeclaration, ClassDeclaration, PropertyDeclaration, CodeBlockWriter, SourceFile, JSDoc, ConstructorDeclaration, Scope, MethodDeclaration, ParameterDeclaration, SyntaxKind } from 'ts-simple-ast'

const ReactReconcilerCreatedInstanceClassName = "CreatedInstance";
const PropertyUpdateType = "PropertyUpdate";
const BABYLON_NAMESPACE = "BABYLON";
const BABYLON_GUI_NAMESPACE = "GUI"
const ClassNamesPrefix = 'Fiber';

/** Following classes are duplicated in render.ts for now */
type GeneratedParameter = {
  name: string,
  type: string | GeneratedParameter[],
  optional: boolean
}

class CreationType {
  public static readonly FactoryMethod : string = 'FactoryMethod'
  public static readonly Constructor : string = 'Constructor'
}

type CreateInfo = {
  libraryLocation: string, // ie: `BABYLON.${libraryLocation}`
  factoryMethod?: string, // required for 'Factory' creation type.
  creationType: string,
  parameters: GeneratedParameter[]
}

type CreatedInstanceMetadata = {
  className: string // for inspection/debugging
  shadowGenerator?: boolean // children will auto-cast shadows
  acceptsMaterials?: boolean
  isTargetable?: boolean // will attach a target props handler
  // TODO: more metadata to follow
}
/** end of duplicated code */

// NOTE: this is important as 'strings' are what are available for NPM import and trigger react reconciler.
const REACT_EXPORTS : Set<string> = new Set<string>();

// These are the base/factory classes we used to generate everything.  Comment them out to skip generation (you must keep "Node", though)
let classesOfInterest : Map<String, ClassNameSpaceTuple | undefined> = new Map<String, ClassNameSpaceTuple | undefined>();

classesOfInterest.set("Camera", undefined);
classesOfInterest.set("Material", undefined);
classesOfInterest.set("Mesh", undefined);
classesOfInterest.set("MeshBuilder", undefined)
classesOfInterest.set("Node", undefined)
classesOfInterest.set("Light", undefined);
classesOfInterest.set("Control", undefined);
classesOfInterest.set("Control3D", undefined);

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

const addMetadata = (classDeclaration: ClassDeclaration, metadata: CreatedInstanceMetadata) => {
  const createInfoProperty = classDeclaration.addProperty({
    name: 'Metadata',
    scope: Scope.Public,
    isStatic: true,
    isReadonly : true
  })

  createInfoProperty.setInitializer(JSON.stringify(metadata, null, 2))
}

const createMeshClasses = (sourceFile: SourceFile) => {

  let meshBuilderTuple: ClassNameSpaceTuple = classesOfInterest.get("MeshBuilder")!;

  let meshPropertiesToAdd: PropertyDeclaration[] = []

  let meshClassDeclaration : ClassDeclaration | undefined = (classesOfInterest.get("Mesh") === undefined ? undefined : classesOfInterest.get("Mesh")!.classDeclaration);
  while(meshClassDeclaration !== undefined) {
      meshPropertiesToAdd.push(...getMethodInstanceProperties(meshClassDeclaration))
      meshClassDeclaration = meshClassDeclaration.getBaseClass();
  }

  if (meshPropertiesToAdd.length == 0) {
    console.error("'Mesh' is a required class of interest to generate from MeshBuilder.")
  }

  addPropsAndHandlerClasses(sourceFile, "Mesh", "Mesh", meshPropertiesToAdd, meshBuilderTuple.namespace, "Node")

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
      let newClassDeclaration: ClassDeclaration = addClassDeclarationFromFactoryMethod(sourceFile, factoryType, "Mesh", method);
      addCreateInfoFromFactoryMethod(method, meshBuilderTuple.classDeclaration.getName()!, methodName, newClassDeclaration)
      addMetadata(newClassDeclaration, {
        className: factoryType,
        acceptsMaterials: true
      })
    }
  });
}

const addClassDeclarationFromFactoryMethod = (sourceFile: SourceFile, className: string, propsHandlerBaseName: string, factoryMethod: MethodDeclaration, extra?: (cd: ClassDeclaration) => void) => {
  
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

  newClassDeclaration.addProperty({
    name: propsHandlersPropertyName,
    type: `PropsHandler<${meshBuilderNamespace}.${propsHandlerBaseName}, ${ClassNamesPrefix}${propsHandlerBaseName}Props>[]`, // xxx
    scope: Scope.Private
  })

  newClassDeclaration.addImplements(`HasPropsHandlers<${meshBuilderNamespace}.${propsHandlerBaseName}, ${ClassNamesPrefix}${propsHandlerBaseName}Props>`)

  const newConstructor : ConstructorDeclaration = newClassDeclaration.addConstructor();
  newConstructor.setBodyText((writer : CodeBlockWriter) => {
    writer.writeLine(`this.${propsHandlersPropertyName} = [`)
    writer.writeLine(`new ${ClassNamesPrefix}${propsHandlerBaseName}PropsHandler()`)
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


const addCreateInfoFromFactoryMethod = (method: MethodDeclaration, factoryClass: string, factoryMethod : string, targetClass: ClassDeclaration) : void => {
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
    factoryMethod: factoryMethod,
    parameters: methodParameters
  }

  createInfoProperty.setInitializer(JSON.stringify(value, null, 2))
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

    // add conditinal breakpoint to inspect properties.  ie: propertyName==='customShaderNameResolve'
    result.push(property);
  })

  return result;
}

const writePropertyAsUpdateFunction = (classDeclaration: ClassDeclaration, writer: CodeBlockWriter, property: PropertyDeclaration, addedProperties: Set<String>, importedNamespace: string, classNameBabylon: string) => {
  const type = property.getType().getText();
      const propertyName: string = property.getName();
      // doesn't really matter if it's 'optional', as nothing is forcing JavaScript users to follow your conventions.
      // const isOptional = property.getQuestionTokenNode();

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

      switch(type) {
        case "boolean":
        case "number":
        case "string":
          writer.writeLine(`// ${importedNamespace}.${classNameBabylon}.${propertyName} of type '${type}':`)
          writer.write(`if (oldProps.${propertyName} !== newProps.${propertyName})`).block(() => {
            writer.writeLine(`updates.push({\npropertyName: '${propertyName}',\nvalue: newProps.${propertyName},\ntype: '${type}'\n});`);
          });
        break;
        case `${importedNamespace}.Vector3`:
        case `${importedNamespace}.Color3`:
          writer.writeLine(`// ${importedNamespace}.${classNameBabylon}.${propertyName} of ${importedNamespace}${type} uses object equals to find diffs:`)
          writer.write(`if (newProps.${propertyName} && (!oldProps.${propertyName} || !oldProps.${propertyName}.equals(newProps.${propertyName})))`).block(() => {
            writer.writeLine(`updates.push({\npropertyName: '${propertyName}',\nvalue: newProps.${propertyName},\ntype: '${type}'\n});`);
          });
        break;
        default:
          writer.writeLine(`// TODO: type: ${type} property (not coded) ${importedNamespace}.${classNameBabylon}.${propertyName}.`);
        break;
      }
}

const createClassDeclaration = (classDeclaration: ClassDeclaration, rootBaseClassName: string, namespace: string, sourceFile: SourceFile, extra?: (newClassDeclaration: ClassDeclaration, originalClassDeclaration: ClassDeclaration) => void) : ClassDeclaration =>  {
  const baseClass: ClassDeclaration | undefined = classDeclaration.getBaseClass(); // no mix-ins in BabylonJS AFAIK, but would otherwise use baseTypes()
  const baseClassName : string | undefined = (baseClass === undefined) ? undefined : baseClass.getName();

  const className = classDeclaration.getName()!
  addPropsAndHandlerClasses(sourceFile, className, className, getMethodInstanceProperties(classDeclaration), namespace, baseClassName);

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

  newClassDeclaration.addProperty({
    name: propsHandlersPropertyName,
    type: `PropsHandler<${namespace}.${rootBaseClassName}, ${ClassNamesPrefix}${rootBaseClassName}Props>[]`, // xxx
    scope: Scope.Private
  })

  newClassDeclaration.addImplements(`HasPropsHandlers<${namespace}.${rootBaseClassName}, ${ClassNamesPrefix}${rootBaseClassName}Props>`)

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
    returnType: `PropsHandler<${namespace}.${rootBaseClassName}, ${ClassNamesPrefix}${rootBaseClassName}Props>[]`
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
    type: `PropsHandler<${namespace}.${rootBaseClassName}, ${ClassNamesPrefix}${rootBaseClassName}Props>`
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
const addPropsAndHandlerClasses = (sourceFile: SourceFile, classNameToGenerate: string, classNameBabylon: string, propertiesToAdd: PropertyDeclaration[], importedNamespace: string, baseClassName?: string) => {
  
  const classDeclarationProps = sourceFile.addClass({
    name: `${ClassNamesPrefix}${classNameToGenerate}Props`,
    isExported: true
  });

  if (baseClassName) {
    classDeclarationProps.setExtends(`${ClassNamesPrefix}${baseClassName}Props`)
  }

  const classDeclarationPropsHandler = sourceFile.addClass({
    name: `${ClassNamesPrefix}${classNameToGenerate}PropsHandler`,
    isExported: true
  });

  classDeclarationPropsHandler.addImplements(`PropsHandler<${importedNamespace}.${classNameBabylon}, ${ClassNamesPrefix}${classNameToGenerate}Props>`)

  let getPropertyUpdatesMethod = classDeclarationPropsHandler.addMethod({
    name: "getPropertyUpdates",
    returnType: `${PropertyUpdateType}[] | null`
  });
  getPropertyUpdatesMethod.addParameters([{
    name: "createdInstance",
    type: `${ReactReconcilerCreatedInstanceClassName}<${importedNamespace}.${classNameBabylon}>`
  }, {
    name: "oldProps",
    type: `${ClassNamesPrefix}${classNameToGenerate}Props`
  }, {
    name: "newProps",
    type: `${ClassNamesPrefix}${classNameToGenerate}Props`
  }])

  getPropertyUpdatesMethod.setBodyText((writer : CodeBlockWriter) => {
    writer.writeLine("// generated code")
    writer.writeLine(`let babylonObject: ${importedNamespace}.${classNameBabylon} = createdInstance.babylonJsObject;`)
    writer.writeLine(`let updates: ${PropertyUpdateType}[] = [];`)

    let addedMeshProperties = new Set();
    propertiesToAdd.sort((a, b) => a.getName().localeCompare(b.getName())).forEach((property: PropertyDeclaration) => {
      writePropertyAsUpdateFunction(classDeclarationProps, writer, property, addedMeshProperties, importedNamespace, classNameBabylon);      
    })
    return writer.writeLine("return updates.length == 0 ? null : updates;");;
  })
}

const addCreateInfoFromOriginalConstructor = (originalClass: ClassDeclaration, targetClass: ClassDeclaration) : void => {
    // this will allow us to do reflection to create the BabylonJS object from application props.
    const ctorArgsProperty = targetClass.addProperty({
      name: 'CreateInfo',
      scope: Scope.Public,
      isStatic: true,
      isReadonly : true
    })
  
    const constructorDeclarations : ConstructorDeclaration[] = originalClass.getConstructors();
  
    let constructorArguments: GeneratedParameter[] = [];
    if (constructorDeclarations.length > 1) {
      console.warn('found multiple constructors:', originalClass.getName());
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
      libraryLocation: originalClass.getName()!,
      parameters: constructorArguments
    }

    ctorArgsProperty.setInitializer(JSON.stringify(value, null, 2))
}

/**
 * TODO: We should not be generating abstract classes.
 */
const createClassesInheritedFrom = (sourceFile: SourceFile, classNamespaceTuple: ClassNameSpaceTuple, extra?: (newClassDeclaration: ClassDeclaration, originalClassDeclaration: ClassDeclaration) => void) : void => {
  const orderedListCreator = new OrderedListCreator();
  
  const classDeclaration = classNamespaceTuple.classDeclaration;

  const baseClassName: string = classDeclaration.getName()!;
  REACT_EXPORTS.add(baseClassName)

  const derivedClassesOrdered : Map<string, ClassDeclaration> = new Map<string, ClassDeclaration>();

  orderedListCreator.addDescendantsOrdered([classDeclaration], derivedClassesOrdered)

  console.log(`Building ${derivedClassesOrdered.size} ${baseClassName}s: `)

  derivedClassesOrdered.forEach((derivedClassDeclaration: ClassDeclaration) => {    
    
    REACT_EXPORTS.add(derivedClassDeclaration.getName()!)

    const newClassDeclaration = createClassDeclaration(derivedClassDeclaration, baseClassName, classNamespaceTuple.namespace, sourceFile, extra);
    addCreateInfoFromOriginalConstructor(classDeclaration, newClassDeclaration);
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
    declarations: tags.map(tag => ({
      name: tag,
      type: "string",
      initializer: `'${tag}'`
    }))
  });
}

const generateCode = async () => {
  const exportsProject = new Project()
  const generatedSourceFile = exportsProject.createSourceFile(
    `${__dirname}/../src/generatedCode.ts`,
    "",
    { overwrite: true }
  );  

  generatedSourceFile.addImportDeclaration({
    moduleSpecifier: "./render",
    namedImports: [ReactReconcilerCreatedInstanceClassName, PropertyUpdateType]
  })

  generatedSourceFile.addImportDeclaration({
    moduleSpecifier: "babylonjs",
    defaultImport: BABYLON_NAMESPACE
  })

  generatedSourceFile.addImportDeclaration({
    moduleSpecifier: "babylonjs-gui",
    defaultImport: BABYLON_GUI_NAMESPACE
  })

  const propsHandlerInterfaceDeclaration = generatedSourceFile.addInterface({
    name: "PropsHandler",
    isExported: true
  });
  propsHandlerInterfaceDeclaration.addTypeParameters([{
    name: 'T'
  }, {
    name: 'U'
  }]);
  let getPropertyUpdatesMethod = propsHandlerInterfaceDeclaration.addMethod({
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

  const interfaceDeclaration = generatedSourceFile.addInterface({
    name: "HasPropsHandlers",
    isExported: true
  });
  interfaceDeclaration.addTypeParameters([{
    name: 'T'
  }, {
    name: 'U'
  }]);
  interfaceDeclaration.addMethod({
    name: "getPropsHandlers",
    returnType: "PropsHandler<T, U>[]"
  });

  const addProsHandlerMethod = interfaceDeclaration.addMethod({
    name: "addPropsHandler",
    returnType: "void"
  });
  addProsHandlerMethod.addParameter({
    name: "propHandler",
    type: "PropsHandler<T, U>"
  })

  // This is the base class for many things (camera, meshes, etc.)
  generatedSourceFile.addClass({
    name: `${ClassNamesPrefix}Node`,
    isExported: true
  });
  
  let nodeTuple = classesOfInterest.get("Node")!;
  addPropsAndHandlerClasses(generatedSourceFile, "Node", "Node", getMethodInstanceProperties(nodeTuple.classDeclaration!), nodeTuple.namespace);
   
  const extra = (newClassDeclaration: ClassDeclaration, originalClassDeclaration: ClassDeclaration) => {

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
    createClassesInheritedFrom(generatedSourceFile, classesOfInterest.get("Camera")!, extra);
  }

  if (classesOfInterest.get("MeshBuilder") !== undefined) {
    createMeshClasses(generatedSourceFile);
  }

  if (classesOfInterest.get("Material")) {
    createClassesInheritedFrom(generatedSourceFile, classesOfInterest.get("Material")!);
  }

  if (classesOfInterest.get("Light")) {
    createClassesInheritedFrom(generatedSourceFile, classesOfInterest.get("Light")!);
  }

  if (classesOfInterest.get("Control")) {
    createClassesInheritedFrom(generatedSourceFile, classesOfInterest.get("Control")!);
  }

  if (classesOfInterest.get("Control3D")) {
    createClassesInheritedFrom(generatedSourceFile, classesOfInterest.get("Control3D")!);
  }

  addReactExports(generatedSourceFile);

  generatedSourceFile.formatText();
  await generatedSourceFile.save();
}

generateCode();

console.log('done');