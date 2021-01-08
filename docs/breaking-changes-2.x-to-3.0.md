# React BabylonJS

> 'react-babylonjs' 3.x has many breaking changes to advance the API decided to do them all at once in a major version.

## hostInstance not public
**BEFORE:**
```jsx
conse boxRef = useRef();
if (boxRef.current) {
  const mesh = boxRef.current.hostInstance;
}
...
<box ref={boxRef} .../>
```

**AFTER:** Now is directly accessible
```jsx
conse boxRef = useRef();
if (boxRef.current) {
  const mesh = boxRef.current;
}
...
<box ref={boxRef} .../>
```


## model -> Model
`model` intrinsic host element has been removed in favour of a `Model` component (notice the lower case vs. proper case), which needs to be enclosed in `React.Suspense` Component.
**BEFORE:**
```jsx
import { Scene } from 'react-babylonjs';
...
<Engine>
  <Scene>
    <model ... />
  </Scene>
</Engine>
```

**AFTER:** Now needs to be enclosed in Suspense.
```jsx
import React, {Suspense} from 'react';
import { Engine, Scene } from 'react-babylonjs';

...
<Engine>
  <Scene>
    <Suspense fallback={<Spinner />}>
      <Model ... />
    </Suspense>
  </Scene>
</Engine>
```

If you find something else that changed for the migration, please add a PR or create an issue.  Thanks.