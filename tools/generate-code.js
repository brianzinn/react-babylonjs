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
const classInfo = {}
const project = new Project({})
project.addExistingSourceFiles(`${__dirname}/../node_modules/babylonjs/**/*.ts`)
const sourceFile = project.getSourceFileOrThrow('babylon.d.ts')
const babylonNamespaces = sourceFile
  .getNamespaces()
  .filter(n => n.getName() === 'BABYLON')

let MeshBuilder
babylonNamespaces
  .forEach(n => n.getClasses().forEach(c => {
    // all classes here
    const name = c.getName()
    const family = getFamily(name)
    if (family) {
      const constructor = c.getConstructors()[0]
      // here you know it's a class we already found
      classInfo[name] = {
        name,
        family,
        props: c.getInstanceProperties().map(m => m.getName()).filter(p => p[0] !== '_'),
        args: []
      }
      if (constructor) {
        classInfo[name].args = c.getConstructors()[0].getParameters().map(p => p.getName())
      }
    }
    if (name === 'MeshBuilder') {
      MeshBuilder = c
    }
  }))

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
    classInfo[name] = meshInfo
  })
}

const saveStuff = async () => {
  // save info in JSON files
  await save(`${__dirname}/../src/components.json`, classInfo)

  const exportsProject = new Project()
  const sourceFile = exportsProject.createSourceFile(
    `${__dirname}/../src/tags.ts`,
    "",
    { overwrite: true }
  );

  let tags = Object.keys(classInfo)
  tags.sort(/* use default ASCII sorter */)
  
  sourceFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    isExported: true,
    declarations: tags.map(tag => ({
      name: tag,
      type: "string",
      initializer: `'${tag}'`
    }))
  });
  
  sourceFile.formatText();
  await sourceFile.save();
}


saveStuff()
