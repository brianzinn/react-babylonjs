export function memo(func: Function) {
  const cache: any = {};

  return function(...args: any[]) {
    const key = arguments.length + args.join();
    if (key in cache) {
      return cache[key];
    }
    // @ts-ignore
    return (cache[key] = func.apply(this as any, arguments));
  };
}

