import {ActionTypes} from '@popularMoviesMiddleware/redux/ActionTypes';

export interface ILoginState {
  payload: any;
  onUserLoginResponse: any;
  error: any;
  isLoading: boolean;
  action?: string;
}

const initialState: ILoginState = {
  payload: null,
  onUserLoginResponse: null,
  error: null,
  isLoading: false,
  action:'',
};

export const LoginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.ON_USER_LOGIN:
      return {
        ...state,
        payload: action.payload,
        action: action.type,
        onUserLoginResponse: {},
        error: null,
        isLoading: true,
      };
    case ActionTypes.ON_USER_LOGIN_SUCCESS:
      return {
        ...state,
        payload: {},
        action: action.type,
        onUserLoginResponse: action.value,
        error: null,
        isLoading: false,
      };
    case ActionTypes.ON_USER_LOGIN_FAILURE:
      return {
        ...state,
        payload: action.payload,
        action: action.type,
        onUserLoginResponse: {},
        error: action.error,
        isLoading: false,
      };

    default:
      return {
        ...state,
      };
  }
};
