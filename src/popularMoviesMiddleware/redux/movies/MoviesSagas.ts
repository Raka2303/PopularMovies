import {call, put, takeLatest} from 'redux-saga/effects';
import {POPULAR_MOVIE_LIST_API} from '@popularMoviesMiddleware/constants/ApiConstants';
import * as API from '@popularMoviesMiddleware/utils/AppAjax';
import {ActionTypes} from '@popularMoviesMiddleware/redux/ActionTypes';
import {
  onPopularMovieFetchFailure,
  onPopularMovieFetchSuccess,
} from './MoviesActions';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* onPopularMoviesFetch(action: {
  payload: {pageNo: number; selectedLanguage:string; popularMovies: any};
}) {
  const params: Record<string, string> = {
    page: action.payload.pageNo.toString(),
    language: action.payload.selectedLanguage,
  };
  const queryString = new URLSearchParams(params).toString();
  const url = `${POPULAR_MOVIE_LIST_API}${queryString}`;
  try {
    const res = yield call(API.get, url);
    if (action.payload.pageNo > 1) {
        res.data.results = [...action.payload.popularMovies?.popularMovies, ...res.data.results];
    }
    console.log(res);
    
    yield put(onPopularMovieFetchSuccess(res));
  } catch (e) {
    yield put(onPopularMovieFetchFailure(e));
  }
}

function* MoviesSaga() {
  yield takeLatest(ActionTypes.ON_POPULAR_MOVIE, onPopularMoviesFetch);
}

export default MoviesSaga;
