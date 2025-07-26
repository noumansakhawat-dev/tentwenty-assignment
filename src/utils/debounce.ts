export const debounce = <T, F extends (...args: any[]) => T>(fn: F, ms: number): ((...args: Parameters<F>) => Promise<T>) => {
  let timer: NodeJS.Timeout;

  return (...args: Parameters<F>) => {
    clearTimeout(timer);

    return new Promise<T>((resolve) => {
      timer = setTimeout(() => {
        resolve(fn.apply(this, args));
      }, ms);
    });
  };
};
