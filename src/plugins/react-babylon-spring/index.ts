import {Globals} from '@react-spring/core';
import {createStringInterpolator} from '@react-spring/shared/stringInterpolation';
import {applyInitialPropsToInstance} from "../../UpdateInstance";
import './customProps';

Globals.assign({
  defaultElement: 'transformNode',
  // todo: frameLoop can use runRenderLoop
  applyAnimatedValues: (node, props) => {
    /**
     * used for update props
     * initialization don't enter here
     */
    applyInitialPropsToInstance(node, props)
  },
  createStringInterpolator,
});

export * from './animated';
export * from './customProps';
export * from '@react-spring/core';
