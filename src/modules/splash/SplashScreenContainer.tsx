import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {TRootStackParamList} from '../../navigation/ModuleStackTypes';
import BaseScreen from '@modules/baseScreen/BaseScreen';
import SplashScreenPresenter from './SplashScreenPresenter';

const SplashScreenContainer: FC<
  NativeStackScreenProps<TRootStackParamList, 'SplashScreenContainer'>
> = ({navigation, route}) => {
console.log(route.params)
  return (
    <BaseScreen showHeader={false}>
      <SplashScreenPresenter onAnimationComplete={() => {}} />
    </BaseScreen>
  );
};

export default SplashScreenContainer;
