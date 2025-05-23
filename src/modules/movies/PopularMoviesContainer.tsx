// screens/PopularMoviesContainer.tsx
import React, {FC, useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TRootStackParamList} from '../../navigation/ModuleStackTypes';
import BaseScreen from '@modules/baseScreen/BaseScreen';
import PopularMoviesPresenter from './PopularMoviesPresenter';
import AppConstants from '@constants/AppConstants';
import {useDispatch, useSelector} from 'react-redux';
import {ActionTypes} from '@popularMoviesMiddleware/redux/ActionTypes';
import {onPopularMovieFetch} from '@popularMoviesMiddleware/redux/movies/MoviesActions';
import PopularMoviesShimmerEffect from './components/popularMoviesShimmerEffect/PopularMoviesShimmerEffect';
import {IDropDown} from '@components/dropdownView/types';
import i18n from '../../localization/i18n';
import {onUserLoginSuccess} from '@popularMoviesMiddleware/redux/login/LoginActions';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = NativeStackScreenProps<
  TRootStackParamList,
  'PopularMoviesContainer'
>;

const PopularMoviesContainer: FC<Props> = ({}) => {
  const {popularMovieTitle, languageOptionData} = AppConstants();
  const dispatch = useDispatch();

  const [dropDownData, setDropDownData] =
    useState<IDropDown[]>(languageOptionData);

  const popularMovies = useSelector((state: any) => state.PopularMoviesReducer);
  const loginState = useSelector((state: any) => state.LoginReducer);

  useEffect(() => {
    const updatedDropDownData = dropDownData.map(item => ({
      ...item,
      isSelected: item.key === loginState?.onUserLoginResponse.selectedLanguage,
    }));
    setDropDownData(updatedDropDownData);
    i18n.changeLanguage(loginState?.onUserLoginResponse.selectedLanguage);
    // setTimeout(() => {
    dispatch(
      onPopularMovieFetch({
        pageNo: popularMovies?.popularMovies?.data?.page || 1,
        selectedLanguage: loginState.onUserLoginResponse.selectedLanguage,
        popularMovies,
      }),
    );
    // }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onEndReached = () => {
    if (popularMovies.action === ActionTypes.ON_POPULAR_MOVIE_SUCCESS) {
      dispatch(
        onPopularMovieFetch({pageNo: popularMovies?.page + 1, popularMovies}),
      );
    }
  };

  const onLanguageOptionSelectionHandler = (value: string) => {
    const updatedDropDownData = dropDownData.map(item => ({
      ...item,
      isSelected: item.value === value,
    }));
    i18n.changeLanguage(updatedDropDownData.find(item => item.isSelected)?.key);
    AsyncStorage.setItem(
      'selectedLanguage',
      updatedDropDownData.find(item => item.isSelected)?.key!,
    );
    setDropDownData(updatedDropDownData);
    dispatch(
      onUserLoginSuccess({
        isUserLoggedIn: true,
        isSplashScreenCompleted: 'true',
        selectedLanguage: dropDownData.find(item => item.isSelected)?.key,
      }),
    );
    dispatch(
      onPopularMovieFetch({
        pageNo: popularMovies?.popularMovies?.data?.page || 1,
        selectedLanguage: updatedDropDownData.find(item => item.isSelected)
          ?.languageCode,
        popularMovies,
      }),
    );
  };

  return (
    <BaseScreen
      isScrollEnabled={false}
      showHeader={true}
      title={popularMovieTitle}>
      {popularMovies?.popularMovies ? (
        <PopularMoviesPresenter
          dropDownData={dropDownData}
          onLanguageOptionSelectionHandler={onLanguageOptionSelectionHandler}
          isLoading={popularMovies?.data?.isLoading}
          movies={popularMovies.popularMovies || []}
          onEndReached={onEndReached}
        />
      ) : (
        <PopularMoviesShimmerEffect />
      )}
    </BaseScreen>
  );
};

export default PopularMoviesContainer;
