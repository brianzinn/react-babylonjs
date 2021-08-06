import { exit } from 'process';
/**
 * To debug code generation use the launch config in VS Code - "Generate Code (debug)"
 */
import {
  Project,
  ts,
  VariableDeclarationKind,
  ClassDeclaration,
  PropertyDeclaration,
  CodeBlockWriter,
  SourceFile,
  JSDoc,
  ConstructorDeclaration,
  Scope,
  MethodDeclaration,
  ParameterDeclaration,
  WriterFunction,
  OptionalKind,
  PropertySignature,
  PropertySignatureStructure,
  Writers,
  ImportDeclarationStructure,
  ImportDeclaration,
  FunctionDeclaration,
  VariableStatement,
  InterfaceDeclaration,
  MethodSignature,
  EnumDeclaration,
  
  SetAccessorDeclaration,
  Type,
  Node,
  SyntaxKind,
  FormatCodeSettings,
  GetAccessorDeclaration,
  ModuleDeclaration,
  ModuleDeclarationKind,
} from 'ts-morph'

import { GeneratedParameter, CreateInfo, CreationType } from "../src/codeGenerationDescriptors";
import { InstanceMetadataParameter } from "../src/CreatedInstance"
const path = require("path");
import camelCase from "lodash.camelcase"

const REACT_RECONCILER_CREATED_INSTANCE_METADATA = "CreatedInstanceMetadata";
const PROPERTY_UPDATE_INTERFACE = "PropertyUpdate";
const CLASS_NAME_PREFIX = 'Fiber';

type ClassNameSpaceTuple = {
  classDeclaration: ClassDeclaration,
  moduleDeclaration: GeneratedModuleDeclaration
}

const addedClassDeclarationsMap = new Map<string, ClassDeclaration>();

// to set onXXX properties.  via onXXX.add(() => void).  TODO: use TypeGuards.isTypeReferenceNode(...) and check type
const OBSERVABLE_PATTERN: RegExp = /^BabylonjsCoreObservable<.*>$/;

const GENERATE_KEBAB_ACCESSORS = true; // test for Vector3 only currently

/**
 * These are required parameters that we defer to after instantion (JSX.IntrinsicElements marked as optional)
 * LifecycleHandler and delay creation will handle these not being set (ie: look at PhysicsImposter constructor!)
 */
const LATE_BOUND_CONSTRUCTOR_PARAMETERS: Map<string, string[]> = new Map<string, string[]>([
  ['PhysicsImpostor', ['object']],
  ['ShadowGenerator', ['light']],
  ['CascadedShadowGenerator', ['light']]
]);

console.log('ver:', ts.version);

const CONFLICT_INTRINSIC_ELEMENTS = ['Button', 'Ellipse', 'Image', 'Line', 'Polygon'];

const ALL_CUSTOM_PROPS = ['AbstractMeshCustomProps', 'ADTCustomProps', 'Control3DCustomProps', 'CustomProps', 'GlowLayerCustomProps', 'MaterialCustomProps', 'ShadowGeneratorCustomProps', 'VirtualKeyboardCustomProps', 'VRExperienceHelperCustomProps'];

// would be good to check JSX.IntrinsicElements with 'keyof', but it's erased at runtime (doesn't work on dynamic strings)
// fixes TS warning: Property 'polygon' must be of type SVGProps<SVGPolygonElement>, but here has type..., so we are skipping to generate polygon for now.
// TypeScript has some issues being worked on to address local instead of `global`
const classToIntrinsic = (className: string): string => {
  return CONFLICT_INTRINSIC_ELEMENTS.indexOf(className) >= 0
    ? `'babylon-${camelCase(className)}'`
    : camelCase(className);
}

// NOTE: 'strings' are what are available for NPM import for 'Component', while JSX.IntrinsicElements are global (for now).
// Both are created the same way as host components by react-reconciler
const REACT_EXPORTS: Set<string> = new Set<string>();
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

    const moduleDeclaration = getModuleDeclarationFromClassDeclaration(babylonjsClassDeclaration);

    let classPropIntersection = intersectionType(
      intersectionType(`${CLASS_NAME_PREFIX}${babylonjsClassDeclaration.getName()}Props`, `${CLASS_NAME_PREFIX}${className}PropsCtor`),
      `BabylonNode<${moduleDeclaration.importAlias}>`
    );

    // adding props that are not original babylonjs
    if (additionalCustomProps[`${CLASS_NAME_PREFIX}${className}`]) {
      classPropIntersection = intersectionType(classPropIntersection, additionalCustomProps[`${CLASS_NAME_PREFIX}${className}`]);
    }

    INTRINSIC_ELEMENTS.addProperty({
      name: classToIntrinsic(className),
      type:  classPropIntersection
    });
  }
}

// const addCustomHostElement = (className: string, type: string): void => {
//   if (REACT_EXPORTS.has(className)) {
//     console.error('Found existing export:', className); // would happen in BabylonJS added class with same name
//     return;
//   }

//   REACT_EXPORTS.add(className);
//   INTRINSIC_ELEMENTS.addProperty({
//     name: classToIntrinsic(className),
//     type
//   } as OptionalKind<PropertySignatureStructure>)
// }

const monkeyPatchInterfaces: Map<string, InterfaceDeclaration[]> = new Map<string, InterfaceDeclaration[]>();
const enumMap: Map<string, string> = new Map<string, string>();
let ENUMS_LIST: string[] = [];
const PROPS_EXPORTS: string[] = []; // used to put all props in single import.

/**
 * CustomProps not from @babylonjs/* modules, but custom for this project (used when not applied to entire inheritance chain).
 */
const additionalCustomProps: Record<string, string> = {
  [`${CLASS_NAME_PREFIX}AbstractMesh`]: 'AbstractMeshCustomProps', // not including dervived.
  [`${CLASS_NAME_PREFIX}AdvancedDynamicTexture`]: 'ADTCustomProps',
  [`${CLASS_NAME_PREFIX}GlowLayer`]: 'GlowLayerCustomProps',
  [`${CLASS_NAME_PREFIX}VirtualKeyboard`]: 'VirtualKeyboardCustomProps',
};

// These are the base/factory classes we used to generate everything.
let classesOfInterest: Map<String, ClassNameSpaceTuple | undefined> = new Map<String, ClassNameSpaceTuple | undefined>();

const classesToGenerate: String[] = [
  // always needed
  "TransformNode",
  "AbstractMesh",
  "Mesh",
  "AbstractScene",
  "Scene",

  // decides what is generated (useful to remove some to speed up debugging)
  "Camera",
  "MeshBuilder",
  "Material",
  "Light",
  "Control",
  "Control3D",
  "GUI3DManager",
  "ThinTexture",
  "AdvancedDynamicTexture",
  "ShadowGenerator",
  "CascadedShadowGenerator",
  "EnvironmentHelper",
  "PhysicsImpostor",
  "VRExperienceHelper",
  "DynamicTerrain",
  "EffectLayer",
  "Behavior", // TODO: remove this and use interface
  "PointsCloudSystem",
  "PostProcessRenderPipeline",
  "PostProcess",

  "EngineView",
  "Viewport",
]

classesToGenerate.forEach(className => classesOfInterest.set(className, undefined));

const readonlyPropertiesToGenerate: Map<string, ClassNameSpaceTuple> = new Map<string, ClassNameSpaceTuple>();

/**
 * In babylon.js, Behavior is a interface, not a class.
 * Each specific behavior is a separated class.
 * Add it to classesOfInterest if className includes keyword.
 */
const classesOfKeywordInterest = ['Behavior'];

type GeneratedModuleDeclaration = {
  moduleSpecifier: string,
  className: string,
  importAlias: string
};

type FileModuleDeclaration = {
  hostComponent: boolean, // used to generate factory
  sourceFile: SourceFile, // needed since we use filePath as key for top-level dictionary
  moduleDeclaration: GeneratedModuleDeclaration
}

const importDeclarationMap: Map<string, Map<string, FileModuleDeclaration[]>> = new Map<string, Map<string, FileModuleDeclaration[]>>();

