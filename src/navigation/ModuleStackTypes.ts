// navigation/ModuleStackTypes.ts
// This is used to type the navigation prop for stack navigators (i.e., when navigating between screens using stack-based transitions).
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RouteProp } from '@react-navigation/native';

// 1. Define the param list
// TRootStackParamList is a type alias that maps each screen in your stack navigator to the parameters it accepts.
export type TRootStackParamList = {
  LoginFlow:undefined;
  DashboardFlow:undefined;
  SplashScreenContainer:{onAnimationComplete:()=>void};
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
