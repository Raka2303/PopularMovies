import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {TRootStackParamList} from '../../navigation/ModuleStackTypes';
import BaseScreen from '@modules/baseScreen/BaseScreen';
import SplashScreenPresenter from './SplashScreenPresenter';

const SplashScreenContainer: FC<
  NativeStackScreenProps<TRootStackParamList, 'SplashScreenContainer'>
> = ({}) => {

  return (
    <BaseScreen showHeader={false}>
      <SplashScreenPresenter />
    </BaseScreen>
  );
};

export default SplashScreenContainer;
