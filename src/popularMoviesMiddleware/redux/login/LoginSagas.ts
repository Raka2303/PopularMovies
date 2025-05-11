import {call, put, takeLatest} from 'redux-saga/effects';
import {POPULAR_MOVIE_LIST_API} from '@popularMoviesMiddleware/constants/ApiConstants';
import * as API from '@popularMoviesMiddleware/utils/AppAjax';
import { ActionTypes } from '@popularMoviesMiddleware/redux/ActionTypes';
import { onUserLoginFailure, onUserLoginSuccess } from '@popularMoviesMiddleware/redux/login/LoginActions';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions 
function* onLogin(action: { payload: { pageNo: any; }; }) {
  const url = `${POPULAR_MOVIE_LIST_API}${action.payload.pageNo}`;
  try {
    const res = yield call(API.get, url);
    yield put(onUserLoginSuccess(res));
  } catch (e) {
    yield put(onUserLoginFailure(e));
  }
}

function* LoginSagas() {
  yield takeLatest(ActionTypes.ON_USER_LOGIN, onLogin);
}

export default LoginSagas;
