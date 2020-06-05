/**
 * Assign value to an object property
 *
 * @param value: What you are assigning
 * @param target: Target to assign value to
 * @param propertyPath Where to assign value to on target (path to assign.  ie: "baseTexture" or "mesh.material")
 *
 */
export function assignProperty(value: any, target: any, propertyPath: string) {
  const propsList: string[] = propertyPath.split('.');

  propsList.forEach((prop: string, index: number) => {
    // for assigning to arrays (ie: Texture to model -> meshes[1].material.albedoTexture)
    const arrayRegex = /(?<arrayName>.*)\[(?<arrayIndexString>\d+)\]$/;
    const match = prop.match(arrayRegex);

    if (match && (match as any).groups) {
      const { arrayName, arrayIndexString} = (match as any).groups;
      const arrayIndex = parseInt(arrayIndexString);
      const arrayProp = target[arrayName];
      if (arrayProp === undefined || !Array.isArray(arrayProp) || arrayIndex >= arrayProp.length  ) {
        console.error(`Array not found or missing index (skipping) for property assignment: '${arrayName}[${arrayIndex}]'`, target);
      } else {
        if (index === propsList.length - 1) {
          arrayProp[arrayIndex] = value;
        } else {
          target = arrayProp[arrayIndex];
        }
      }
    } else {
      if (target[prop] === undefined) {
        // create property if it doesn't exist.
        console.warn(`Created property ${prop} on: (from ${propsList})`, target)
        target[prop] = {}
      }
  
      if (index === propsList.length - 1) {
        target[prop] = value;
      } else {
        target = target[prop]
      }
    }
  })
}

