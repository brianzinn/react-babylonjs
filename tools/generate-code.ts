/**
 * To debug this file using the launch config (Current TS File) need to make 2 changes in tsconfig.json
 * 1. add to include.src "Tools"
 * 2. change compilerOptions.module to "commonjs" (from es2015).
 * I have not investigated a way to do this automatically, but the debugging is extremely helpful with conditional breakpoints with reading ts-simple-ast/ts-morph.
 * 
 * "could not resolve entry" is the error, if you forget to switch it back as 'src' and 'tool's will be subdirs in compiled.
 */
import { Project, ts, Type, VariableDeclarationKind, ClassDeclaration, PropertyDeclaration, CodeBlockWriter, SourceFile, JSDoc, ConstructorDeclaration, Scope, MethodDeclaration, ParameterDeclaration, WriterFunction, OptionalKind, PropertySignatureStructure, Writers, ImportDeclarationStructure, ImportDeclaration, FunctionDeclaration, VariableStatement, NamespaceDeclarationKind, InterfaceDeclaration, MethodSignature, EnumDeclaration, NamespaceDeclaration } from 'ts-morph'

import { GeneratedParameter, CreateInfo, CreationType } from "../src/codeGenerationDescriptors";
import { InstanceMetadataParameter, CreatedInstanceMetadata } from "../src/CreatedInstance"
const path = require("path");

const ReactReconcilerCreatedInstanceMetadata = "CreatedInstanceMetadata";
const PropertyUpdateInterface = "PropertyUpdate";
const ClassNamesPrefix = 'Fiber';

type ClassNameSpaceTuple = {
  classDeclaration: ClassDeclaration,
  moduleDeclaration: ModuleDeclaration
}

console.log('ver:', ts.version);

// NOTE: 'strings' are what are available for NPM import for 'Component', while JSX.IntrinsicElements are global (for now).
// Both are created the same way as host components by react-reconciler
const REACT_EXPORTS : Set<string> = new Set<string>();
let INTRINSIC_ELEMENTS: InterfaceDeclaration;
const _hostElementMap: Set<string> = new Set<string>();
/**
 * 
 * @param className may not exist with an underlying 'type'.  ie: Box, Sphere
 * @param factoryTypeDeclaration 
 */
const addHostElement = (className: string, babylonjsClassDeclaration: ClassDeclaration): void => {
  if (!REACT_EXPORTS.has(className)) {
    REACT_EXPORTS.add(className);

    _hostElementMap.add(className); // prevent duplicates
    const { intersectionType } = Writers;
    if (className !== 'Polygon') {
      // TS warning: Property 'polygon' must be of type SVGProps<SVGPolygonElement>, but here has type..., so we are skipping to generate polygon for now.  TypeScript has some issues with `global` in flight.

      const moduleDeclaration = getModuleDeclarationFromClassDeclaration(babylonjsClassDeclaration);

      INTRINSIC_ELEMENTS.addProperty({
        name: camelCase(className),
        type:  intersectionType(
          intersectionType(`${ClassNamesPrefix}${babylonjsClassDeclaration.getName()}Props`, `${ClassNamesPrefix}${className}PropsCtor`),
          `BabylonNode<${moduleDeclaration.importAlias}>`
        )
      });
    }
  }
}

const monkeyPatchInterfaces: Map<string, InterfaceDeclaration[]> = new Map<string, InterfaceDeclaration[]>();
const enumMap: Map<string, string> = new Map<string, string>();
const PROPS_EXPORTS : string[] = []; // used to put all props in single import.

// These are the base/factory classes we used to generate everything.  Comment them out to skip generation (you must keep "Node", though)
let classesOfInterest : Map<String, ClassNameSpaceTuple | undefined> = new Map<String, ClassNameSpaceTuple | undefined>();

// always needed:
classesOfInterest.set("Node", undefined)
classesOfInterest.set("Mesh", undefined);
classesOfInterest.set("AbstractScene", undefined);
classesOfInterest.set("Scene", undefined);

// decides what is generated
classesOfInterest.set("Camera", undefined);
classesOfInterest.set("Material", undefined);
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

/**
 * Generally importAlias is the same as declarationType.  They differ when they are Animation/Animation[], so the declaration includes
 * additional typing for the declaration.
 */
type ModuleDeclaration = {
  moduleSpecifier: string,
  className: string,
  importAlias: string,
  declarationType: string // TODO: is this used/needed?
};

type FileModuleDeclaration = {
  hostComponent: boolean, // used to generate factory
  sourceFile: SourceFile, // needed since we use filePath as key for top-level dictionary
  moduleDeclaration: ModuleDeclaration
}

const importDeclarationMap: Map<string, Map<string, FileModuleDeclaration[]>> = new Map<string, Map< string, FileModuleDeclaration[]>>();

const capitalize = (value: string) =>  {
  if (!value || value.length === 0) {
      return value;
  }
  return value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();
}

/**
 * TODO: fix this so, that classes with acronyms are properly formatted (I think _ does this).
 * ie: VRExperienceHelper -> vrExperienceHelper, PBRMaterial -> pbrMaterial
 * 
 * @param value
 */
const camelCase = (value: string): string => {
  return value.charAt(0).toLowerCase() + value.substring(1);
}

const getModuleDeclarationFromClassDeclaration = (classDeclaration: ClassDeclaration): ModuleDeclaration => {
  const sourceFile = classDeclaration.getSourceFile();

  const match = sourceFile.getFilePath().match(`node_modules/(.*)${sourceFile.getExtension()}`);

  if (match === null || match.length < 2) {
    throw new Error(`could not find module from ${sourceFile.getFilePath()}`);
  }

  const moduleSpecifier = match[1]!;
  const packageName = moduleSpecifier.substr(0, moduleSpecifier.indexOf('/', '@babylonjs/'.length))
  const className = classDeclaration.getName()!;

  // ie: '@babylonjs/core' -> BabylonjsCore
  const aliasPrefix = packageName.substr(1).split('/').map(x => capitalize(x)).join('');
  const classAlias = `${aliasPrefix}${className}`

  return {
    moduleSpecifier,
    className,
    importAlias: classAlias,
    declarationType: classAlias
  };
}