const capitalize = (value: string) => {
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

const getModuleDeclarationFromClassDeclaration = (classDeclaration: ClassDeclaration): GeneratedModuleDeclaration => {
  const sourceFile = classDeclaration.getSourceFile();

  const match = sourceFile.getFilePath().match(`node_modules/(.*)${sourceFile.getExtension()}`);

  const className = classDeclaration.getName()!;
  let moduleSpecifier: string;
  let classAlias: string;

  if (match === null || match.length < 2) {
    if (className !== 'DynamicTerrain') {
      throw new Error('Unknown (not from @babylonjs) class being generated:' + className);
    }
    // '../src/extensions/DynamicTerrain.ts' == sourceFile.getFilePath();
    classAlias = 'ExtensionsDynamicTerrain';
    moduleSpecifier = './extensions/DynamicTerrain';
  } else {
    moduleSpecifier = match[1]!;
    const packageName = moduleSpecifier.substr(0, moduleSpecifier.indexOf('/', '@babylonjs/'.length))
    // ie: '@babylonjs/core' -> BabylonjsCore
    const aliasPrefix = packageName.substr(1).split('/').map(x => capitalize(x)).join('');
    classAlias = `${aliasPrefix}${className}`
  }

  return {
    moduleSpecifier,
    className,
    importAlias: classAlias
  };
}

const addNamedImportToFile = (moduleDeclaration: GeneratedModuleDeclaration, targets: SourceFile[], isHostComponent: boolean): void => {
  targets.forEach(file => {
    const fileKey = file.getFilePath();
    if (!importDeclarationMap.has(fileKey)) {
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
  while (result.endsWith('[]')) {
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

      const moduleDeclaration: GeneratedModuleDeclaration = {
        moduleSpecifier,
        className,
        importAlias: importAlias
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

  // enumerations are missing imports.  getText() just uses TypeChecker#typeToString
  // this converts ie: 'boolean | Space' to 'boolean | BabylonjsCoreSpace', which matches imports
  typeText.split('|').map(t => t.trim()).forEach(value => {
    const enumIndex = ENUMS_LIST.indexOf(value);
    if (enumIndex >= 0) {
      const regex: RegExp = new RegExp(`(^${value}|${value}$)`, 'gi');
      typeText = typeText.replace(regex, enumMap.get(value)!);
    }
  })

  return typeText;
}

/**
 * If has interest file, add it's class info to classesOfInterest.
 * @param classDeclaration
 * @param sourceFiles
 */
const addSourceClass = (classDeclaration: ClassDeclaration, sourceFiles: SourceFile[]) => {
  const className = classDeclaration.getName()

  if (className === undefined) {
    return;
  }

  const findByKeyword = classesOfKeywordInterest.some(keyword => className.includes(keyword));

  if (classesOfInterest.has(className) || findByKeyword) {
    const moduleDeclaration = getModuleDeclarationFromClassDeclaration(classDeclaration);

    addNamedImportToFile(moduleDeclaration, sourceFiles, true);
    classesOfInterest.set(className, {
      classDeclaration,
      moduleDeclaration
    });
  }
}

const addProject = (packageNames: string[], files: string[], sourceFiles: SourceFile[]): void => {
  const project = new Project({});

  packageNames.forEach(packageName => {
    project.addSourceFilesAtPaths(path.join(__dirname, '/../node_modules', packageName, '/**/*.d.ts'))
  })

  files.forEach(file => {
    project.addSourceFilesAtPaths(path.join(__dirname, file));
  })

  project.getSourceFiles().forEach((sourceFile: SourceFile) => {
    sourceFile.getClasses().forEach((classDeclaration: ClassDeclaration) => {
      addSourceClass(classDeclaration, sourceFiles);
    });

    sourceFile.getModules().forEach((ns: ModuleDeclaration) => {
      ns.getInterfaces().forEach((interfaceDeclaration: InterfaceDeclaration) => {
        if (interfaceDeclaration.getName() === 'Scene' && interfaceDeclaration.getProperties().find(prop => prop.getName() === 'onBeforePhysicsObservable')) {
          // adding Scene monkey patch only for now (babylonjs/core/Physics/physicsEngineComponent), but could find way to do all.
          monkeyPatchInterfaces.set(interfaceDeclaration.getName(), [interfaceDeclaration])
        }
        if (interfaceDeclaration.getName() === 'AbstractMesh' && interfaceDeclaration.getProperties().find(prop => prop.getName() === 'instancedBuffers')) {
          monkeyPatchInterfaces.set(interfaceDeclaration.getName(), [interfaceDeclaration])
        }
      })
      ns.getClasses().forEach((classDeclaration: ClassDeclaration) => {
        addSourceClass(classDeclaration, sourceFiles);
      });
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

const addMetadata = (classDeclaration: ClassDeclaration, originalClassDeclaration?: ClassDeclaration, metadata?: InstanceMetadataParameter) => {
  const createInfoProperty = classDeclaration.addProperty({
    name: 'Metadata',
    type: REACT_RECONCILER_CREATED_INSTANCE_METADATA,
    scope: Scope.Public,
    isStatic: true,
    isReadonly: true
  })

  let metadataClone = metadata === undefined ? {} : { ...metadata };

  let propertyInit = {
    ...metadataClone,
    className: classDeclaration.getName()!
  }

  createInfoProperty.setInitializer(JSON.stringify(propertyInit, null, 2))
}

const createdFactoryClasses: string[] = [];

/**
 * Create host element from class declaration static (creation) methods
 */
const createFactoryClass = (factoryClassName: string, prefix: string, metadata: InstanceMetadataParameter, generatedCodeSourceFile: SourceFile, generatedPropsSourceFile: SourceFile) => {
  let factoryBuilderTuple: ClassNameSpaceTuple = classesOfInterest.get(factoryClassName)!;

  let factoryMethods: MethodDeclaration[] = factoryBuilderTuple.classDeclaration.getStaticMethods();

  for (const method of factoryMethods) {
    const methodName: string = method.getName();
    if (methodName && methodName.startsWith('Create') || methodName.startsWith('Extrude')) {
      let factoryType: string = methodName.startsWith('Create')
        ? methodName.substr('Create'.length)
        : methodName; // ie: ExtrudePolygon, ExtrudeShape & ExtrudeShapeCustom
      factoryType = prefix + factoryType;
      createdFactoryClasses.push(factoryType);

      // [0] is always the ClassDeclaration (at least for MeshBuilder and AdvancedDynamicTexture factory methods)
      const hostClassName = (method.getReturnType().getSymbol()!.getDeclarations()[0] as ClassDeclaration).getName()!;
      const classDeclarationType = addedClassDeclarationsMap.get(hostClassName) ?? classesOfInterest.get(hostClassName)!.classDeclaration!;

      addHostElement(factoryType, classDeclarationType);
      let newClassDeclaration: ClassDeclaration = addClassDeclarationFromFactoryMethod(generatedCodeSourceFile, factoryType, classDeclarationType, method);

      addCreateInfoFromFactoryMethod(method, camelCase(factoryBuilderTuple.classDeclaration.getName()!), methodName, newClassDeclaration, "@babylonjs/core", generatedCodeSourceFile, generatedPropsSourceFile)
      addMetadata(newClassDeclaration, undefined /* no original class */, metadata)
    }
  };
  console.log(`${factoryClassName} Factory - ${createdFactoryClasses.sort((a, b) => a.localeCompare(b)).map(c => classToIntrinsic(c).replace(/['\u2019]/g, '')).join(', ')}`);
};

const addClassDeclarationFromFactoryMethod = (generatedCodeSourceFile: SourceFile, className: string, classDeclaration: ClassDeclaration, factoryMethod: MethodDeclaration, extra?: (cd: ClassDeclaration) => void) => {

  const newClassDeclaration = generatedCodeSourceFile.addClass({
    name: `${CLASS_NAME_PREFIX}${className}`,
    isExported: true
  });

  // const newClassModuleDeclaration = getModuleDeclarationFromClassDeclaration(classDeclaration);

  if (extra !== undefined) {
    extra(newClassDeclaration)
  }
  // We don't need to inherit anything, also collides with property declarations
  // cameraClassDeclaration.setExtends(`${ClassNamesPrefix}${baseClass!.getName()}`)

  let jsDocs: JSDoc[] = factoryMethod.getJsDocs();
  const generatedComment = 'This code has been generated'
  if (jsDocs.length > 0) {
    // .compilerNode.comment was getComment() - seems broken
    newClassDeclaration.addJsDoc(jsDocs[0].compilerNode.comment + '\n\n' + generatedComment)
  } else {
    newClassDeclaration.addJsDoc(generatedComment)
  }

  const propsHandlersPropertyName = 'propsHandlers';

  const propsHandlerBaseName = classDeclaration.getName()

  newClassDeclaration.addProperty({
    name: propsHandlersPropertyName,
    type: `PropsHandler<${CLASS_NAME_PREFIX}${propsHandlerBaseName}Props>[]`, // xxx
    scope: Scope.Private
  })

  // NOTE: remove <T, U> of ${newClassModuleDeclaration.importAlias}
  newClassDeclaration.addImplements(`HasPropsHandlers<${CLASS_NAME_PREFIX}${propsHandlerBaseName}Props>`)

  const newConstructor: ConstructorDeclaration = newClassDeclaration.addConstructor();
  newConstructor.setBodyText((writer: CodeBlockWriter) => {
    writer.writeLine(`this.${propsHandlersPropertyName} = [`)

    const propsHandlers: string[] = [];
    let handlerClassDeclaration: ClassDeclaration | undefined = classDeclaration;
    while (handlerClassDeclaration) {
      propsHandlers.push(`new ${CLASS_NAME_PREFIX}${handlerClassDeclaration.getName()}PropsHandler()`)
      handlerClassDeclaration = handlerClassDeclaration.getBaseClass()
    }
    writer.writeLine(propsHandlers.join('\n,'));
    writer.writeLine("];")
  })

  let getPropsHandlersMethod = newClassDeclaration.addMethod({
    name: "getPropsHandlers",
    returnType: `PropsHandler<${CLASS_NAME_PREFIX}${propsHandlerBaseName}Props>[]`
  });

  getPropsHandlersMethod.setBodyText(writer => {
    writer.writeLine("return this.propsHandlers;")
  })

  let addPropertyHandlerMethod = newClassDeclaration.addMethod({
    name: "addPropsHandler",
    returnType: "void"
  });
  addPropertyHandlerMethod.addParameter({
    name: 'propHandler',
    type: `PropsHandler<${CLASS_NAME_PREFIX}${propsHandlerBaseName}Props>`
  })

  addPropertyHandlerMethod.setBodyText(writer => {
    writer.writeLine("this.propsHandlers.push(propHandler);")
  })

  return newClassDeclaration;
}

const includeAsConstructorParameter = (parameterType: string): boolean => {
  // there is two cases: scene:Scene, sceneOrEngine: Scene|Engine
  return !parameterType.includes('BabylonjsCoreScene') /* provided by reconciler */
}

const getExpandedPropsFromParameter = (parameter: ParameterDeclaration, targetFiles: SourceFile[]): GeneratedParameter[] => {
  const props: GeneratedParameter[] = [];

  parameter.getType().getSymbol()!.getMembers().forEach(member => {
    let propertyName = member.getName();
    let internalType = member.getTypeAtLocation(member.getValueDeclaration()!);

    let propertyType = createTypeFromText(internalType.getText(), targetFiles);

    // let questionToken2 = (member.getValueDeclaration()!.compilerNode as any).questionToken;
    let questionToken = (member.compilerSymbol.valueDeclaration as any).questionToken;

    props.push({
      name: propertyName,
      type: propertyType,
      optional: questionToken !== undefined
    })
  })

  return props;
}

const parameterShouldBeExpanded = (parameter: ParameterDeclaration): boolean => {
  const name = parameter.getName()!;
  const parameterType: string = createTypeFromText(parameter.getType().getText(), []);
  return name === 'options' &&
    !parameterType.startsWith('Babylonjs') &&
    parameter.getType().getSymbol() !== undefined &&
    parameter.getType().getSymbol()!.getMembers().length > 0;
}

const addCreateInfoFromFactoryMethod = (method: MethodDeclaration, factoryClass: string, factoryMethod: string, targetClass: ClassDeclaration, namespace: string, generatedCodeSourceFile: SourceFile, generatedPropsSourceFile: SourceFile): void => {
  let methodParameters: GeneratedParameter[] = []
  const typeProperties: OptionalKind<PropertySignatureStructure>[] = []

  method.getParameters().forEach((createMethodParameter: ParameterDeclaration) => {
    const parameterName: string | undefined = createMethodParameter.getName()

    if (parameterName === undefined) {
      return;
    }

    const parameterType: string = createTypeFromText(createMethodParameter.getType().getText(), [generatedCodeSourceFile, generatedPropsSourceFile]);
    const optional: boolean = createMethodParameter.isOptional();

    let generatedParameter: GeneratedParameter = {
      name: parameterName,
      type: parameterType,
      optional
    }

    if (parameterShouldBeExpanded(createMethodParameter)) {
      let specialProperties: GeneratedParameter[] = getExpandedPropsFromParameter(createMethodParameter, [generatedCodeSourceFile, generatedPropsSourceFile])
      generatedParameter.type = specialProperties;

      specialProperties.forEach(prop => {
        typeProperties.push({
          type: prop.type as string,
          name: prop.name,
          hasQuestionToken: true // 'options' are always optional from constructor point of view (enforced in IntrinsicType, 'CreateInfo' only generates warnings)
        })
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
    isReadonly: true
  })

  let value: CreateInfo = {
    creationType: CreationType.FactoryMethod,
    libraryLocation: factoryClass,
    namespace,
    factoryMethod: factoryMethod,
    parameters: methodParameters
  }

  createInfoProperty.setInitializer(JSON.stringify(value, null, 2))

  writeTypeAlias(generatedPropsSourceFile, `${targetClass.getName()}PropsCtor`, typeProperties);
}

/**
 * get some methods from babylonjs class
 * @param classDeclaration
 */
const getInstanceSetMethods = (classDeclaration: ClassDeclaration): MethodDeclaration[] => {
  let instanceSetMethods: MethodDeclaration[] = []
  classDeclaration.getInstanceMethods().forEach((methodDeclaration: MethodDeclaration) => {
    const methodName = methodDeclaration.getName();
    // TODO: add ?
    if (methodName.startsWith('set') || methodName.startsWith('add') || methodName.startsWith('enable') || methodName === 'translate') {
      instanceSetMethods.push(methodDeclaration)
    }
  })

  return instanceSetMethods;
}

function addReadonlyClasses(classDeclaration: ClassDeclaration, property: PropertyDeclaration | GetAccessorDeclaration): void {
  if (property.getType().isClass() === true) {
    const typeClassDeclarations: ClassDeclaration[] | undefined = property.getType()?.getSymbol()?.getDeclarations() as ClassDeclaration[];
    const className = typeClassDeclarations !== undefined && typeClassDeclarations.length === 1
      ? typeClassDeclarations[0].getName()
      : undefined;
    if (className !== undefined && className.endsWith('Configuration')) {
      const classNamespaceTuple: ClassNameSpaceTuple = {
        classDeclaration: typeClassDeclarations[0],
        moduleDeclaration: getModuleDeclarationFromClassDeclaration(typeClassDeclarations[0])
      };
      console.log(` >> adding ${classDeclaration.getName()!}.${property.getName()} (read-only) property type '${typeClassDeclarations[0].getName()}'`);
      readonlyPropertiesToGenerate.set(typeClassDeclarations[0].getName()!, classNamespaceTuple);
    }
  }
}

/**
 * get props from babylonjs class
 * @param classDeclaration
 */
const getInstanceProperties = (classDeclaration: ClassDeclaration): (PropertyDeclaration | SetAccessorDeclaration)[] => {
  let result: (PropertyDeclaration | SetAccessorDeclaration)[] = [];

  classDeclaration.getSetAccessors().forEach(acc => result.push(acc));

  classDeclaration.getGetAccessors().forEach(acc => {
    // This is how we add ImageProcessingConfiguration.
    addReadonlyClasses(classDeclaration, acc);
  });

  // for conditional breakpoints on class: classDeclaration.getName() === "Control";
  classDeclaration.getProperties().forEach(property => {
    let propertyName = property.getName();
    if (propertyName[0] === '_') {
      // console.log(` > skipping ${className}.${propertyName} (private/hidden)`)
      return;
    }

    if (property.isStatic()) {
      // console.log(` > skipping ${className}.${propertyName} (static)`)
      return;
    }

    if (property.isReadonly()) {
      // This is how we add class configurations like PBRClearCoatConfiguration
      // console.log(` > skipping ${classDeclaration.getName()}.${propertyName} (read-only)`)
      addReadonlyClasses(classDeclaration, property);
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

    const questionToken = param.hasQuestionToken() ? '?' : ''
    const paramName: string | undefined = param.getName();
    paramTypes.push(`${paramName}${questionToken}: ${type}`)
  })

  const returnType = methodDeclaration.getReturnType().getText() === 'void'
    ? 'void'
    : createTypeFromText(methodDeclaration.getReturnType().getText(), targetFiles);

  return `(${paramTypes.join(', ')}) => ${returnType}`;
}

const writeMethodAsUpdateFunction = (propsProperties: OptionalKind<PropertySignatureStructure>[], method: MethodDeclaration | MethodSignature, type: string): void => {
  const methodName = method.getName()
  // tempting to put the method signature here instead of 'any', but we need to be able to call it like:
  // <camera setTarget={} /> and TODO: figure out how with ie: ((target?: BabylonjsCoreVector3) => void;!!)
  propsProperties.push({
    name: methodName,
    type: 'any',
    hasQuestionToken: true
  })
}

/**
 * Returns false when a property has already been declared (ie: a subclass will override a method and create duplicates).
 * side-effect is to update the propsProperties list.
 */
const writePropertyAsUpdateFunction = (propsProperties: OptionalKind<PropertySignatureStructure>[], type: string, propertyName: string, addedProperties: Set<String>): boolean => {
  // doesn't really matter if it's 'optional', as nothing is forcing JavaScript users to follow your conventions.
  // const isOptional = property.getQuestionTokenNode();

  // TODO: We need to ensure this is for entire hierarchy. ie: 'name' will be saved multiple times on object creation
  if (addedProperties.has(propertyName)) {
    console.log(' >> skipping already existing property (ie: was overridden like Mesh.scaling): ', propertyName);
    return false;
  }
  addedProperties.add(propertyName);
  // console.log(` >> including Mesh.${propertyName} (${type}))`)

  // /^BabylonjsCoreObservable<.*>$/.test(type)
  // cannot set observable types from React.  TODO: track and remove added observables on unmount.
  const propsType = OBSERVABLE_PATTERN.test(type) ? 'any' : type;

  propsProperties.push({
    name: propertyName,
    type: propsType,
    hasQuestionToken: true
  })

  if (GENERATE_KEBAB_ACCESSORS && propsType === 'BabylonjsCoreVector3') {
    ['x','y','z'].forEach(prop => {
      propsProperties.push({
        name: `'${propertyName}-${prop}'`,
        type: 'number',
        hasQuestionToken: true
      })
    })
  }

  return true;
}

/**
 * create Fiber***hPropsHandler class
 * @param classDeclaration
 * @param rootBaseClass Base class (or same class if there is no base class).  For factory methods is the class being created.
 * @param moduleDeclaration
 * @param generatedCodeSourceFile
 * @param generatedPropsSourceFile
 * @param extra
 */
const createClassDeclaration = (classDeclaration: ClassDeclaration, rootBaseClass: ClassDeclaration, generatedCodeSourceFile: SourceFile, generatedPropsSourceFile: SourceFile, extra?: (newClassDeclaration: ClassDeclaration, originalClassDeclaration: ClassDeclaration) => void, customProps: string = 'CustomProps'): ClassDeclaration => {
  const baseClass: ClassDeclaration | undefined = classDeclaration.getBaseClass(); // no mix-ins in BabylonJS AFAIK, but would otherwise use baseTypes()
  const className: string = classDeclaration.getName()!;

  const importedClassDeclaration = getModuleDeclarationFromClassDeclaration(classDeclaration);
  addNamedImportToFile(importedClassDeclaration, [generatedCodeSourceFile, generatedPropsSourceFile], true);

  addPropsAndHandlerClasses(generatedCodeSourceFile, generatedPropsSourceFile, className, importedClassDeclaration, getInstanceProperties(classDeclaration), getInstanceSetMethods(classDeclaration), baseClass, customProps);

  const newClassDeclaration = generatedCodeSourceFile.addClass({
    name: `${CLASS_NAME_PREFIX}${className}`,
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
    // .compilerNode.comment was getComment() - seems broken
    newClassDeclaration.addJsDoc(jsDocs[0].compilerNode.comment + '\n\n' + generatedComment)
  } else {
    newClassDeclaration.addJsDoc(generatedComment)
  }

  const propsHandlersPropertyName = 'propsHandlers';
  // const rootBaseModuleDeclaration = getModuleDeclarationFromClassDeclaration(rootBaseClass);
  const rootBaseClassName = rootBaseClass.getName();

  newClassDeclaration.addProperty({
    name: propsHandlersPropertyName,
    type: `PropsHandler<${CLASS_NAME_PREFIX}${rootBaseClassName}Props>[]`,
    scope: Scope.Private
  })

  newClassDeclaration.addImplements(`HasPropsHandlers<${CLASS_NAME_PREFIX}${rootBaseClassName}Props>`)

  const newConstructor: ConstructorDeclaration = newClassDeclaration.addConstructor();
  newConstructor.setBodyText((writer: CodeBlockWriter) => {
    writer.writeLine(`this.${propsHandlersPropertyName} = [`)
    let propsHandlers: string[] = [];

    let baseDeclaration: ClassDeclaration | undefined = classDeclaration
    while (baseDeclaration !== undefined) {
      propsHandlers.push(`new ${CLASS_NAME_PREFIX}${baseDeclaration.getName()}PropsHandler()`)

      baseDeclaration = baseDeclaration.getBaseClass()
    }

    writer.writeLine(propsHandlers.join(',\n'))
    writer.writeLine("];")
  })

  let getPropsHandlersMethod = newClassDeclaration.addMethod({
    name: "getPropsHandlers",
    returnType: `PropsHandler<${CLASS_NAME_PREFIX}${rootBaseClassName}Props>[]`
  });

  getPropsHandlersMethod.setBodyText(writer => {
    writer.writeLine("return this.propsHandlers;")
  })

  let addPropertyHandlerMethod = newClassDeclaration.addMethod({
    name: "addPropsHandler",
    returnType: "void"
  });
  addPropertyHandlerMethod.addParameter({
    name: 'propHandler',
    type: `PropsHandler<${CLASS_NAME_PREFIX}${rootBaseClassName}Props>`
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

function isPrimitiveType(node: Node<ts.Node>): boolean {

  // getting some weird nodes on especially boolean | import(".../@babylonjs/gui/2D/controls/textBlock").TextWrapping
  if (typeof node.getKind !== 'function') {
    return false;
  }

  const isTypeRef = Node.isTypeReferenceNode(node);
  if (isTypeRef && node.getText().startsWith("Null")) {
    const firstNode: Node<ts.Node> | undefined = node.forEachDescendantAsArray().find(desc => !Node.isIdentifier(desc));
    if (firstNode === undefined) {
      return false;
    }
    node = firstNode;
  }

  const type: Type = node.getType();

  return (
    type.isNumber() ||
    type.isNumberLiteral() ||
    type.isString() ||
    type.isStringLiteral() ||
    type.isBoolean() ||
    type.isBooleanLiteral() ||
    type.isEnum() || // enums --> string | number
    type.isEnumLiteral() ||
    type.isUndefined() // ie: string | undefined
  );
}

const isQuestionToken = (node: Node<ts.Node>): boolean => {
  return typeof node.getKind !== 'function' || (node.compilerNode && node.getKind() === SyntaxKind.QuestionToken);
}

/**
 * The odd parameters here 'classNameToGenerate' and 'classNameBabylon' are because we are also inventing classes not based on real BabylonJS objects (ie: Box, Sphere are actually Mesh)
 * It probably looks like we should just pass along the ClassDeclaration...
 */
const addPropsAndHandlerClasses = (generatedCodeSourceFile: SourceFile, generatedPropsSourceFile: SourceFile, classNameToGenerate: string, babylonClassDeclaration: GeneratedModuleDeclaration, propertiesToAdd: (PropertyDeclaration | PropertySignature | SetAccessorDeclaration)[], setMethods: (MethodDeclaration | MethodSignature)[], baseClass: ClassDeclaration | undefined, customProps: string = 'CustomProps'): void => {
  // console.log('addpropshandlers1:', classNameToGenerate, babylonClassDeclaration.className, babylonClassDeclaration.importAlias);

  const typeProperties: OptionalKind<PropertySignatureStructure>[] = []

  const classDeclarationPropsHandler = generatedCodeSourceFile.addClass({
    name: `${CLASS_NAME_PREFIX}${classNameToGenerate}PropsHandler`,
    isExported: true
  });

  // NOTE: removed ${${babylonClassDeclaration.importAlias}} from PropsHandler<T, U>.
  classDeclarationPropsHandler.addImplements(`PropsHandler<${CLASS_NAME_PREFIX}${classNameToGenerate}Props>`)

  let getPropertyUpdatesMethod = classDeclarationPropsHandler.addMethod({
    name: "getPropertyUpdates",
    returnType: `${PROPERTY_UPDATE_INTERFACE}[] | null`
  });
  getPropertyUpdatesMethod.addParameters([{
    name: "oldProps",
    type: `${CLASS_NAME_PREFIX}${classNameToGenerate}Props`
  }, {
    name: "newProps",
    type: `${CLASS_NAME_PREFIX}${classNameToGenerate}Props`
  }])

  getPropertyUpdatesMethod.setBodyText((writer: CodeBlockWriter) => {
    let addedProperties = new Set<string>();

    // These properties break out to specific method handlers
    type PropertyKind = 'BabylonjsCoreBaseTexture' | 'BabylonjsCoreColor3' | 'BabylonjsCoreColor4' | 'BabylonjsCoreVector3' | 'BabylonjsCoreFresnelParameters' | 'BabylonjsCoreQuaternion' |
      'BabylonjsGuiControl' | 'number[]' | 'lambda' | 'observable' | 'method' | 'primitive' | 'object';
    type NameAndType = {
      name: string
      type: string,
      propertyKind: PropertyKind | undefined
    };
    const propsToCheck: NameAndType[] = [];

    if (monkeyPatchInterfaces.has(classNameToGenerate)) {
      console.log(` > patching ${classNameToGenerate} with interface:`)
      monkeyPatchInterfaces.get(classNameToGenerate)!.forEach((monkeyPatchInterface: InterfaceDeclaration) => {
        monkeyPatchInterface.getProperties().filter(property => !property.getName().startsWith("_")).forEach(property => {
          const type = createTypeFromText(property.getType().getText(), [generatedCodeSourceFile, generatedPropsSourceFile]);
          const propertyName: string = property.getName();
          console.log(` >> adding property '${propertyName}' -> ${type}`)
          propertiesToAdd.push(property);
        })
        monkeyPatchInterface.getMethods().forEach(method => {
          const type = getMethodType(method, [generatedCodeSourceFile, generatedPropsSourceFile]);
  
          if (type === null) {
            return; // skip
          }
          // const methodName = method.getName()
          setMethods.push(method);
        })
      })
    }

    propertiesToAdd.sort((a, b) => a.getName().localeCompare(b.getName())).forEach((property: (PropertyDeclaration | PropertySignature | SetAccessorDeclaration)) => {
      const type = createTypeFromText(property.getType().getText(), [generatedCodeSourceFile, generatedPropsSourceFile]);
      const propertyName: string = property.getName();

      const added = writePropertyAsUpdateFunction(typeProperties, type, propertyName, addedProperties);

      let allPrimitives: boolean = false;

      const propertyDescendantsParametersAndExpressions = property.forEachDescendantAsArray().filter(desc =>
        !Node.isIdentifier(desc) &&
        !Node.isUnionTypeNode(desc) &&
        !Node.isIntersectionTypeNode(desc) &&
        !isQuestionToken(desc) &&
        desc.getKind() !== SyntaxKind.PublicKeyword &&
        desc.getKind() !== SyntaxKind.StaticKeyword // allow static setters (ie: AmbientTextureEnabled)
      );
      const paramDeclaration: ParameterDeclaration | undefined = Node.isParameterDeclaration(propertyDescendantsParametersAndExpressions[0])
        ? propertyDescendantsParametersAndExpressions[0] as ParameterDeclaration
        : undefined;

      if (paramDeclaration !== undefined) {
        const paramDescendants = paramDeclaration.forEachDescendantAsArray();
        const expressions: Node<ts.Node>[] = paramDescendants.filter(desc => !Node.isIdentifier(desc) && !Node.isUnionTypeNode(desc));
        allPrimitives = expressions.reduce<boolean>((result, expression) => result && isPrimitiveType(expression), true);
      } else {
        if (propertyDescendantsParametersAndExpressions.every(desc => Node.isExpression(desc) || Node.isTypeReferenceNode(desc) /* ie: Nullable<> */)) {
          allPrimitives = propertyDescendantsParametersAndExpressions.reduce<boolean>((result, expression) => result && isPrimitiveType(expression), true);
        }
      }

      if (added === true) {
        if (allPrimitives) {
          propsToCheck.push({
            name: propertyName,
            type,
            propertyKind: 'primitive'
          })
        } else {
          switch (type) {
            case 'BabylonjsCoreBaseTexture':
            case 'BabylonjsCoreColor3':
            case 'BabylonjsCoreColor4': // Color4.equals() not added until PR #5517
            case 'BabylonjsCoreVector3':
            case 'BabylonjsCoreFresnelParameters':
            case 'BabylonjsCoreQuaternion':
            case 'BabylonjsGuiControl':
            case 'number[]':
              propsToCheck.push({
                name: propertyName,
                type,
                propertyKind: type
              });

              if (GENERATE_KEBAB_ACCESSORS && type === 'BabylonjsCoreVector3') {
                ['x','y','z'].forEach(prop => {
                  propsToCheck.push({
                    name: `${propertyName}-${prop}`,
                    type: 'number',
                    propertyKind: 'primitive'
                  });
                })
              }
              break;
            case '{ [key: string]: any; }':
              propsToCheck.push({
                name: propertyName,
                type,
                propertyKind: 'object'
              });
              break;
            default:
              if (OBSERVABLE_PATTERN.test(type)) {
                propsToCheck.push({
                  name: propertyName,
                  type,
                  propertyKind: 'observable'
                });
              } else if (type.startsWith("(")) { // TODO: check with TypeGuards.isFunctionExpression
                propsToCheck.push({
                  name: propertyName,
                  type,
                  propertyKind: 'lambda'
                });
              } else {
                propsToCheck.push({
                  name: propertyName,
                  type,
                  propertyKind: undefined
                })
              }
              break;
          }
        }
      }
    })

    setMethods.sort((a, b) => a.getName().localeCompare(b.getName())).forEach((method: MethodDeclaration | MethodSignature) => {
      const type = getMethodType(method, [generatedCodeSourceFile, generatedPropsSourceFile]);
      if (type !== null) {
        writeMethodAsUpdateFunction(typeProperties, method, type);

        propsToCheck.push({
          name: method.getName(),
          type,
          propertyKind: 'method'
        })
      }
    });

    if (propsToCheck.filter(p => p.propertyKind !== undefined).length === 0) {
      propsToCheck.forEach(propToCheck => {
        writer.writeLine(`// skipping type: '${propToCheck.type}' property (not coded) ${babylonClassDeclaration.importAlias}.${propToCheck.name}.`)
      })
      writer.write('return null; // no props to check')
    } else {
      writer.write('const changedProps: PropertyUpdate[] = []');
      propsToCheck.forEach(propToCheck => {
        if (propToCheck.propertyKind === undefined) {
          writer.writeLine(`// type: '${propToCheck.type}' property (not coded) ${babylonClassDeclaration.importAlias}.${propToCheck.name}.`)
        } else {
          // if (propToCheck.method === true) 
          switch (propToCheck.propertyKind) {
            case 'BabylonjsCoreVector3':
              writer.writeLine(`checkVector3Diff(oldProps.${propToCheck.name}, newProps.${propToCheck.name}, '${propToCheck.name}', changedProps)`);
              break;
            case 'BabylonjsCoreColor3':
              writer.writeLine(`checkColor3Diff(oldProps.${propToCheck.name}, newProps.${propToCheck.name}, '${propToCheck.name}', changedProps)`);
              break;
            case 'BabylonjsCoreColor4': // Color4.equals() not added until PR #5517
              writer.writeLine(`checkColor4Diff(oldProps.${propToCheck.name}, newProps.${propToCheck.name}, '${propToCheck.name}', changedProps)`);
              break;
            case 'BabylonjsCoreQuaternion':
              writer.writeLine(`checkQuaternionDiff(oldProps.${propToCheck.name}, newProps.${propToCheck.name}, '${propToCheck.name}', changedProps)`);
              break;
            case 'object':
              writer.writeLine(`checkObjectDiff(oldProps.${propToCheck.name}, newProps.${propToCheck.name}, '${propToCheck.name}', changedProps)`);
              break;
            case 'primitive':
              if (propToCheck.name.indexOf('-') !== -1) /* ie: 'rotation-x' */ {
                writer.writeLine(`checkPrimitiveDiff(oldProps['${propToCheck.name}'], newProps['${propToCheck.name}'], '${propToCheck.name.replace(/-/g, '.')}', changedProps)`);
              } else {
                writer.writeLine(`checkPrimitiveDiff(oldProps.${propToCheck.name}, newProps.${propToCheck.name}, '${propToCheck.name}', changedProps)`);
              }
              break;
            case 'BabylonjsGuiControl':
              writer.writeLine(`checkControlDiff(oldProps.${propToCheck.name}, newProps.${propToCheck.name}, '${propToCheck.name}', changedProps)`);
              break;
            case 'number[]':
              writer.writeLine(`checkNumericArrayDiff(oldProps.${propToCheck.name}, newProps.${propToCheck.name}, '${propToCheck.name}', changedProps)`);
              break;
            case 'BabylonjsCoreFresnelParameters':
              writer.writeLine(`checkFresnelParametersDiff(oldProps.${propToCheck.name}, newProps.${propToCheck.name}, '${propToCheck.name}', changedProps)`);
              break;
            case 'BabylonjsCoreBaseTexture':
              writer.writeLine(`checkTextureDiff(oldProps.${propToCheck.name}, newProps.${propToCheck.name}, '${propToCheck.name}', changedProps)`)
              break;
            case 'observable':
              writer.writeLine(`checkObservableDiff(oldProps.${propToCheck.name}, newProps.${propToCheck.name}, '${propToCheck.name}', changedProps)`);
              break;
            case 'lambda':
              writer.writeLine(`checkLambdaDiff(oldProps.${propToCheck.name}, newProps.${propToCheck.name}, '${propToCheck.name}', changedProps)`)
              break;
            case 'method':
              writer.writeLine(`checkMethodDiff(oldProps.${propToCheck.name}, newProps.${propToCheck.name}, '${propToCheck.name}', changedProps)`)
              break;
            default:
              writer.writeLine(`// not found (default): '${propToCheck.type}' property (not coded) ${babylonClassDeclaration.importAlias}.${propToCheck.name}.`)
              break;
          }
        }
      })

      return writer.writeLine("return changedProps.length === 0 ? null : changedProps;");
    }
  })

  // this is temporary, where we give ALL classes these CustomProps.  Will be addressed (ideally we leave intersectsWith here 'undefined' and add ONLY valid props)
  const intersectsWith = baseClass === undefined ? customProps : baseClass.getName();
  const propsClassName = `${CLASS_NAME_PREFIX}${classNameToGenerate}Props`;

  PROPS_EXPORTS.push(propsClassName);
  writeTypeAlias(generatedPropsSourceFile, propsClassName, typeProperties.sort((a, b) => 
    (a.name.startsWith('\'') ? a.name.substr(1) : a.name).localeCompare(b.name.startsWith('\'') ? b.name.substr(1) : b.name)
  ), intersectsWith);
}

const writeTypeAlias = (file: SourceFile, name: string, typeProperties: OptionalKind<PropertySignatureStructure>[], intersectsWith?: string): void => {
  const { intersectionType, objectType } = Writers;

  // bad hack to get custom props through.  will address soon...
  const intersectsWithType = (intersectsWith === undefined)
    ? undefined
    : ALL_CUSTOM_PROPS.indexOf(intersectsWith) !== -1 ? intersectsWith : `${CLASS_NAME_PREFIX}${intersectsWith}Props`;

  const propertiesObject = objectType({ properties: typeProperties })
  const aliasType: WriterFunction = (intersectsWithType !== undefined)
    ? intersectionType(propertiesObject, intersectsWithType)
    : propertiesObject

  file.addTypeAlias({
    name,
    isExported: true,
    type: aliasType
  })
}

/**
 * create Fiber***CtorProps interface from babylonjs class constructor's parameters
 * @param sourceClass
 * @param targetClass
 * @param moduleDeclaration
 * @param generatedCodeSourceFile
 * @param generatedPropsSourceFile
 */
const addCreateInfoFromConstructor = (sourceClass: ClassDeclaration, targetClass: ClassDeclaration, moduleDeclaration: GeneratedModuleDeclaration, generatedCodeSourceFile: SourceFile, generatedPropsSourceFile: SourceFile): void => {
  // this will allow us to do reflection to create the BabylonJS object from application props.
  const ctorArgsProperty = targetClass.addProperty({
    name: 'CreateInfo',
    scope: Scope.Public,
    isStatic: true,
    isReadonly: true
  })

  const forceOptionalParameters: string[] = LATE_BOUND_CONSTRUCTOR_PARAMETERS.has(sourceClass.getName()!)
    ? LATE_BOUND_CONSTRUCTOR_PARAMETERS.get(sourceClass.getName()!)!
    : [];

  const className = sourceClass.getName();
  const typeProperties: OptionalKind<PropertySignatureStructure>[] = []

  const constructorDeclarations: ConstructorDeclaration[] = sourceClass.getConstructors();

  let constructorArguments: GeneratedParameter[] = [];
  if (constructorDeclarations.length > 1) {
    console.error('found multiple constructors (using first):', sourceClass.getName());
  }

  if (constructorDeclarations.length > 0) {
    // parse class constructor arguments
    constructorDeclarations[0].getParameters().forEach(parameterDeclaration => {

      const type: string = createTypeFromText(parameterDeclaration.getType().getText(), [generatedCodeSourceFile, generatedPropsSourceFile]);
      const name = parameterDeclaration.getName()!
      const optional: boolean = parameterDeclaration.isOptional() || forceOptionalParameters.indexOf(name) >= 0

      let generatedParameter: GeneratedParameter = {
        name,
        type,
        optional
      }

      constructorArguments.push(generatedParameter)

      if (includeAsConstructorParameter(type)) {
        if (parameterShouldBeExpanded(parameterDeclaration)) {
          let specialProperties: GeneratedParameter[] = getExpandedPropsFromParameter(parameterDeclaration, [generatedCodeSourceFile, generatedPropsSourceFile])
          generatedParameter.type = specialProperties;

          specialProperties.forEach(prop => {
            typeProperties.push({
              type: prop.type as string,
              name: prop.name,
              hasQuestionToken: true // 'options' are always optional from constructor point of view (enforced in IntrinsicType, 'CreateInfo' only generates warnings)
            })
          })
        } else {
          typeProperties.push({
            name,
            type,
            hasQuestionToken: optional
          });
        }
      }
    })
  }

  // this is all kind of garbage now... we cannot dynamically generate like we did before :(
  const moduleSpecifier = moduleDeclaration.moduleSpecifier;
  const namespace = moduleSpecifier.startsWith('@babylonjs/')
    ? moduleSpecifier.substr(0, moduleSpecifier.indexOf('/', '@babylonjs/'.length))
    : moduleSpecifier;
  let value: CreateInfo = {
    creationType: CreationType.Constructor,
    libraryLocation: className!,
    namespace,
    parameters: constructorArguments
  }

  ctorArgsProperty.setInitializer(JSON.stringify(value, null, 2))

  writeTypeAlias(generatedPropsSourceFile, `${CLASS_NAME_PREFIX}${className}PropsCtor`, typeProperties);
}

/**
 * create Metadata|ReactHostElement|ConstructorProps from babylonjs class.
 * @param generatedCodeSourceFile
 * @param generatedPropsSourceFile
 * @param classNamespaceTuple
 * @param metadata
 * @param extra
 */
const createClassesDerivedFrom = (generatedCodeSourceFile: SourceFile, generatedPropsSourceFile: SourceFile, classNamespaceTuple: ClassNameSpaceTuple, metadata?: InstanceMetadataParameter, extra?: (newClassDeclaration: ClassDeclaration, originalClassDeclaration: ClassDeclaration) => void): void => {
  let classDeclaration: ClassDeclaration | undefined = classNamespaceTuple.classDeclaration;

  const classesToCreate: ClassDeclaration[] = [];
  let inheritsFromNode = false;

  while (classDeclaration !== undefined) {
    classesToCreate.push(classDeclaration);
    classDeclaration = classDeclaration.getBaseClass();
    inheritsFromNode = inheritsFromNode || (classDeclaration !== undefined && classDeclaration.getName() === 'Node')
  }

  classesToCreate.reverse()

  // console.log(`Building ${classesToCreate.length} classes derived from '${className}':`, classesToCreate.map(c => c.getName()))

  for (let i = 0; i < classesToCreate.length; i++) {
    const classDeclaration = classesToCreate[i]

    const moduleDeclaration = getModuleDeclarationFromClassDeclaration(classDeclaration);
    addNamedImportToFile(moduleDeclaration, [generatedCodeSourceFile, generatedPropsSourceFile], false);

    const baseClassDeclaration: ClassDeclaration | undefined = i > 0 ? classesToCreate[i - 1] : undefined;
    const className: string = classDeclaration.getName()!;
    addHostElement(className, classDeclaration);

    // console.warn('creating', className, " base -> ", baseClassDeclaration === undefined ? '<undefined>' : baseClassDeclaration.getName());

    let baseClassDeclarationForCreate = baseClassDeclaration === undefined ? classDeclaration : baseClassDeclaration

    const newClassDeclaration = createClassDeclaration(classDeclaration, baseClassDeclarationForCreate, generatedCodeSourceFile, generatedPropsSourceFile, extra);
    addCreateInfoFromConstructor(classDeclaration, newClassDeclaration, classNamespaceTuple.moduleDeclaration, generatedCodeSourceFile, generatedPropsSourceFile);

    const metadataClone = metadata === undefined ? {} : { ...metadata };
    if (inheritsFromNode) {
      metadataClone.isNode = true;
    }

    addMetadata(newClassDeclaration, classDeclaration, metadataClone);
  }

  console.log(` > ${classesToCreate.map(c => c.getName()!).sort((a, b) => a.localeCompare(b)).map(c => classToIntrinsic(c)).join(', ')}`)
}

/**
 * create class from base class
 * @param generatedCodeSourceFile
 * @param generatedPropsSourceFile
 * @param classNamespaceTuple
 * @param metadataFromClassName
 * @param extra
 * TODO: We should not be generating abstract classes.
 */
const createClassesInheritedFrom = (generatedCodeSourceFile: SourceFile, generatedPropsSourceFile: SourceFile, classNamespaceTuple: ClassNameSpaceTuple, metadataFromClassName: (classname: string) => InstanceMetadataParameter, extra?: (newClassDeclaration: ClassDeclaration, originalClassDeclaration: ClassDeclaration) => void, onAfterClassCreate?: Function, customProps?: (newClassDeclaration: ClassDeclaration) => string | undefined): void => {
  const orderedListCreator = new OrderedListCreator();

  const baseClassDeclaration = classNamespaceTuple.classDeclaration;

  const baseClassName: string = baseClassDeclaration.getName()!;
  addHostElement(baseClassName, baseClassDeclaration);

  const derivedClassesOrdered: Map<string, ClassDeclaration> = new Map<string, ClassDeclaration>();

  orderedListCreator.addDescendantsOrdered([baseClassDeclaration], derivedClassesOrdered)

  derivedClassesOrdered.forEach((derivedClassDeclaration: ClassDeclaration) => {
    addHostElement(derivedClassDeclaration.getName()!, derivedClassDeclaration);

    const newClassDeclaration = createClassDeclaration(derivedClassDeclaration, baseClassDeclaration, generatedCodeSourceFile, generatedPropsSourceFile, extra, customProps ? customProps(derivedClassDeclaration): undefined);
    addCreateInfoFromConstructor(derivedClassDeclaration, newClassDeclaration, classNamespaceTuple.moduleDeclaration, generatedCodeSourceFile, generatedPropsSourceFile);

    // AdvancedDynamicTexture has different metadata than other ThinTexture derived classes.
    const metadata: InstanceMetadataParameter | undefined = metadataFromClassName ? metadataFromClassName(newClassDeclaration.getName()!) : undefined;

    addMetadata(newClassDeclaration, derivedClassDeclaration, metadata);

    onAfterClassCreate && onAfterClassCreate(derivedClassDeclaration);
    addedClassDeclarationsMap.set(derivedClassDeclaration.getName()!, derivedClassDeclaration);
  });

  console.log(`Building ${derivedClassesOrdered.size} ${baseClassName}s: ${(Array.from(derivedClassesOrdered.values())).map(c => c.getName()!).sort((a, b) => a.localeCompare(b)).map(c => classToIntrinsic(c)).join(', ')}`)
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

const createSingleClass = (classOfInterest: string, generatedCodeSourceFile: SourceFile, generatedPropsSourceFile: SourceFile, baseClass?: ClassDeclaration, metadata?: InstanceMetadataParameter, extra?: () => void, customProps?: string): void => {
  const classToGenerate = classesOfInterest.get(classOfInterest)

  if (classToGenerate === undefined) {
    return; // skipping
  }

  if (baseClass === undefined) {
    baseClass = classToGenerate.classDeclaration
  }

  addHostElement(classToGenerate.classDeclaration.getName()!, classToGenerate.classDeclaration);

  const newClassDeclaration = createClassDeclaration(classToGenerate.classDeclaration, baseClass, generatedCodeSourceFile, generatedPropsSourceFile, extra, customProps);
  addCreateInfoFromConstructor(classToGenerate.classDeclaration, newClassDeclaration, classToGenerate.moduleDeclaration, generatedCodeSourceFile, generatedPropsSourceFile);

  addMetadata(newClassDeclaration, classToGenerate.classDeclaration, metadata);
  console.log(` > ${classToIntrinsic(classToGenerate.classDeclaration.getName()!)}`)
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

  addProject(["@babylonjs/core", "@babylonjs/gui"], ['../src/extensions/DynamicTerrain.ts'], [generatedCodeSourceFile, generatedPropsSourceFile]);

  ENUMS_LIST = Array.from(enumMap.keys());

  // These imports need to be totally REDONE and dynamically generated from ES6 locations (probably using a dictionary for uniqueness)
  generatedCodeSourceFile.addImportDeclaration({
    moduleSpecifier: "./PropsHandler",
    namedImports: [
      "PropsHandler",
      PROPERTY_UPDATE_INTERFACE,
      "HasPropsHandlers",
      // Following imported methods allow strong typing checks on PropsHandlers (and easier to read than code generating + smaller code footprint)
      "checkColor3Diff",
      "checkColor4Diff",
      "checkControlDiff",
      "checkFresnelParametersDiff",
      "checkLambdaDiff",
      "checkMethodDiff",
      "checkNumericArrayDiff",
      "checkObjectDiff",
      "checkObservableDiff",
      "checkPrimitiveDiff",
      "checkQuaternionDiff",
      "checkTextureDiff",
      "checkVector3Diff",
    ]
  });

  generatedCodeSourceFile.addImportDeclaration({
    moduleSpecifier: "./CreatedInstance",
    namedImports: [REACT_RECONCILER_CREATED_INSTANCE_METADATA]
  });

  generatedPropsSourceFile.addImportDeclaration({
    moduleSpecifier: "react",
    namedImports: ["Key", "ReactNode", "Ref"]
  });

  generatedPropsSourceFile.addImportDeclaration({
    moduleSpecifier: './CustomProps',
    namedImports: ALL_CUSTOM_PROPS
  });

  const mainTypeAlias = generatedPropsSourceFile.addTypeAlias({
    name: 'BabylonNode',
    type: Writers.objectType({
      properties: [{
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
      }]
    }),
    isExported: true
  });
  mainTypeAlias.addTypeParameter({
    name: "T"
  });

  const globalNamespace = generatedPropsSourceFile.addModule({
    name: "global",
    declarationKind: ModuleDeclarationKind.Global,
    hasDeclareKeyword: true,
  });

  const jsxNamespace = globalNamespace.addModule({
    name: 'JSX',
  });

  INTRINSIC_ELEMENTS = jsxNamespace.addInterface({
    name: "IntrinsicElements",
  });

  // This includes Node, which is base class for ie: Camera, Mesh, etc. (inheriting from Node would add new things like TextureDome)
  createClassesDerivedFrom(generatedCodeSourceFile, generatedPropsSourceFile, classesOfInterest.get("TransformNode")!, { isNode: true }, undefined);
  createClassesInheritedFrom(generatedCodeSourceFile, generatedPropsSourceFile, classesOfInterest.get("AbstractMesh")!, () => ({isNode: true, acceptsMaterials: true, isMesh: true}));

  const extra = (newClassDeclaration: ClassDeclaration, originalClassDeclaration: ClassDeclaration) => {
    // consider having targetable as metadata.
    const targetableCameraName = "TargetCamera";

    let baseDeclaration: ClassDeclaration | undefined = originalClassDeclaration
    let isTargetable: boolean = false;
    while (baseDeclaration !== undefined) {
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
    createClassesInheritedFrom(generatedCodeSourceFile, generatedPropsSourceFile, classesOfInterest.get("Camera")!, () => ({ isCamera: true, isNode: true }), extra);
  }

  if (classesOfInterest.get("MeshBuilder") !== undefined) {
    createFactoryClass(
      "MeshBuilder",
      "",
      {
        acceptsMaterials: true,
        isNode: true,
        isMesh: true
      },
      generatedCodeSourceFile,
      generatedPropsSourceFile
    );
  }

  if (classesOfInterest.get("Material")) {
    createClassesInheritedFrom(generatedCodeSourceFile, generatedPropsSourceFile, classesOfInterest.get("Material")!, () => ({ isMaterial: true }), undefined, undefined, () => ('MaterialCustomProps'));
  }

  if (classesOfInterest.get("Light")) {
    const fromClassName = (className: string): InstanceMetadataParameter => {
      const metadata: InstanceMetadataParameter = {
        isNode: true
      };
      switch (className.substr(CLASS_NAME_PREFIX.length)) {
        case "DirectionalLight":
        case "PointLight":
        case "SpotLight":
        case "ShadowLight": // I think it's abstract.  Anyway, it can still be created.
          metadata.isShadowLight = true;
          break;
        case "CascadedShadowLight": // I think it's abstract.  Anyway, it can still be created.
          metadata.isShadowLight = true;
          break;
      }
      return metadata;
    }
    createClassesInheritedFrom(generatedCodeSourceFile, generatedPropsSourceFile, classesOfInterest.get("Light")!, fromClassName, undefined);
  }

  if (classesOfInterest.get("Control")) {
    createClassesInheritedFrom(generatedCodeSourceFile, generatedPropsSourceFile, classesOfInterest.get("Control")!, () => ({ isGUI2DControl: true }));
  }

  if (classesOfInterest.get("Control3D")) {
    createClassesInheritedFrom(generatedCodeSourceFile, generatedPropsSourceFile, classesOfInterest.get("Control3D")!, () => ({ isGUI3DControl: true }), undefined, undefined, () => ('Control3DCustomProps'));
  }

  if (classesOfInterest.get("EffectLayer")) {
    const metadataFromClassName = (className: string) => ({
      isEffectLayer: true,
      isGlowLayer: className === `${CLASS_NAME_PREFIX}GlowLayer`
    });
    createClassesInheritedFrom(generatedCodeSourceFile, generatedPropsSourceFile, classesOfInterest.get("EffectLayer")!, metadataFromClassName);
  }

  if (classesOfInterest.get("ThinTexture")) {
    const ADT_CLASSNAME = `${CLASS_NAME_PREFIX}AdvancedDynamicTexture`;

    const fromClassName = (className: string): InstanceMetadataParameter => {
      if (className === ADT_CLASSNAME) {
        return {
          isGUI2DControl: true,
          isTexture: true
        };
      } else {
        return { isTexture: true };
      }
    }

    const onTexturesCreate = (classDeclaration: ClassDeclaration) => {
      if (classDeclaration.getName() === ADT_CLASSNAME) {
        createFactoryClass(
          'AdvancedDynamicTexture',
          'ADT',
          {
            isTexture: true,
            isGUI2DControl: true // it's a texture NOT a 2D control. but supports addControl and removeControl (only gets TexturesLifecycleListener)
          },
          generatedCodeSourceFile,
          generatedPropsSourceFile
        )
      }
    };

    createClassesInheritedFrom(generatedCodeSourceFile, generatedPropsSourceFile, classesOfInterest.get("ThinTexture")!, fromClassName, onTexturesCreate);
  }

  if (classesOfInterest.get("PostProcessRenderPipeline")) {
    createClassesInheritedFrom(generatedCodeSourceFile, generatedPropsSourceFile, classesOfInterest.get("PostProcessRenderPipeline")!, () => ({}));
  }

  if (classesOfInterest.get("PostProcess")) {
    createClassesInheritedFrom(generatedCodeSourceFile, generatedPropsSourceFile, classesOfInterest.get("PostProcess")!, () => ({}));
  }

  console.log('Adding single classes:');
  createSingleClass("GUI3DManager", generatedCodeSourceFile, generatedPropsSourceFile, undefined, { isGUI3DControl: true }, () => { return; });
  createSingleClass("EnvironmentHelper", generatedCodeSourceFile, generatedPropsSourceFile, undefined, { isEnvironment: true });
  createSingleClass("PhysicsImpostor", generatedCodeSourceFile, generatedPropsSourceFile, undefined, { delayCreation: true });
  createSingleClass("VRExperienceHelper", generatedCodeSourceFile, generatedPropsSourceFile, undefined, undefined, undefined, 'VRExperienceHelperCustomProps');
  createSingleClass("DynamicTerrain", generatedCodeSourceFile, generatedPropsSourceFile, undefined, { acceptsMaterials: true });
  createSingleClass("PointsCloudSystem", generatedCodeSourceFile, generatedPropsSourceFile);
  createSingleClass("Viewport", generatedCodeSourceFile, generatedPropsSourceFile);

  // These "delay creation" we want to also not generate constructors?
  createSingleClass("ShadowGenerator", generatedCodeSourceFile, generatedPropsSourceFile, undefined, { delayCreation: true }, () => { return; }, 'ShadowGeneratorCustomProps');
  createSingleClass("CascadedShadowGenerator", generatedCodeSourceFile, generatedPropsSourceFile, undefined, { delayCreation: true }, () => { return; }, 'ShadowGeneratorCustomProps');
  createSingleClass("EngineView", generatedCodeSourceFile, generatedPropsSourceFile, undefined, { delayCreation: true }, () => { return; });

  console.log('Adding read-only property classes:');
  readonlyPropertiesToGenerate.forEach((value: ClassNameSpaceTuple, className: string) => {
    const classDeclaration = value.classDeclaration;
    addHostElement(classDeclaration.getName()!, classDeclaration);

    if (classDeclaration.getBaseClass() !== undefined) {
      console.error(" >> READONLY property with base class detected (will not generate correctly):", classDeclaration.getBaseClass()?.getName())
    }

    console.log(` > ${classToIntrinsic(className)}`)
    const newClassDeclaration = createClassDeclaration(classDeclaration, classDeclaration, generatedCodeSourceFile, generatedPropsSourceFile, extra);
    addCreateInfoFromConstructor(classDeclaration, newClassDeclaration, value.moduleDeclaration, generatedCodeSourceFile, generatedPropsSourceFile);

    addMetadata(newClassDeclaration, classDeclaration);
  })

  console.log('Adding behaviors:')
  classesOfInterest.forEach((_, className) => {
    if (className.includes('Behavior')) {
      createSingleClass(className as string, generatedCodeSourceFile,
        generatedPropsSourceFile, undefined, { isBehavior: true })
    }
  });

  if (classesOfInterest.get("Scene")) {
    // Scene we only want to generate the handlers. Constructor is very simple - just an Engine
    const sceneTuple: ClassNameSpaceTuple = classesOfInterest.get("Scene")!;
    const className: string = sceneTuple.classDeclaration.getName()!;

    const sceneClassDeclaration = getModuleDeclarationFromClassDeclaration(sceneTuple.classDeclaration);

    addPropsAndHandlerClasses(generatedCodeSourceFile, generatedPropsSourceFile, className, sceneClassDeclaration, getInstanceProperties(sceneTuple.classDeclaration), getInstanceSetMethods(sceneTuple.classDeclaration), undefined);
  }

  // add our own custom components - needed for TypeScript compatibility:
  // addCustomHostElement('Model', 'ModelProps & BabylonNode<BabylonjsCoreAbstractMesh>');

  addReactExports(generatedCodeSourceFile);

  generatedCodeSourceFile.addImportDeclaration({
    moduleSpecifier: "./generatedProps",
    namedImports: PROPS_EXPORTS
  });

  // Need a set, since 'hostComponent' is set in both files.
  const factoryClasses: Map<string, string> = new Map<string, string>();

  Array.from(importDeclarationMap.values()).forEach(file => {
    Array.from(file.values()).forEach((fileModuleDeclarations: FileModuleDeclaration[]) => {
      const sourceFile: SourceFile = fileModuleDeclarations[0].sourceFile;
      const importDeclaration: ImportDeclaration = sourceFile.addImportDeclaration({
        moduleSpecifier: fileModuleDeclarations[0].moduleDeclaration.moduleSpecifier
      } as ImportDeclarationStructure);

      fileModuleDeclarations.forEach((fileModuleDeclaration: FileModuleDeclaration) => {
        importDeclaration.addNamedImport({
          name: fileModuleDeclaration.moduleDeclaration.className,
          alias: fileModuleDeclaration.moduleDeclaration.importAlias
        });

        if (fileModuleDeclaration.hostComponent && !factoryClasses.has(fileModuleDeclaration.moduleDeclaration.importAlias)) {
          factoryClasses.set(fileModuleDeclaration.moduleDeclaration.importAlias, fileModuleDeclaration.moduleDeclaration.className);
        }
      })
    })
  })

  // we can do this as long as there are no classes with the same name across imports
  // otherwise we can just use a Set<string> with importalias, but need to generate more metadata.
  // ie: classseMap = { BabylonjsCoreBox, BabylonjsCoreSphere, ... };
  // We generate both IntrinsicType (ie: arcRotateCamera) and "component" (ie: ArcRotateCamera), but will remove "component" when local JSX is ready.
  generatedCodeSourceFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    isExported: false,
    declarations: [{
      name: 'classesMap',
      type: "object",
      initializer: `{\n${Array.from(factoryClasses.entries())
        .map(([alias, className]) =>
          `${classToIntrinsic(className)}: ${alias},${className}: ${alias}`)
        .join(',\n')}}`
    }]
  });

  // for going from camelCase on vrExperienceHelper to VRExperienceHelper to locate generated classes.
  generatedCodeSourceFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    isExported: true,
    declarations: [{
      name: 'intrinsicClassMap',
      type: "object",
      initializer: `{\n${Array.from(factoryClasses.entries())
        .map(([alias, className]) =>
          `${classToIntrinsic(className)}:'${className}'`)
        .join(',\n')},
          ${createdFactoryClasses.map(meshName =>
          `${classToIntrinsic(meshName)}:'${meshName}'`)
          .join(',\n')}
        }`
    }]
  });

  const functionDeclaration: FunctionDeclaration = generatedCodeSourceFile.addFunction({
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

  console.log('saving created content...')

  const formatCodeSettings: FormatCodeSettings = {
    newLineCharacter: '\n',
  }

  generatedCodeSourceFile.formatText(formatCodeSettings);
  await generatedCodeSourceFile.save();

  generatedPropsSourceFile.formatText(formatCodeSettings);
  await generatedPropsSourceFile.save();
}

console.time('total-duration');
const result = generateCode();

result.then(() => {
  console.log('completed without errors');
}).catch(reason => {
  console.error('failed:', reason);
}).finally(() => {
  console.timeEnd('total-duration');
  exit();
})