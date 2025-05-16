import {ActionTypes} from '@popularMoviesMiddleware/redux/ActionTypes';
export interface IPopularMoviesState {
  payload: any;
  popularMovies: any;
  error: any;
  isLoading: boolean;
  action?: string;
}
const initialState:IPopularMoviesState = {
  payload: null,
  popularMovies: null,
  error: null,
  isLoading: false,
  action: '',
};

export const PopularMoviesReducer = (
  state = initialState,
  action: any,
) => {
  switch (action.type) {
    case ActionTypes.ON_POPULAR_MOVIE:
      return {
        ...state,
        payload: action.payload,
        action: action.type,
        popularMovies: {},
        error: null,
        isLoading: true,
      };
    case ActionTypes.ON_POPULAR_MOVIE_SUCCESS: {
      const popularMoviesUpdated = action?.value?.data?.results;
      return {
        ...state,
        payload: {},
        action: action.type,
        page: action?.value?.data?.page,
        popularMovies: popularMoviesUpdated,
        error: null,
        isLoading: false,
      };
    }
    case ActionTypes.ON_POPULAR_MOVIE_FAILURE:
      return {
        ...state,
        payload: action.payload,
        action: action.type,
        popularMovies: {},
        error: action.error,
        isLoading: false,
      };

    default:
      return {
        ...state,
      };
  }
};
