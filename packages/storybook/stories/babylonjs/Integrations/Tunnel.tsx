import React, { Fragment, ReactElement, useEffect } from "react";
import create from "zustand";

type Store = {
  store: { [key: string]: ReactElement };
  add: (key: string, el: ReactElement) => void;
  remove: (key: string) => void;
};

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
  const useStore = create<Store>((set, get) => ({
    store: {},
    add: (key, el) =>
      set((state) => {
        return { ...state, store: { ...state.store, [key]: el } };
      }),
    remove: (key) =>
      set((state) => {
        if (key in state.store) {
          delete state.store[key];
        }
        return { ...state, store: { ...state.store } };
      }),
  }));

  /**
   * Tunnel Entrance
   * @param uid a unique identifier - similar to key. if same uid exists in app, only one tunnel entrance will end in tunnel exit
   * @returns nothing
   */
  const TunnelEntrance = ({
    uid,
    children,
  }: {
    uid: string;
    children: ReactElement;
  }) => {
    const add = useStore((state) => state.add);
    const remove = useStore((state) => state.remove);
    useEffect(() => {
      add(uid, children);
      return () => {
        remove(uid);
      };
    }, [children]);

    return <></>;
  };

  /**
   * Tunnel Exit
   * @param uids optionally add uids of tunnel entrances to only show components of these entrances
   * @returns Components of Tunnel Entrance
   */
  const TunnelExit = ({ uids }: { uids?: string[] }) => {
    const state = useStore((state) => state.store);

    return (
      <>
        {Object.keys(state)
          .filter((key) => (uids ? uids.includes(key) : true))
          .map((key) => {
            return <Fragment key={key}>{state[key]}</Fragment>;
          })}
      </>
    );
  };

  return { TunnelEntrance, TunnelExit };
};

export default createTunnel;
