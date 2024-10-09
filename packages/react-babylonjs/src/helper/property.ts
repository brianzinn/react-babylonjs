/**
 * Assign value to an object property
 *
 * @param value: What you are assigning
 * @param target: Target to assign value to
 * @param propertyPath Where to assign value to on target (path to assign.  ie: "baseTexture" or "mesh.material")
 *
 */
export function assignProperty(value: any, target: any, propertyPath: string | string[]) {
  const propertyPaths: string[] = Array.isArray(propertyPath) ? propertyPath : [propertyPath]
  propertyPaths.forEach((propPath) => {
    const propsList: string[] = propPath.split('.')

    const INDEXED_REGEX = /^.*\[\d+\]$/

    propsList.forEach((prop: string, index: number) => {
      // for assigning to arrays (ie: Texture to model -> meshes[1].material.albedoTexture)
      // NOTE: named capturing only available targeting ES2018 or later
      // const arrayRegex = /(?<arrayName>.*)\[(?<arrayIndexString>\d+)\]$/
      // const match = prop.match(arrayRegex)

      const isIndexedProperty = INDEXED_REGEX.test(prop)

      if (isIndexedProperty) {
        // const { arrayName, arrayIndexString } = (match as any).groups
        const arrayName = prop.substring(0, prop.indexOf('['))
        const arrayIndexString = prop.substring(prop.indexOf('[') + 1, prop.length - 1)
        const arrayIndex = parseInt(arrayIndexString)
        const arrayProp = target[arrayName]

        if (
          arrayProp === undefined ||
          !Array.isArray(arrayProp) ||
          arrayIndex >= arrayProp.length
        ) {
          console.error(
            `Array not found or missing index (skipping) for property assignment: '${arrayName}[${arrayIndex}]'`,
            target
          )
        } else {
          if (index === propsList.length - 1) {
            arrayProp[arrayIndex] = value
          } else {
            target = arrayProp[arrayIndex]
          }
        }
      } else {
        if (target[prop] === undefined) {
          // create property if it doesn't exist.
          console.warn(`Created property ${prop} on: (from ${propsList})`, target)
          target[prop] = {}
        }

        if (index === propsList.length - 1) {
          target[prop] = value
        } else {
          target = target[prop]
        }
      }
    })
  })
}
