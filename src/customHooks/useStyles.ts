import { useMemo } from 'react';
// This imports a custom hook named useTheme from a local file.
// useTheme likely returns a theme object
import { useTheme } from './useTheme';

/*This defines a TypeScript type alias named FnType.
It represents any function that takes any number of arguments of any type and returns any type of value.
It's a generic representation of a function.*/
type FnType = (...args: any[]) => any;

const useStyles = <T extends FnType>(stylesFn: T): ReturnType<T> => {
  const theme = useTheme();
  return useMemo(() => {
    return stylesFn(theme);
  }, [stylesFn, theme]);
};
export { useStyles };
