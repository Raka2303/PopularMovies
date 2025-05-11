import {ActionTypes} from '@popularMoviesMiddleware/redux/ActionTypes';

export const onPopularMovieFetch = (payload: any) => ({
  type: ActionTypes.ON_POPULAR_MOVIE,
  payload,
});

export const onPopularMovieFetchSuccess = (value: any) => ({
  type: ActionTypes.ON_POPULAR_MOVIE_SUCCESS,
  value,
});

export const onPopularMovieFetchFailure = (error: any) => ({
  type: ActionTypes.ON_POPULAR_MOVIE_FAILURE,
  error,
});
