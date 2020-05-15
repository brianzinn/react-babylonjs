import {
  CustomPropsHandler,
  ICustomPropsHandler,
  PropChangeType,
  PropertyUpdateProcessResult
} from "../../PropsHandler";
import {Color3, Color4, Vector3} from "@babylonjs/core";

function parseRgbaString(rgba: string): number[] {
  const arr: string[] = rgba.replace(/[^\d,]/g, '').split(',');
  return arr.map(num => parseInt(num, 10) / 255);
}

const Key = 'react-babylon-spring';

export class CustomColor3StringHandler implements ICustomPropsHandler<string, Color3> {
  get name() {
    return `${Key}:Color3String`
  }

  public propChangeType: string = PropChangeType.Color3;

  accept(newProp: string): boolean {
    return typeof (newProp) === 'string';
  }

  process(oldProp: string, newProp: string): PropertyUpdateProcessResult<Color3> {
    if (oldProp !== newProp) {
      return {
        processed: true,
        value: Color3.FromArray(parseRgbaString(newProp))
      };
    }

    return {processed: false, value: null};
  }
}

export class CustomColor3ArrayHandler implements ICustomPropsHandler<number[], Color3> {
  get name() {
    return `${Key}:Color3Array`
  }

  public propChangeType: string = PropChangeType.Color3;

  accept(newProp: []): boolean {
    return Array.isArray(newProp);
  }

  process(oldProp: number[], newProp: number[]): PropertyUpdateProcessResult<Color3> {
    if (oldProp === undefined || oldProp.length !== newProp.length) {
      // console.log(`found diff length (${oldProp?.length}/${newProp?.length}) Color3Array new? ${oldProp === undefined}`)
      return {
        processed: true,
        value: Color3.FromArray(newProp)
      };
    }

    for (let i = 0; i < oldProp.length; i++) {
      if (oldProp[i] !== newProp[i]) {
        // console.log('found diff value Color3Array')
        return {
          processed: true,
          value: Color3.FromArray(newProp)
        };
      }
    }

    return {processed: false, value: null};
  }
}

export class CustomColor4StringHandler implements ICustomPropsHandler<string, Color4> {

  get name() {
    return `${Key}:Color4String`
  }

  public propChangeType: string = PropChangeType.Color4;

  accept(newProp: string): boolean {
    return typeof (newProp) === 'string';
  }

  process(oldProp: string, newProp: string): PropertyUpdateProcessResult<Color4> {
    if (oldProp !== newProp) {
      // console.log('found diff Color4String')
      return {
        processed: true,
        value: Color4.FromArray(parseRgbaString(newProp))
      };
    }

    return {processed: false, value: null};
  }
}


export class CustomVector3ArrayHandler implements ICustomPropsHandler<number[], Vector3> {
  get name() {
    return `${Key}:Vector3Array`
  }

  public propChangeType: string = PropChangeType.Vector3;

  accept(newProp: []): boolean {
    return Array.isArray(newProp);
  }

  process(oldProp: number[], newProp: number[]): PropertyUpdateProcessResult<Vector3> {
    if (oldProp === undefined || oldProp.length !== newProp.length) {
      // console.log(`found diff length (${oldProp?.length}/${newProp?.length}) Color3Array new? ${oldProp === undefined}`)
      return {
        processed: true,
        value: Vector3.FromArray(newProp)
      };
    }

    for (let i = 0; i < oldProp.length; i++) {
      if (oldProp[i] !== newProp[i]) {
        return {
          processed: true,
          value: Vector3.FromArray(newProp)
        };
      }
    }

    return {processed: false, value: null};
  }
}

// May be useful to include where they can be ES6 loaded via side-effect.
// ie: import 'react-babylonjs/plugins/handlers'
CustomPropsHandler.RegisterPropsHandler(new CustomColor3StringHandler());
CustomPropsHandler.RegisterPropsHandler(new CustomColor3ArrayHandler());
CustomPropsHandler.RegisterPropsHandler(new CustomColor4StringHandler());
CustomPropsHandler.RegisterPropsHandler(new CustomVector3ArrayHandler());

