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
  })
}