const addNamedImportToFile = (moduleDeclaration: ModuleDeclaration, targets: SourceFile[], isHostComponent: boolean): void => {
  targets.forEach(file => {
    const fileKey = file.getFilePath();
    if(!importDeclarationMap.has(fileKey)) {
      const fileMap: Map<string, FileModuleDeclaration[]> = new Map<string, FileModuleDeclaration[]>();
      importDeclarationMap.set(fileKey, fileMap);
    }

    const existingFileMap: Map<string, FileModuleDeclaration[]> = importDeclarationMap.get(fileKey)!;

    if (!existingFileMap.has(moduleDeclaration.moduleSpecifier)) {
      existingFileMap.set(moduleDeclaration.moduleSpecifier, []);
    }

    const declarationList: FileModuleDeclaration[] = existingFileMap.get(moduleDeclaration.moduleSpecifier)!;
    const match = declarationList.find(i =>
      i.moduleDeclaration.className === moduleDeclaration.className
    )

    if (match === undefined) {
      // console.error('not found:', moduleDeclaration.className, 'in -> ', declarationList.map(t => t.moduleDeclaration.className).join(','));
      
      declarationList.push({
        hostComponent: isHostComponent,
        sourceFile: file,
        moduleDeclaration
      })
    } else {
      match.hostComponent = match.hostComponent || isHostComponent;
    }
  })
}

/**
 * 
 * Would comvert something like BabylonjsCore
 * 
 * @param input 
 */
const reduceToImport = (input: string): string => {
  let result = input;
  while(result.endsWith('[]')) {
    result = result.substr(0, result.length - 2);
  }
  return result;
}

const createTypeFromText = (typeText: string, targetFiles: SourceFile[], customPattern?: RegExp): string => {
  // ^<> for generics.  ',)' for parameter lists, ';' for types, '|' for unions
  const pattern: RegExp = /import\(\"([^\"]+)\"\)\.([^<>,;\|) ]+)/;
  
  let match = typeText.match(customPattern || pattern);

  while (match !== null && match.length === 3) {
    const importLocation = match[1];
    const importClassName = match[2];

    if (importClassName.endsWith(' ')) {
      console.error('match', match);
    }

    const pathMatch = importLocation.match(/node_modules\/(.*)/);

    if (pathMatch !== null && pathMatch.length === 2) {
      const moduleSpecifier = pathMatch[1]!;
      const packageName = moduleSpecifier.substr(0, moduleSpecifier.indexOf('/', '@babylonjs/'.length))

      // ie: '@babylonjs/core' -> BabylonjsCore
      const aliasPrefix = packageName.substr(1).split('/').map(x => capitalize(x)).join('');
      const classAlias = `${aliasPrefix}${importClassName}`

      const importAlias = reduceToImport(classAlias);
      const className = reduceToImport(importClassName);

      const moduleDeclaration: ModuleDeclaration = {
        moduleSpecifier,
        className,
        importAlias: importAlias,
        declarationType: classAlias
      };

      // This is only to skip unused enumerations like SimplificationType.QUADRATIC.
      // We need to trim out the enum value itself when present, but for now we can skip.
      if (classAlias.indexOf(".") === -1) {
        addNamedImportToFile(moduleDeclaration, targetFiles, false);
      }
      typeText = typeText.replace(match[0], classAlias);
      match = typeText.match(pattern);
    }
  }

  return typeText;
}

const addProject = (packageName: string, sourceFiles: SourceFile[]): void => {
  const project = new Project({});
  project.addExistingSourceFiles(path.join(__dirname, '/../node_modules', packageName, '/**/*.d.ts'))
  project.getSourceFiles().forEach((sourceFile: SourceFile) => {
    const classes = sourceFile.getClasses(); 
    classes.forEach((classDeclaration: ClassDeclaration) => {
      const className = classDeclaration.getName()
      if (className !== undefined && classesOfInterest.has(className)) {
        const moduleDeclaration = getModuleDeclarationFromClassDeclaration(classDeclaration);
        addNamedImportToFile(moduleDeclaration, sourceFiles, true);
        classesOfInterest.set(className, {
          classDeclaration,
          moduleDeclaration
        });
      }
    });

    sourceFile.getNamespaces().forEach((ns: NamespaceDeclaration) => {
      ns.getInterfaces().forEach((interfaceDeclaration: InterfaceDeclaration) => {
        if (interfaceDeclaration.getName() === 'Scene' && interfaceDeclaration.getProperties().find(prop => prop.getName() === 'onBeforePhysicsObservable')) {
          // adding Scene monkey patch only for now (babylonjs/core/Physics/physicsEngineComponent), but could find way to do all.
          monkeyPatchInterfaces.set(interfaceDeclaration.getName(), [interfaceDeclaration])
        }
      })
    });

    const fullyQualifiedPattern: RegExp = /\"([^\"]+)\"\.([^<>,;\|) ]+)/;
    sourceFile.getEnums().forEach((enumDeclaration: EnumDeclaration) => {
      if (!enumDeclaration || enumDeclaration.getType().getSymbol() === undefined) {
        console.log('UNDEF enumdeclaration?')
      } else {
        const fqn: string = enumDeclaration.getType().getSymbol()!.getFullyQualifiedName();
        const translatedType = createTypeFromText(fqn, sourceFiles, fullyQualifiedPattern);
        enumMap.set(enumDeclaration.getName(), translatedType)
      }
    });
  })
}

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

const createMeshClasses = (generatedCodeSourceFile: SourceFile, generatedPropsSourceFile: SourceFile) => {

  let meshBuilderTuple: ClassNameSpaceTuple = classesOfInterest.get("MeshBuilder")!;
  let meshTuple: ClassNameSpaceTuple = classesOfInterest.get("Mesh")!;

  let factoryMethods: MethodDeclaration[] = meshBuilderTuple.classDeclaration.getStaticMethods();

  console.log(`Creating ${factoryMethods.length} Mesh objects:`)

  factoryMethods.forEach((method: MethodDeclaration) => {
    const methodName: string = method.getName();
    
    if (methodName && methodName.startsWith('Create') || methodName.startsWith('Extrude')) {
      const factoryType : string = methodName.startsWith('Create')
        ? methodName.substr('Create'.length)
        : methodName; // ie: ExtrudePolygon, ExtrudeShape & ExtrudeShapeCustom


      addHostElement(factoryType, meshTuple.classDeclaration);

      console.log(` > ${factoryType}`)
      let newClassDeclaration: ClassDeclaration = addClassDeclarationFromFactoryMethod(generatedCodeSourceFile, factoryType, classesOfInterest.get("Mesh")!.classDeclaration, method);
      addCreateInfoFromFactoryMethod(method,  camelCase(meshBuilderTuple.classDeclaration.getName()!), methodName, newClassDeclaration, "@babylonjs/core", generatedCodeSourceFile, generatedPropsSourceFile)
      addMetadata(newClassDeclaration, undefined /* no original class */, {
        acceptsMaterials: true,
        isMesh: true
      })
    }
  });
}

const addClassDeclarationFromFactoryMethod = (generatedCodeSourceFile: SourceFile, className: string, classDeclaration: ClassDeclaration, factoryMethod: MethodDeclaration, extra?: (cd: ClassDeclaration) => void) => {
  
  const newClassDeclaration = generatedCodeSourceFile.addClass({
    name: `${ClassNamesPrefix}${className}`,
    isExported: true
  });

  const newClassModuleDeclaration = getModuleDeclarationFromClassDeclaration(classDeclaration);

  if (extra !== undefined) {
    extra(newClassDeclaration)
  }
  // We don't need to inherit anything, also collides with property declarations
  // cameraClassDeclaration.setExtends(`${ClassNamesPrefix}${baseClass!.getName()}`)

  let jsDocs: JSDoc[] = factoryMethod.getJsDocs();
  const generatedComment = 'This code has been generated'
  if (jsDocs.length > 0) {
    newClassDeclaration.addJsDoc(jsDocs[0].getComment() + '\n\n' + generatedComment)
  } else {
    newClassDeclaration.addJsDoc(generatedComment)
  }

  const propsHandlersPropertyName = 'propsHandlers';

  const propsHandlerBaseName = classDeclaration.getName()

  newClassDeclaration.addProperty({
    name: propsHandlersPropertyName,
    type: `PropsHandler<${newClassModuleDeclaration.importAlias}, ${ClassNamesPrefix}${propsHandlerBaseName}Props>[]`, // xxx
    scope: Scope.Private
  })

  newClassDeclaration.addImplements(`HasPropsHandlers<${newClassModuleDeclaration.importAlias}, ${ClassNamesPrefix}${propsHandlerBaseName}Props>`)

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
    returnType: `PropsHandler<${newClassModuleDeclaration.importAlias}, ${ClassNamesPrefix}${propsHandlerBaseName}Props>[]`
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
    type: `PropsHandler<${newClassModuleDeclaration.importAlias}, ${ClassNamesPrefix}${propsHandlerBaseName}Props>`
  })

  addPropertyHandlerMethod.setBodyText(writer => {
    writer.writeLine("this.propsHandlers.push(propHandler);")
  })

  return newClassDeclaration;
}

