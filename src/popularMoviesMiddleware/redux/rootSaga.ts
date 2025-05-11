// library imports
import {all} from 'redux-saga/effects';

// login sagas
import LoginSagas from '@popularMoviesMiddleware/redux/login/LoginSagas';
import MoviesSaga from './movies/MoviesSagas';

// root of all the sagas of the app - run multiple side effects in parallel
//  || similar to promise.all()
function* rootSaga() {
  yield all([LoginSagas(), MoviesSaga()]);
}

// exports
export default rootSaga;
