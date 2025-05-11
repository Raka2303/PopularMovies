import { useMemo } from 'react';
import { useTheme } from './useTheme';

type FnType = (...args: any[]) => any;

const useStyles = <T extends FnType>(stylesFn: T): ReturnType<T> => {
  const theme = useTheme();
  return useMemo(() => {
    return stylesFn(theme);
  }, [stylesFn, theme]);
};
export { useStyles };