const includeAsConstructorParameter = (parameterType: string): boolean => {
  return parameterType !== 'BabylonjsCoreScene' /* provided by reconciler */
}

const addCreateInfoFromFactoryMethod = (method: MethodDeclaration, factoryClass: string, factoryMethod : string, targetClass: ClassDeclaration, namespace: string, generatedCodeSourceFile: SourceFile, generatedPropsSourceFile: SourceFile) : void => {
  let methodParameters : GeneratedParameter[] = []
  const typeProperties: OptionalKind<PropertySignatureStructure>[] = []

  method.getParameters().forEach((createMethodParameter: ParameterDeclaration) => {
    const parameterName: string | undefined = createMethodParameter.getName()

    if (parameterName === undefined) {
      return;
    }

    const parameterType: string = createTypeFromText(createMethodParameter.getType().getText(), [generatedCodeSourceFile, generatedPropsSourceFile]);
    const optional : boolean = createMethodParameter.isOptional();

    let generatedParameter : GeneratedParameter = {
      name: parameterName,
      type: parameterType,
      optional
    }

    if (parameterType.startsWith('BabylonjsCore') === false && createMethodParameter.getType().getSymbol() && createMethodParameter.getType().getSymbol()!.getMembers()) {
        let specialProperties : GeneratedParameter[] = []
        generatedParameter.type = specialProperties;

        // getSymbol()!.getMembers() === getProperties()
        createMethodParameter.getType().getSymbol()!.getMembers().forEach(member => {
          let propertyName = member.getName();
          let internalType = member.getTypeAtLocation(member.getValueDeclaration()!);

          let propertyType = createTypeFromText(internalType.getText(), [generatedCodeSourceFile, generatedPropsSourceFile]);

          // let questionToken2 = (member.getValueDeclaration()!.compilerNode as any).questionToken;
          let questionToken = (member.compilerSymbol.valueDeclaration as any).questionToken;
          
          let generatedSubParameter : GeneratedParameter = {
            name: propertyName,
            type: propertyType,
            optional: questionToken !== undefined
          }

          typeProperties.push({
            name: propertyName,
            type: propertyType,
            hasQuestionToken: true // 'options' are always optional from constructor point of view (enforced in IntrinsicType, 'CreateInfo' only generates warnings)
          })

          // conditional breakpoint for inspecting in IDE: factoryMethod === 'CreateSphere'
          specialProperties.push(generatedSubParameter)
        })            
      } else if (includeAsConstructorParameter(parameterType)) {
        typeProperties.push({
          name: parameterName,
          type: parameterType,
          hasQuestionToken: optional
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

  writeTypeAlias(generatedPropsSourceFile, `${targetClass.getName()}PropsCtor`, typeProperties);
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

/**
 * Returns null for methods we should be ignoring (no parameters or getters)
 * @param methodDeclaration
 * @param targetFiles 
 */
const getMethodType = (methodDeclaration: MethodDeclaration | MethodSignature, targetFiles: SourceFile[]): string | null => {
  const methodName = methodDeclaration.getName()
  if (methodName.startsWith('get')) {
    return null;
  }
  
  const params: ParameterDeclaration[] = methodDeclaration.getParameters();
  if (params.length === 0) {
    return null;
  }

  let paramTypes: string[] = []
  params.forEach(param => {
    let type: string = createTypeFromText(param.getType().getText(), targetFiles);

    if (enumMap.has(type)) {
      type = enumMap.get(type)!;
    }
    const questionToken = param.hasQuestionToken ? '?' : ''
    const paramName: string | undefined = param.getName();
    paramTypes.push(`${paramName}${questionToken}: ${type}`)
  })
  
  const returnType = methodDeclaration.getReturnType().getText() === 'void'
    ? 'void'
    : createTypeFromText(methodDeclaration.getReturnType().getText(), targetFiles);
    
  return `(${paramTypes.join(', ')}) => ${returnType}`;
}

const writeMethodAsUpdateFunction = (propsProperties: OptionalKind<PropertySignatureStructure>[], writer: CodeBlockWriter, method: MethodDeclaration, addedMethods: Set<String>, classNameBabylon: string, targetFiles: SourceFile[]) : void => {
  const type = getMethodType(method, targetFiles);
  
  if (type === null) {
    return; // skip
  }
  const methodName = method.getName()
  // tempting to put the method signature here instead of 'any', but we need to be able to call it like:
    // <camera setTarget={} /> and TODO: figure out how with ie: ((target?: BabylonjsCoreVector3) => void;!!)
  propsProperties.push({
    name: methodName,
    type: 'any',
    hasQuestionToken: true
  })

  writer.writeLine(`// ${classNameBabylon}.${methodName} of type '${type}':`)
    writer.write(`if (oldProps.${methodName} !== newProps.${methodName})`).block(() => {
      writer.writeLine(`updates.push({\npropertyName: '${methodName}',\nvalue: newProps.${methodName},\ntype: '${type}'\n});`);
    });
}

const writePropertyAsUpdateFunction = (propsProperties: OptionalKind<PropertySignatureStructure>[], writer: CodeBlockWriter, property: PropertyDeclaration, addedProperties: Set<String>, classNameBabylon: string, targetFiles: SourceFile[]) => {
  const type =  createTypeFromText(property.getType().getText(), targetFiles);
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

  propsProperties.push({
    name: propertyName,
    type: type,
    hasQuestionToken: true
  })

  if (propertyName.startsWith('on')) {
    writer.writeLine(`// ${'xxx-ns-xxx'}.${classNameBabylon}.${propertyName} of type '${type}/fn':`)
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
      writer.writeLine(`// ${classNameBabylon}.${propertyName} (${type}):`)
      writer.write(`if (oldProps.${propertyName} !== newProps.${propertyName})`).block(() => {
        writer.writeLine(`updates.push({\npropertyName: '${propertyName}',\nvalue: newProps.${propertyName},\ntype: '${type}'\n});`);
      });
      break;
    case `BabylonjsCoreVector3`:
    case `BabylonjsCoreColor3`:
      writer.writeLine(`// ${classNameBabylon}.${propertyName} (${type} uses object equals to find diffs):`)
      writer.write(`if (newProps.${propertyName} && (!oldProps.${propertyName} || !oldProps.${propertyName}.equals(newProps.${propertyName})))`).block(() => {
        writer.writeLine(`updates.push({\npropertyName: '${propertyName}',\nvalue: newProps.${propertyName},\ntype: '${type}'\n});`);
      });
      break;
    case `BabylonjsCoreColor4`: // Color4.equals() not added until PR #5517
      writer.writeLine(`// ${classNameBabylon}.${propertyName} of ${type}.  Color4.equals() not available in BabylonJS < 4:`)
      writer.write(`if (newProps.${propertyName} && (!oldProps.${propertyName} || oldProps.${propertyName}.r !== newProps.${propertyName}.r || oldProps.${propertyName}.g !== newProps.${propertyName}.g || oldProps.${propertyName}.b !== newProps.${propertyName}.b || oldProps.${propertyName}.a !== newProps.${propertyName}.a))`).block(() => {
        writer.writeLine(`updates.push({\npropertyName: '${propertyName}',\nvalue: newProps.${propertyName},\ntype: '${type}'\n});`);
      });
      break;
    case "BabylonjsGuiControl":
      writer.writeLine(`// ${classNameBabylon}.${propertyName} (${type}) sets once:`)
      writer.write(`if (newProps.${propertyName} && (!oldProps.${propertyName}))`).block(() => {
        writer.writeLine(`updates.push({\npropertyName: '${propertyName}',\nvalue: newProps.${propertyName},\ntype: '${type}'\n});`);
      });
      break;
    default:
      writer.writeLine(`// TODO: type: '${type}' property (not coded) ${classNameBabylon}.${propertyName}.`);
      break;
  }
}

/**
 * 
 * @param classDeclaration 
 * @param rootBaseClass Base class (or same class if there is no base class).  For factory methods is the class being created.
 * @param moduleDeclaration 
 * @param generatedCodeSourceFile 
 * @param generatedPropsSourceFile 
 * @param extra 
 */
const createClassDeclaration = (classDeclaration: ClassDeclaration, rootBaseClass: ClassDeclaration, generatedCodeSourceFile: SourceFile, generatedPropsSourceFile: SourceFile, extra?: (newClassDeclaration: ClassDeclaration, originalClassDeclaration: ClassDeclaration) => void) : ClassDeclaration =>  {
  const baseClass: ClassDeclaration | undefined = classDeclaration.getBaseClass(); // no mix-ins in BabylonJS AFAIK, but would otherwise use baseTypes()
  const className: string = classDeclaration.getName()!;
  
  const importedClassDeclaration = getModuleDeclarationFromClassDeclaration(classDeclaration);
  addNamedImportToFile(importedClassDeclaration, [generatedCodeSourceFile, generatedPropsSourceFile], true);

  addPropsAndHandlerClasses(generatedCodeSourceFile, generatedPropsSourceFile, className, importedClassDeclaration, getInstanceProperties(classDeclaration), getInstanceSetMethods(classDeclaration), baseClass);

  const newClassDeclaration = generatedCodeSourceFile.addClass({
    name: `${ClassNamesPrefix}${className}`,
    isExported: true
  });
  
  if (extra !== undefined) {
    extra(newClassDeclaration, classDeclaration)
  }

  // We don't need to inherit anything, also collides with property declarations
  // newClassDeclaration.setExtends(`${ClassNamesPrefix}${baseClass!.getName()}`)

  let jsDocs: JSDoc[] = classDeclaration.getJsDocs();
  const generatedComment = 'This code has been generated'
  if (jsDocs.length > 0) {
    newClassDeclaration.addJsDoc(jsDocs[0].getComment() + '\n\n' + generatedComment)
  } else {
    newClassDeclaration.addJsDoc(generatedComment)
  }

  const propsHandlersPropertyName = 'propsHandlers';

  const rootBaseModuleDeclaration = getModuleDeclarationFromClassDeclaration(rootBaseClass);

  const rootBaseClassName = rootBaseClass.getName();
  // NOTE: AdvancedDynamicTexture has a different namespace than it's root class.
  // const rootBaseClassNamespace = getNamespace(rootBaseClass)

  // TODO: ensure import to ${rootBaseClassNamespace}.${rootBaseClassName}
  newClassDeclaration.addProperty({
    name: propsHandlersPropertyName,
    type: `PropsHandler<${rootBaseModuleDeclaration.importAlias}, ${ClassNamesPrefix}${rootBaseClassName}Props>[]`,
    scope: Scope.Private
  })

  newClassDeclaration.addImplements(`HasPropsHandlers<${rootBaseModuleDeclaration.importAlias}, ${ClassNamesPrefix}${rootBaseClassName}Props>`)

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
    returnType: `PropsHandler<${rootBaseModuleDeclaration.importAlias}, ${ClassNamesPrefix}${rootBaseClassName}Props>[]`
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
    type: `PropsHandler<${rootBaseModuleDeclaration.importAlias}, ${ClassNamesPrefix}${rootBaseClassName}Props>`
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
 * The odd parameters here 'classNameToGenerate' and 'classNameBabylon' are because we are also inventing classes not based on real BabylonJS objects (ie: Box, Sphere are actually Mesh)
 * It probably looks like we should just pass along the ClassDeclaration... 
 */
const addPropsAndHandlerClasses = (generatedCodeSourceFile: SourceFile, generatedPropsSourceFile: SourceFile, classNameToGenerate: string, babylonClassDeclaration: ModuleDeclaration, propertiesToAdd: PropertyDeclaration[], setMethods: MethodDeclaration[], baseClass: ClassDeclaration | undefined ) => {
  // console.log('addpropshandlers1:', classNameToGenerate, babylonClassDeclaration.className, babylonClassDeclaration.importAlias);

  const typeProperties: OptionalKind<PropertySignatureStructure>[] = []

  const classDeclarationPropsHandler = generatedCodeSourceFile.addClass({
    name: `${ClassNamesPrefix}${classNameToGenerate}PropsHandler`,
    isExported: true
  });

  // TODO: ensure ${importedNamespace} has imported base class..
  classDeclarationPropsHandler.addImplements(`PropsHandler<${babylonClassDeclaration.importAlias}, ${ClassNamesPrefix}${classNameToGenerate}Props>`)

  let getPropertyUpdatesMethod = classDeclarationPropsHandler.addMethod({
    name: "getPropertyUpdates",
    returnType: `${PropertyUpdateInterface}[] | null`
  });
  getPropertyUpdatesMethod.addParameters([{
    name: "hostInstance",
    type: babylonClassDeclaration.importAlias
  }, {
    name: "oldProps",
    type: `${ClassNamesPrefix}${classNameToGenerate}Props`
  }, {
    name: "newProps",
    type: `${ClassNamesPrefix}${classNameToGenerate}Props`
  }, {
    name: "scene",
    type: `${'Babylonjs'}${'Core'}Scene`
  }])

  getPropertyUpdatesMethod.setBodyText((writer : CodeBlockWriter) => {
    writer.writeLine("// generated code")
    
    writer.writeLine(`let updates: ${PropertyUpdateInterface}[] = [];`)

    let addedMeshProperties = new Set<string>();
    propertiesToAdd.sort((a, b) => a.getName().localeCompare(b.getName())).forEach((property: PropertyDeclaration) => {
      writePropertyAsUpdateFunction(typeProperties, writer, property, addedMeshProperties, babylonClassDeclaration.importAlias, [generatedCodeSourceFile, generatedPropsSourceFile]);
    })

    let addedMeshMethods = new Set<string>();
    setMethods.sort((a,b) => a.getName().localeCompare(b.getName())).forEach((method: MethodDeclaration) => {
      writeMethodAsUpdateFunction(typeProperties, writer, method, addedMeshMethods, babylonClassDeclaration.importAlias, [generatedCodeSourceFile, generatedPropsSourceFile]);
    })
    return writer.writeLine("return updates.length === 0 ? null : updates;");;
  })

  if (monkeyPatchInterfaces.has(classNameToGenerate)) {
    console.log(` > patching ${classNameToGenerate} with interface:`)
    monkeyPatchInterfaces.get(classNameToGenerate)!.forEach((monkeyPatchInterface: InterfaceDeclaration) => {
        monkeyPatchInterface.getProperties().filter(property => !property.getName().startsWith("_")).forEach(property => {
          const type =  createTypeFromText(property.getType().getText(), [generatedCodeSourceFile, generatedPropsSourceFile]);
          const propertyName: string = property.getName();
          typeProperties.push({
            name: propertyName,
            type: type,
            hasQuestionToken: true
          })
        })
        monkeyPatchInterface.getMethods().forEach(method => {
          const type = getMethodType(method, [generatedCodeSourceFile, generatedPropsSourceFile]);
  
          if (type === null) {
            return; // skip
          }
          const methodName = method.getName()
          typeProperties.push({
            name: methodName,
            type,
            hasQuestionToken: true
          })
        })
    })
  }

  const intersectsWith = baseClass === undefined ? undefined: baseClass.getName();
  const propsClassName = `${ClassNamesPrefix}${classNameToGenerate}Props`;
  PROPS_EXPORTS.push(propsClassName);
  writeTypeAlias(generatedPropsSourceFile, propsClassName, typeProperties.sort((a, b) => a.name.localeCompare(b.name)), intersectsWith);
}

const writeTypeAlias = (file: SourceFile, name: string, typeProperties: OptionalKind<PropertySignatureStructure>[], intersectsWith?: string): void => {
  const { intersectionType, objectType } = Writers;
  const propertiesObject = objectType({properties: typeProperties})
  const aliasType: WriterFunction = (intersectsWith !== undefined)
    ? intersectionType(propertiesObject, `${ClassNamesPrefix}${intersectsWith}Props`)
    :  propertiesObject

  file.addTypeAlias({
    name,
    isExported: true,
    type: aliasType
  })
}

const addCreateInfoFromConstructor = (sourceClass: ClassDeclaration, targetClass: ClassDeclaration, moduleDeclaration: ModuleDeclaration, generatedCodeSourceFile: SourceFile, generatedPropsSourceFile: SourceFile) : void => {
    // this will allow us to do reflection to create the BabylonJS object from application props.
    const ctorArgsProperty = targetClass.addProperty({
      name: 'CreateInfo',
      scope: Scope.Public,
      isStatic: true,
      isReadonly : true
    })

    const typeProperties: OptionalKind<PropertySignatureStructure>[] = []

    const constructorDeclarations : ConstructorDeclaration[] = sourceClass.getConstructors();
  
    let constructorArguments: GeneratedParameter[] = [];
    if (constructorDeclarations.length > 1) {
      console.error('found multiple constructors (using first):', sourceClass.getName());
    }

    if (constructorDeclarations.length > 0) {
      constructorDeclarations[0].getParameters().forEach(parameterDeclaration => {

        const type: string = createTypeFromText(parameterDeclaration.getType().getText(), [generatedCodeSourceFile, generatedPropsSourceFile]);
        constructorArguments.push({
          name: parameterDeclaration.getName()!,
          type,
          optional: parameterDeclaration.isOptional()
        })

        // TODO: need to remap some properties.  ie: (target: Mesh) to (lockedTargetMeshName: string)
        if (includeAsConstructorParameter(type)) {
          typeProperties.push({
            name: parameterDeclaration.getName()!,
            type,
            hasQuestionToken: parameterDeclaration.isOptional()
          });
        }
      })
    }

    // this is all kind of garbage now... we cannot dynamically generate like we did before :(
    let value : CreateInfo = {
      creationType: CreationType.Constructor,
      libraryLocation: sourceClass.getName()!,
      namespace: moduleDeclaration.moduleSpecifier,
      parameters: constructorArguments
    }

    ctorArgsProperty.setInitializer(JSON.stringify(value, null, 2))

    writeTypeAlias(generatedPropsSourceFile, `${ClassNamesPrefix}${sourceClass.getName()}PropsCtor`, typeProperties);
}

const createClassesDerivedFrom = (generatedCodeSourceFile: SourceFile, generatedPropsSourceFile: SourceFile, classNamespaceTuple: ClassNameSpaceTuple, metadata?: InstanceMetadataParameter, extra?: (newClassDeclaration: ClassDeclaration, originalClassDeclaration: ClassDeclaration) => void, extraMetadata? : (newClassDeclaration: ClassDeclaration, metadata: CreatedInstanceMetadata, originalClassDeclaration?: ClassDeclaration) => void) : void => { 
  let classDeclaration : ClassDeclaration | undefined = classNamespaceTuple.classDeclaration;

  const classesToCreate: ClassDeclaration[] = [];

  while(classDeclaration !== undefined) {
    classesToCreate.push(classDeclaration);
    classDeclaration = classDeclaration.getBaseClass()
  }

  classesToCreate.reverse()

  // console.log(`Building ${classesToCreate.length} classes derived from '${className}':`, classesToCreate.map(c => c.getName()))

  for(let i = 0; i < classesToCreate.length; i++) {
    const classDeclaration = classesToCreate[i]

    const moduleDeclaration = getModuleDeclarationFromClassDeclaration(classDeclaration);
    addNamedImportToFile(moduleDeclaration, [generatedCodeSourceFile, generatedPropsSourceFile], false);

    const baseClassDeclaration : ClassDeclaration | undefined = i > 0 ? classesToCreate[i - 1] : undefined;
    const className = classDeclaration.getName()!;
    addHostElement(className, classDeclaration);

    console.warn('creating', className, " base -> ", baseClassDeclaration === undefined ? '<undefined>' : baseClassDeclaration.getName());

    let baseClassDeclarationForCreate = baseClassDeclaration === undefined ? classDeclaration : baseClassDeclaration

    const newClassDeclaration = createClassDeclaration(classDeclaration, baseClassDeclarationForCreate, generatedCodeSourceFile, generatedPropsSourceFile, extra);
    addCreateInfoFromConstructor(classDeclaration, newClassDeclaration, classNamespaceTuple.moduleDeclaration, generatedCodeSourceFile, generatedPropsSourceFile);

    addMetadata(newClassDeclaration, classDeclaration, metadata, extraMetadata);
    console.log(` > ${className}`)
  }
}

/**
 * TODO: We should not be generating abstract classes.
 */
const createClassesInheritedFrom = (generatedCodeSourceFile: SourceFile, generatedPropsSourceFile: SourceFile, classNamespaceTuple: ClassNameSpaceTuple, metadata?: InstanceMetadataParameter, extra?: (newClassDeclaration: ClassDeclaration, originalClassDeclaration: ClassDeclaration) => void, extraMetadata? : (newClassDeclaration: ClassDeclaration, metadata: CreatedInstanceMetadata, originalClassDeclaration?: ClassDeclaration) => void) : void => {
  const orderedListCreator = new OrderedListCreator();
  
  const baseClassDeclaration = classNamespaceTuple.classDeclaration;

  const baseClassName: string = baseClassDeclaration.getName()!;
  addHostElement(baseClassName, baseClassDeclaration);

  const derivedClassesOrdered : Map<string, ClassDeclaration> = new Map<string, ClassDeclaration>();

  orderedListCreator.addDescendantsOrdered([baseClassDeclaration], derivedClassesOrdered)

  console.log(`Building ${derivedClassesOrdered.size} ${baseClassName}s: `)

  derivedClassesOrdered.forEach((derivedClassDeclaration: ClassDeclaration) => {    
    addHostElement(derivedClassDeclaration.getName()!, derivedClassDeclaration);

    const newClassDeclaration = createClassDeclaration(derivedClassDeclaration, baseClassDeclaration, generatedCodeSourceFile, generatedPropsSourceFile, extra);
    addCreateInfoFromConstructor(derivedClassDeclaration, newClassDeclaration, classNamespaceTuple.moduleDeclaration, generatedCodeSourceFile, generatedPropsSourceFile);

    addMetadata(newClassDeclaration, derivedClassDeclaration, metadata, extraMetadata);
    console.log(` > ${derivedClassDeclaration.getName()}`)
  });
}

const addReactExports = (generatedCodeSourceFile: SourceFile) => {
  let tags: string[] = Array.from(REACT_EXPORTS.keys());
  tags.sort( /* use default ASCII sorter */);
  // These are the string imports needed by react-reconciler
  
  // generatedCodeSourceFile.addStatements('// tslint:disable-next-line: one-variable-per-declaration')
  // use a writer in order to easily add the correct newline based on the manipulation settings
  // generatedCodeSourceFile.insertText(writer =>
  //   writer.writeLine('// tslint:disable-next-line: one-variable-per-declaration')
  // );
  const exportVars: VariableStatement = generatedCodeSourceFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    isExported: true,
    declarations: tags.map(tag => {
      // const properTag = tag.charAt(0).toLowerCase() + tag.substr(1);
      return {
        name: tag,
        type: "string",
        initializer: `'${tag}'`
      }
    }),
  });

}

const createSingleClass = (classOfInterest: string, generatedCodeSourceFile: SourceFile, generatedPropsSourceFile: SourceFile, baseClass?: ClassDeclaration, metadata?: InstanceMetadataParameter, extra?: () => void) : void => {
  const classToGenerate = classesOfInterest.get(classOfInterest)

  if (classToGenerate === undefined) {
    return; // skipping
  }

  if (baseClass === undefined) {
    baseClass = classToGenerate.classDeclaration
  }

  addHostElement(classToGenerate.classDeclaration.getName()!, classToGenerate.classDeclaration);

  const newClassDeclaration = createClassDeclaration(classToGenerate.classDeclaration, baseClass, generatedCodeSourceFile, generatedPropsSourceFile, extra);
  addCreateInfoFromConstructor(classToGenerate.classDeclaration, newClassDeclaration, classToGenerate.moduleDeclaration, generatedCodeSourceFile, generatedPropsSourceFile);

  addMetadata(newClassDeclaration, classToGenerate.classDeclaration, metadata);
  console.log('Single class added')
  console.log(` > ${classToGenerate.classDeclaration.getName()}`)
}

const generateCode = async () => {
  const exportsProject = new Project()
  const generatedCodeSourceFile: SourceFile = exportsProject.createSourceFile(
    `${__dirname}/../src/generatedCode.ts`,
    "",
    { overwrite: true }
  );

  const generatedPropsSourceFile: SourceFile = exportsProject.createSourceFile(
    `${__dirname}/../src/generatedProps.ts`,
    "",
    { overwrite: true }
  );

  const imports: string[] = ["@babylonjs/core", "@babylonjs/gui"];
  imports.forEach(l => {
    addProject(l, [generatedCodeSourceFile, generatedPropsSourceFile]);
  });

  // These imports need to be totally REDONE and dynamically generated from ES6 locations (probably using a dictionary for uniqueness)
  generatedCodeSourceFile.addImportDeclaration({
    moduleSpecifier: "./PropsHandler",
    namedImports: ["PropsHandler", PropertyUpdateInterface, "HasPropsHandlers"]
  })

  generatedCodeSourceFile.addImportDeclaration({
    moduleSpecifier: "./CreatedInstance",
    namedImports: [ReactReconcilerCreatedInstanceMetadata]
  })
  
  const reactImport = generatedPropsSourceFile.addImportDeclaration({
    moduleSpecifier: "react",
    namedImports: ["Key", "ReactNode", "Ref"]
  })

  const addMeshMetadata = (newClassDeclaration: ClassDeclaration, metadata: CreatedInstanceMetadata, originalClassDeclaration?: ClassDeclaration) => {
    metadata.isMesh = (originalClassDeclaration !== undefined && originalClassDeclaration.getName() === "Mesh")
  }
  // ref?: React.Ref<React.ReactNode>
  const mainTypeAlias = generatedPropsSourceFile.addTypeAlias({
    name: 'BabylonNode',
    type: Writers.objectType({properties: [{
      name: 'children',
      type: 'ReactNode', // JSX or string
      hasQuestionToken: true
    }, {
      name: 'key',
      type: 'Key',
      hasQuestionToken: true
    }, {
      name: 'onCreated',
      type: '(instance: T, scene: BabylonjsCoreScene) => void',
      hasQuestionToken: true,
    }, {
      name: 'ref',
      type: 'Ref<ReactNode>',
      hasQuestionToken: true
    }]}),
    isExported: true
  })
  mainTypeAlias.addTypeParameter({
    name: "T"
  })

  const globalNamespace = generatedPropsSourceFile.addNamespace({
    name: "global",
    declarationKind: NamespaceDeclarationKind.Global,
    hasDeclareKeyword: true,
  })

  const jsxNamespace = globalNamespace.addNamespace({
    name: 'JSX',
  })

  INTRINSIC_ELEMENTS = jsxNamespace.addInterface({
    name: "IntrinsicElements",

  })
  // This includes Node, which is base class for ie: Camera, Mesh, etc.
  createClassesDerivedFrom(generatedCodeSourceFile, generatedPropsSourceFile, classesOfInterest.get("Mesh")!, {}, undefined, addMeshMetadata)

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
    createClassesInheritedFrom(generatedCodeSourceFile, generatedPropsSourceFile, classesOfInterest.get("Camera")!, { isCamera: true }, extra);
  }

  if (classesOfInterest.get("MeshBuilder") !== undefined) {
    createMeshClasses(generatedCodeSourceFile, generatedPropsSourceFile);
  }

  if (classesOfInterest.get("Material")) {
    createClassesInheritedFrom(generatedCodeSourceFile, generatedPropsSourceFile, classesOfInterest.get("Material")!, { isMaterial: true });
  }

  if (classesOfInterest.get("Light")) {
    createClassesInheritedFrom(generatedCodeSourceFile, generatedPropsSourceFile, classesOfInterest.get("Light")!, undefined, undefined, (classDeclaration: ClassDeclaration, metadata: CreatedInstanceMetadata, originalClassDeclaration?: ClassDeclaration) => {
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
    createClassesInheritedFrom(generatedCodeSourceFile, generatedPropsSourceFile, classesOfInterest.get("Control")!, { isGUI2DControl: true});
  }

  if (classesOfInterest.get("Control3D")) {
    createClassesInheritedFrom(generatedCodeSourceFile, generatedPropsSourceFile, classesOfInterest.get("Control3D")!, { isGUI3DControl: true});
  }

  if (classesOfInterest.get("BaseTexture")) {
    createClassesInheritedFrom(generatedCodeSourceFile, generatedPropsSourceFile, classesOfInterest.get("BaseTexture")!, {isTexture: true});
    createSingleClass("AdvancedDynamicTexture", generatedCodeSourceFile, generatedPropsSourceFile, classesOfInterest.get("BaseTexture")!.classDeclaration, { isGUI2DControl: true}, () => {return;})
  }
  
  createSingleClass("GUI3DManager", generatedCodeSourceFile, generatedPropsSourceFile, undefined, { isGUI3DControl: true }, () => {return;})
  createSingleClass("ShadowGenerator", generatedCodeSourceFile, generatedPropsSourceFile, undefined, { delayCreation: true }, () => {return;})
  createSingleClass("EnvironmentHelper", generatedCodeSourceFile, generatedPropsSourceFile, undefined, { isEnvironment: true })
  createSingleClass("VRExperienceHelper", generatedCodeSourceFile, generatedPropsSourceFile)
  
  if (classesOfInterest.get("Scene")) {
    // Scene we only want to generate the handlers. Constructor is very simple - just an Engine
    const sceneTuple: ClassNameSpaceTuple = classesOfInterest.get("Scene")!
    const className: string = sceneTuple.classDeclaration.getName()!

    const sceneClassDeclaration = getModuleDeclarationFromClassDeclaration(sceneTuple.classDeclaration);

    addPropsAndHandlerClasses(generatedCodeSourceFile, generatedPropsSourceFile, className, sceneClassDeclaration, getInstanceProperties(sceneTuple.classDeclaration), getInstanceSetMethods(sceneTuple.classDeclaration), undefined);
  }
  addReactExports(generatedCodeSourceFile);

  generatedCodeSourceFile.addImportDeclaration({
    moduleSpecifier: "./generatedProps",
    namedImports: PROPS_EXPORTS
  })

  // Need a set, since 'hostComponent' is set in both files.
  const factoryClasses: Map<string, string> = new Map<string, string>();

  Array.from(importDeclarationMap.values()).forEach(file => {
    Array.from(file.values()).forEach((fileModuleDeclarations: FileModuleDeclaration[]) => {
      const sourceFile: SourceFile = fileModuleDeclarations[0].sourceFile;
      const importDeclaration: ImportDeclaration = sourceFile.addImportDeclaration({
        moduleSpecifier: fileModuleDeclarations[0].moduleDeclaration.moduleSpecifier
      } as ImportDeclarationStructure)

      fileModuleDeclarations.forEach((fileModuleDeclaration: FileModuleDeclaration) => {
        importDeclaration.addNamedImport({
          name: fileModuleDeclaration.moduleDeclaration.className,
          alias: fileModuleDeclaration.moduleDeclaration.importAlias
        })

        if (fileModuleDeclaration.hostComponent && !factoryClasses.has(fileModuleDeclaration.moduleDeclaration.importAlias)) {
          factoryClasses.set(fileModuleDeclaration.moduleDeclaration.importAlias, fileModuleDeclaration.moduleDeclaration.className);
        }
      })
    })
  })

  // we can do this as long as there are no classes with the same name across imports
  // otherwise we can just use a Set<string> with importalias, but need to generate more metadata.
  // ie: classseMap = { BabylonjsCoreBox, BabylonjsCoreSphere, ... };
  generatedCodeSourceFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    isExported: false,
    declarations: [{
      name: 'classesMap',
      type: "object",
      initializer: `{${Array.from(factoryClasses.entries()).map(([alias, className]) => `${camelCase(className)}: ${alias}`).join(',')}}`
    }]
  });

  const functionDeclaration:FunctionDeclaration = generatedCodeSourceFile.addFunction({
    isExported: true,
    name: 'babylonClassFactory',
    returnType: 'any',
    parameters: [{
      name: 'importAlias',
      type: 'string'
    }]
  })

  functionDeclaration.setBodyText(writer =>
    writer.writeLine("return (classesMap as any)[importAlias];")
  );

  // TODO: we need to export a factory function like this
  // export default function babylonClassFactory (importAlias) {
  //   return classesMap[importAlias];
  // }

  console.log('saving created content...')

  generatedCodeSourceFile.formatText();
  await generatedCodeSourceFile.save();

  generatedPropsSourceFile.formatText();
  await generatedPropsSourceFile.save();
}

const result = generateCode();

result.then(() => {
  console.log('completed without errors');
}).catch(reason => {
  console.error('failed:', reason);
})