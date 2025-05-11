import {ActionTypes} from '@popularMoviesMiddleware/redux/ActionTypes';

// ON USER LOGIN OR REGISTRATION
export const onUserLogin = (payload: any) => ({
  type: ActionTypes.ON_USER_LOGIN,
  payload,
});

export const onUserLoginSuccess = (value: any) => ({
  type: ActionTypes.ON_USER_LOGIN_SUCCESS,
  value,
});

export const onUserLoginFailure = (error: any) => ({
  type: ActionTypes.ON_USER_LOGIN_FAILURE,
  error,
});
