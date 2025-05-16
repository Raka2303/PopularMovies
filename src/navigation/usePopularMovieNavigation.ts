import { useNavigation } from '@react-navigation/native';
import { ModuleStackNavigation, TRootStackParamList } from './ModuleStackTypes';

const usePopularMoviesNavigation = <T extends keyof TRootStackParamList>() => {
  /*
    Calls the useNavigation hook and casts the return type using ModuleStackNavigation<T>.
    This helps with type safety—TypeScript now knows what parameters are allowed when navigating to another screen.
  */
  const navigation = useNavigation<ModuleStackNavigation<T>>();
  return navigation;
};

export default usePopularMoviesNavigation;
