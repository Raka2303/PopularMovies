import { useNavigation } from '@react-navigation/native';
import { ModuleStackNavigation, TRootStackParamList } from './ModuleStackTypes';


const usePopularMoviesNavigation = <T extends keyof TRootStackParamList>() => {
  const navigation = useNavigation<ModuleStackNavigation<T>>();
  return navigation;
};

export default usePopularMoviesNavigation;
