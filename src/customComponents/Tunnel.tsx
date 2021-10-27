import React, { useEffect, ReactElement} from 'react';
import create from "zustand"
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

    type Store = {store: ReactElement[], add:(el:ReactElement)=>void, remove:(el:ReactElement)=>void}
        const useStore = create<Store>((set, get)=> ({
            store: [],
            add: (el: ReactElement) => set((state)=>{
                return {...state, store: [...state.store, el]}}),
            remove: (el: ReactElement) => set((state)=>{return {...state, store: state.store.filter(e => e.key !== el.key)}})
        }))

    const TunnelEntrance = ({children}: {children: ReactElement}) => {
        const add = useStore(state => state.add)
        const remove = useStore(state => state.remove)
        useEffect(()=>{
            add(children);
            return ()=> {
                remove(children)
            }
        },[children])

        return <></>
    }

    const TunnelExit = () => {
        const state = useStore(state => state.store)
        return <>{state.length > 0 && state.map(entry =>{
                        return entry;
                    }
                )}
            </>
      }
 
    return {TunnelEntrance, TunnelExit};
}

export default createTunnel;