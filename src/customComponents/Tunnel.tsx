import { remove } from 'lodash';
import React, { useEffect, ReactNode, useState, cloneElement} from 'react';

import {proxy, useSnapshot} from 'valtio'

/** 
 * A tunnel allows to render components of one renderer inside another.
 * I.e. babylonjs components normally need to live within Engine component.
 * A tunnel entrance allows to position components in a different renderer, such as ReactDOM
 * and move it to the tunnel exit, that must exist within Engine component.
 *
 * The nice thing is, even refs can be used outside of Engine context.
 * 
 * The createTunnel function creates a tunnel entrance and exit component.
 * The tunnel works one-directional. 
 * TunnelEntrance only accepts components that are allowed to live within the renderer of TunnelExit.
 * Multiple entrances and exits are possible.
 * 
 * If components need to be rendererd the other way around, a second Tunnel is needed.
 * 
 */
const createTunnel = () => {
    /**
     * Possible improvement: use key/value object to steer children from different entrances to different exits
     * i.e. <TunnelEntrance id="hyperloop">
     * <TunnelExit ids=["hyperloop"]>
     */
    const state = proxy({set: new Set<ReactNode>()})

    const TunnelEntrance = ({children}: {children: ReactNode}) => {

        useEffect(()=>{
            state.set.add(children);
            return ()=> {
                state.set.delete(children)
            }
        },[children])
        
        return <></>
    }

    const TunnelExit = () => {
        const snap = useSnapshot(state)
        
        return <>{snap.set.size > 0 && Array.from(snap.set).map(entry =>{
                        return entry;
                    }
                )}
            </>
      }
 
    return {TunnelEntrance, TunnelExit};
}

export default createTunnel;