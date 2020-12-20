import { Engine, Nullable } from '@babylonjs/core';
import React, { createContext, useContext } from'react';

export type EngineCanvasContextType = {
    engine: Nullable<Engine>
    canvas: Nullable<HTMLCanvasElement | WebGLRenderingContext>
};

export const EngineCanvasContext = createContext<EngineCanvasContextType>({
    engine: null,
    canvas: null
});

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function withEngineCanvasContext<
  P extends { engineCanvasContext: EngineCanvasContextType },
  R = Omit<P, 'engineCanvasContext'>
  >(
  Component: React.ComponentClass<P> | React.FunctionComponent<P>
  ): React.FunctionComponent<R> {
  return function BoundComponent(props: R) {
    return (
      <EngineCanvasContext.Consumer>
        {ctx => <Component {...props as any} engineCanvasContext={ctx} />}
      </EngineCanvasContext.Consumer>
    );
  };
}

/**
 * Get the engine from the context.
 */
export const useEngine = (): Nullable<Engine> => useContext(EngineCanvasContext).engine;

/**
 * Get the canvas DOM element from the context.
 */
export const useCanvas = (): Nullable<HTMLCanvasElement | WebGLRenderingContext> => useContext(EngineCanvasContext).canvas;
