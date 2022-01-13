# React BabylonJS

> 'react-babylonjs' < 1.0.0 was experimental

There is so much new in 1.0.0.  Most of the breaking changes will be because all naming matches BabylonJS API.  This is good for consistency and makes using and transitioning to this library easier.

The experimental builds had just enough subset of BabylonJS API to demonstrate a proof of concept.  With v1.0.0 code generation is used to create a much larger API coverage of not only the types (ie: Cameras, Materials, Controls, etc.), but also factory methods (ie: Meshbuilder.createXX()), most of the properties and even some methods (ie: overservable, setTarget, etc.).  Due to BabylonJS rarely making breaking changes this was a good way to go.

If moving to 1.0.0 from the experimental builds the biggest change is that you will need to import an Engine and it will be the parent of Scene.  If you used custom engine properties then they move as well.

**BEFORE:**
```jsx
import { Scene } from 'react-babylonjs
...
<Scene engineOptions={{ preserveDrawingBuffer: true }}>
  <Ground name="ground" />
</Scene>
```

**AFTER:** Now needs to be
```jsx
import { Engine, Scene } from 'react-babylonjs

...
<Engine engineOptions={{ preserveDrawingBuffer: true }}>
  <Scene>
    <Ground name="ground" />
  </Scene>
</Engine>
```
** although multiple-scenes aren't supported yet.  This change helps make that possible.

`VRExperience` renamed to `VRExperienceHelper`.  Matching names with BabylonJS is more consistent.

`Button.onPointerDown` has become `onPointerDownObservable`.  In fact, all observables and 'on' events were added to v1 thanks to the code-generation that was added.

If you find something else that changed for the migration, please add a PR or create an issue.  Thanks.