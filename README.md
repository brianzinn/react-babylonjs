# react-babylonjs

> _'react-babylonjs'_ integrates the Babylon.js real time 3D engine with React

`react-babylonjs` lets you build your scene and components using a familiar
declarative syntax with the benefits of reusable components and hooks. The
Babylon.js API is mostly covered declaratively thanks to code generation and
even custom props allow you to declaratively add shadows, physics, 3D models,
attach 2D/3D UI to meshes, etc.

Fully supports hooks. Full support for TypeScript with auto-completion on
elements and compile time checks. Context API and hooks provide easy access to
Scene/Engine/Canvas.

[![NPM version](http://img.shields.io/npm/v/react-babylonjs.svg?style=flat-square)](https://www.npmjs.com/package/react-babylonjs)
[![NPM downloads](http://img.shields.io/npm/dm/react-babylonjs.svg?style=flat-square)](https://www.npmjs.com/package/react-babylonjs)

_No third party dependencies outside of React + babylon.js_

[https://brianzinn.github.io/react-babylonjs/](https://brianzinn.github.io/react-babylonjs/)

## Examples

~50 sample web pages with viewable source code on:
[github pages examples](https://brianzinn.github.io/react-babylonjs/examples).

## Example Projects

- [Create React App (JavaScript)](https://github.com/brianzinn/create-react-app-babylonjs)
  CRA JavaScript implementation. Github pages has live examples of typical and
  declarative usage some with Redux.
- [Create React App (TypeScript)](https://github.com/brianzinn/create-react-app-typescript-babylonjs)
  CRA 3 TypeScript. Examples of physics, shadows, etc.

## React Native

No online examples for native, but you can integrate using
`EngineCanvasContext.Provider`:

```jsx
import React, { useState } from 'react';
import { View } from 'react-native';

import { EngineView, useEngine } from '@babylonjs/react-native';
import { Camera } from '@babylonjs/core';
import { EngineCanvasContext, Scene } from 'react-babylonjs';

const EngineScreen: FunctionComponent<ViewProps> = (props: ViewProps) => {

  const engine = useEngine();
  const [camera, setCamera] = useState<Camera>();

  return (
    <View style={props.style}>
      <EngineCanvasContext.Provider value={{ engine, canvas: null }}>
        {engine &&
          <Scene>
            <arcRotateCamera
              name="camera1"
              onCreated={camera => setCamera(camera)}
            />
            <hemisphericLight name="light1" />
            { /* rest of declarative scene/components here */ }
          </Scene>
        }
      </EngineCanvasContext.Provider>
      <EngineView camera={camera} displayFrameRate={true} />
    </View>
  );
};
```

## Contributors

- Huge shout out to [Konsumer](https://github.com/konsumer) that helped bring
  this project to the next level. The ideas and code sandboxes from issue #6
  inspired the code generation and HOC + Context API integration.
- [seacloud9](https://github.com/seacloud9) for adding
  [storybook](https://brianzinn.github.io/react-babylonjs/),
  [GSAP demo](https://brianzinn.github.io/react-babylonjs/?path=/story/integrations--gsap-timeline),
  [dynamic terrain](https://brianzinn.github.io/react-babylonjs/?path=/story/babylon-basic--dynamic-terrain)
  (extension) &
  [PIXI demo](https://brianzinn.github.io/react-babylonjs/?path=/story/integrations--pixi-story).
- [hookex](https://github.com/hookex) has made the largest contribution :)
  Proper texture handling
  [demo](https://brianzinn.github.io/react-babylonjs/?path=/story/textures--image-texture),
  Node parenting,
  [demo](https://brianzinn.github.io/react-babylonjs/?path=/story/babylon-basic--transform-node)
  Full Screen GUI
  [demo](https://brianzinn.github.io/react-babylonjs/?path=/story/gui--gui-full-screen),
  Effect Layers
  [glow demo](https://brianzinn.github.io/react-babylonjs/?path=/story/special-fx--glow-layer),
  behaviors
  [demo](https://brianzinn.github.io/react-babylonjs/?path=/story/behaviors--pointer-drag-behavior),
  useHover & useClick hooks
  [demo](https://brianzinn.github.io/react-babylonjs/?path=/story/hooks--use-hover-event)
  and react-spring integration
  [demo](https://brianzinn.github.io/react-babylonjs/?path=/story/integrations--react-spring).
  Author of `react-babylon-spring` -
  https://github.com/hookex/react-babylon-spring.
- [dennemark](https://github.com/dennemark) add support for
  `CascadedShadowGenerator`, `createPortal` and `Html` (project HTML in scene -
  ported from `drei`). Also, stories for
  [Snippet Material](https://brianzinn.github.io/react-babylonjs/?path=/story/babylon-basic--snippet-material)
  and
  ["tunnel" zustand integration](https://brianzinn.github.io/react-babylonjs/?path=/story/integrations--zustand-tunnel).
  Added `RenderOnDemand` to customize render loops.
- [kencyke](https://github.com/kencyke) created a cool multi-canvas + cloud
  point repo that insipired creation of `<pointsCloudSystem .../>` as host
  element.
- [flostellbrink](https://github.com/flostellbrink) fixed the
  `react-babylon-spring` integration and added GH action for Storybook
  ([github pages](https://brianzinn.github.io/react-babylonjs))
- [voronp](https://github.com/voronp) add `isPaused` Engine prop to skip
  rendering
- [saidmoya12](https://github.com/saidmoya12) add camera before/after render
  hooks
- [Viktor Zhurbin](https://github.com/ViktorZhurbin) rebuilt single handedly a
  much improved GH pages website using rspress. Including a complete rewrite of
  how inline code samples are displayed, so you can view fullscreen, multiple
  files and toggle between code/preview/split and a much better search and
  mobile experience. Also, the amazing
  [Playground](https://brianzinn.github.io/react-babylonjs/playground) was added
  including saved and sharable snippets/forking!

> Thanks also to all the people who have contributed with
> issues/questions/discussions. All the great ideas and requests are why this
> project evolved beyond an experiment.

Made with ♥
