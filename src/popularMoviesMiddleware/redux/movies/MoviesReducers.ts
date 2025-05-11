import {ActionTypes} from '@popularMoviesMiddleware/redux/ActionTypes';

const initialState = {
  onUserLoginResponse: {},
  popularMovies: {},
};

export const PopularMoviesReducer = (
  state = initialState.popularMovies,
  action: any,
) => {
  switch (action.type) {
    case ActionTypes.ON_POPULAR_MOVIE:
      return {
        ...state,
        Payload: action.payload,
        action: action.type,
        popularMovies: {},
        Error: null,
        isLoading: true,
      };
    case ActionTypes.ON_POPULAR_MOVIE_SUCCESS: {
      const popularMoviesUpdated = action?.value?.data?.results;
      return {
        ...state,
        Payload: {},
        action: action.type,
        page: action?.value?.data?.page,
        popularMovies: popularMoviesUpdated,
        Error: null,
        isLoading: false,
      };
    }
    case ActionTypes.ON_POPULAR_MOVIE_FAILURE:
      return {
        ...state,
        Payload: action.payload,
        action: action.type,
        popularMovies: {},
        Error: action.error,
        isLoading: false,
      };

    default:
      return {
        ...state,
      };
  }
};
