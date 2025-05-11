// navigation/ModuleStackTypes.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RouteProp } from '@react-navigation/native';

// 1. Define the param list
export type TRootStackParamList = {
  SplashScreenContainer:undefined;
  LoginContainer: undefined; // No params
  PopularMoviesContainer: { props: string }; // Accepts a `props` string param
};

// 2. Navigation and Route types
export type ModuleStackNavigation<T extends keyof TRootStackParamList> = NativeStackNavigationProp<
TRootStackParamList,
  T
>;

// export type ModuleStackRoute<T extends keyof TRootStackParamList> = RouteProp<
// TRootStackParamList,
//   T
// >;
