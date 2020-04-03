import {Color3, Vector3} from "@babylonjs/core";

export const is = {
  arr: Array.isArray,
  obj: (a: unknown): a is object =>
    Object.prototype.toString.call(a) === '[object Object]',
  fun: (a: unknown): a is Function => typeof a === 'function',
  str: (a: unknown): a is string => typeof a === 'string',
  num: (a: unknown): a is number => typeof a === 'number',
  und: (a: unknown): a is undefined => a === void 0,
  nul: (a: unknown): a is null => a === null,
  set: (a: unknown): a is Set<any> => a instanceof Set,
  map: (a: unknown): a is Map<any, any> => a instanceof Map,
  equ(a: any, b: any) {
    if (typeof a !== typeof b) return false
    if (is.str(a) || is.num(a)) return a === b
    if (
      is.obj(a) &&
      is.obj(b) &&
      Object.keys(a).length + Object.keys(b).length === 0
    ) {
      return true
    }
    let i
    for (i in a) if (!(i in b)) return false
    for (i in b) if (a[i] !== b[i]) return false
    return is.und(i) ? a === b : true
  },
  color3: (a: unknown) => a instanceof Color3,
  vector3: (a: unknown) => a instanceof Vector3,
};

function isArrEqual(a: number[], b: number[]): boolean {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

/**
 * todo: support more types comparision
 * @param a
 * @param b
 */
export function isEqual(a: unknown, b: unknown): boolean {
  if (a === b) {
    return true;
  }

  if (is.color3(a) && is.color3(b)) {
    return (a as Color3).equals(b as Color3);
  }

  if (is.vector3(a) && is.vector3(b)) {
    return (a as Color3).equals(b as Color3);
  }

  if (is.arr(a) && is.arr(b)) {
    return isArrEqual(a, b);
  }

  return false;
}
