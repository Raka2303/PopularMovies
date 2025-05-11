// screens/PopularMoviesContainer.tsx
import React, {FC, useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TRootStackParamList} from '../../navigation/ModuleStackTypes';
import BaseScreen from '@modules/baseScreen/BaseScreen';
import PopularMoviesPresenter from './PopularMoviesPresenter';
import AppConstants from '@constants/AppConstants';
import {useDispatch, useSelector} from 'react-redux';
import {ActionTypes} from '@popularMoviesMiddleware/redux/ActionTypes';
import {onPopularMovieFetch} from '@popularMoviesMiddleware/redux/movies/MoviesActions';

type Props = NativeStackScreenProps<
  TRootStackParamList,
  'PopularMoviesContainer'
>;

const PopularMoviesContainer: FC<Props> = ({}) => {
  const {popularMovieTitle} = AppConstants();
  const dispatch = useDispatch();

  const popularMovies = useSelector((state: any) => state.PopularMoviesReducer);

  useEffect(() => {
    dispatch(
      onPopularMovieFetch({
        pageNo: popularMovies?.popularMovies?.data?.page || 1,
        popularMovies,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onEndReached = () => {
    if (popularMovies.action === ActionTypes.ON_POPULAR_MOVIE_SUCCESS) {
      dispatch(
        onPopularMovieFetch({pageNo: popularMovies?.page + 1, popularMovies}),
      );
    }
  };

  return (
    <BaseScreen
      isScrollEnabled={false}
      showHeader={true}
      title={popularMovieTitle}>
      <PopularMoviesPresenter
        isLoading={popularMovies?.data?.isLoading}
        movies={popularMovies.popularMovies || []}
        onEndReached={onEndReached}
      />
    </BaseScreen>
  );
};

export default PopularMoviesContainer;
