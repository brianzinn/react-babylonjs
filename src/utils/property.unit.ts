/**
 * link object to another's property
 * @param child: hostInstance
 * @param toAssign: hostInstance
 * @param propertyDir
 * ex: material.diffuseTexture = texture
 */
export function assignProperty(child: any, toAssign: any, propertyDir: string) {
  const propsList: string[] = propertyDir.split('.');

  propsList.forEach((prop: string, index: number) => {
    if (toAssign[prop] === undefined) {
      // create property if it doesn't exist.
      console.warn('Assign to created property', prop, 'on', toAssign)
      toAssign[prop] = {}
    }

    if (index === propsList.length - 1) {
      toAssign[prop] = child;
    } else {
      toAssign = toAssign[prop]
    }
  })
}
