import { Color3, Vector3 } from "@babylonjs/core/Maths/math";
import React from "react";
import "react-babylon-spring";
import { animated, useSpring, useSprings } from "react-babylon-spring";
import {
  CustomPropsHandler,
  Engine,
  PropChangeType,
  Scene,
  useHover,
} from "react-babylonjs";
import "../../style.css";

export default { title: "Integrations" };

/**
 * Only need these Handlers or otherwise react-babylon-spring can export them.
 * Copied from /src/customProps in that repo.
 * The global resolution that used to work likely broke when not re-using the same Fiber host was fixed in issue #100 (new renderer creation).
 */
function parseRgbaString(rgba) {
  const arr = rgba.replace(/[^\d,]/g, "").split(",");
  return arr.map((num) => parseInt(num, 10) / 255);
}

const Key = "react-babylon-spring";

class CustomColor3StringHandler {
  get name() {
    return `${Key}:Color3String`;
  }

  get propChangeType() {
    return PropChangeType.Color3;
  }

  accept(newProp) {
    // console.log('accept Color3String?', newProp);
    return typeof newProp === "string";
  }

  process(oldProp, newProp) {
    if (oldProp !== newProp) {
      return {
        processed: true,
        value: Color3.FromArray(parseRgbaString(newProp)),
      };
    }

    return { processed: false, value: null };
  }
}

class CustomColor3ArrayHandler {
  get name() {
    return `${Key}:Color3Array`;
  }

  get propChangeType() {
    return PropChangeType.Color3;
  }

  accept(newProp) {
    // console.log('accept Color3Array?:', Array.isArray(newProp), newProp);
    return Array.isArray(newProp);
  }

  process(oldProp, newProp) {
    if (oldProp === undefined || oldProp.length !== newProp.length) {
      console.log(
        `found diff length (${oldProp?.length}/${
          newProp?.length
        }) Color3Array new? ${oldProp === undefined}`
      );
      return {
        processed: true,
        value: Color3.FromArray(newProp),
      };
    }

    for (let i = 0; i < oldProp.length; i++) {
      if (oldProp[i] !== newProp[i]) {
        console.log("found diff value Color3Array", oldProp, newProp);
        return {
          processed: true,
          value: Color3.FromArray(newProp),
        };
      }
    }

    // console.log('Color3Array not processed', oldProp, newProp);
    return { processed: false, value: null };
  }
}

class CustomColor4StringHandler {
  get name() {
    return `${Key}:Color4String`;
  }

  get propChangeType() {
    return PropChangeType.Color4;
  }

  accept(newProp) {
    return typeof newProp === "string";
  }

  process(oldProp, newProp) {
    if (oldProp !== newProp) {
      // console.log('found diff Color4String')
      return {
        processed: true,
        value: Color4.FromArray(parseRgbaString(newProp)),
      };
    }

    return { processed: false, value: null };
  }
}

class CustomVector3ArrayHandler {
  get name() {
    return `${Key}:Vector3Array`;
  }

  get propChangeType() {
    return PropChangeType.Vector3;
  }

  accept(newProp) {
    // console.log('Vector3: newProp:', newProp, Array.isArray(newProp));
    return Array.isArray(newProp);
  }

  process(oldProp, newProp) {
    if (oldProp === undefined || oldProp.length !== newProp.length) {
      // console.log(`found diff length (${oldProp?.length}/${newProp?.length}) Color3Array new? ${oldProp === undefined}`)
      return {
        processed: true,
        value: Vector3.FromArray(newProp),
      };
    }

    for (let i = 0; i < oldProp.length; i++) {
      if (oldProp[i] !== newProp[i]) {
        // console.log('found difference...', oldProp, newProp);
        return {
          processed: true,
          value: Vector3.FromArray(newProp),
        };
      }
    }

    // console.log('not processed...');
    return { processed: false, value: null };
  }
}
/**
 * This is the end of code that needed to be copied, since it is not exported.
 */

// we need to keep registering these as our fiber instance is being recreated when reloaded - the registrations imported as side-effects are
const registerPropsHandlers = () => {
  CustomPropsHandler.RegisterPropsHandler(new CustomColor3StringHandler());
  CustomPropsHandler.RegisterPropsHandler(new CustomColor3ArrayHandler());
  CustomPropsHandler.RegisterPropsHandler(new CustomColor4StringHandler());
  CustomPropsHandler.RegisterPropsHandler(new CustomVector3ArrayHandler());
};

const getRandomColor = (function () {
  // const Colors = ['#4F86EC', '#D9503F', '#F2BD42', '#58A55C'];
  const Colors = [
    [0.31, 0.53, 0.93, 1],
    [0.85, 0.31, 0.25, 1],
    [0.95, 0.74, 0.26, 1],
    [0.35, 0.65, 0.36, 1],
  ];

  let i = 0;
  return () => {
    i++;
    return Colors[i % Colors.length];
  };
})();

function getCyclePosition(i, blankRadius) {
  i += blankRadius;
  let angle = (i % Math.PI) * 2;
  const x = i * Math.cos(angle);
  const z = i * Math.sin(angle);

  return [x, z];
}

const WithSpring = () => {
  // this only needs to be done once, so not on every render.
  registerPropsHandlers();

  const [props, set] = useSprings(100, (i) => {
    const [x, z] = getCyclePosition(i, 30);

    return {
      position: [x, 20, z],
      color: getRandomColor(),
      from: {
        position: [x, Math.random() * 50 - 60, z],
      },
      config: {
        duration: 3000,
      },
    };
  });

  const [ref, isHovering] = useHover(
    (_) => {
      set((index, ctrl) => {
        return {
          color: getRandomColor(),
          position: [0, 20, 0],
          config: {
            duration: 2000,
          },
        };
      });
    },
    (_) => {
      set((i) => {
        const [x, z] = getCyclePosition(i, 30);
        return {
          position: [x, 20, z],
          config: {
            duration: 2000,
          },
        };
      });
    }
  );

  const groupProps = useSpring({
    rotation: isHovering ? [0, Math.PI * 2, 0] : [0, 0, 0],
    config: {
      duration: 2000,
    },
  });

  return (
    <>
      <freeCamera
        name="camera1"
        position={new Vector3(0, 200, -200)}
        setTarget={[Vector3.Zero()]}
      />
      <hemisphericLight
        name="light1"
        intensity={0.7}
        direction={Vector3.Up()}
      />

      <animated.transformNode name="" rotation={groupProps.rotation}>
        {props.map(({ position, color }, i) => (
          <animated.box
            key={i}
            name=""
            width={6}
            height={16}
            depth={6}
            position={position}
          >
            <animated.standardMaterial name="" diffuseColor={color} />
          </animated.box>
        ))}
      </animated.transformNode>

      <sphere ref={ref} name="" diameter={40} position={new Vector3(0, 20, 0)}>
        <standardMaterial
          name=""
          diffuseColor={new Color3(0.3, 0.6, 0.9)}
          alpha={0.8}
        />
      </sphere>

      <ground name="ground1" width={1000} height={1000} subdivisions={2} />
    </>
  );
};

export const ReactSpring = () => (
  <div style={{ flex: 1, display: "flex" }}>
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <Scene>
        <WithSpring />
      </Scene>
    </Engine>
  </div>
);

ReactSpring.story = {
  name: "react-spring",
};
