import {ActionTypes} from '@popularMoviesMiddleware/redux/ActionTypes';

interface ILoginState {
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
};

export const LoginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.ON_USER_LOGIN:
      return {
        ...state,
        Payload: action.payload,
        action: action.type,
        onUserLoginResponse: {},
        Error: null,
        isLoading: true,
      };
    case ActionTypes.ON_USER_LOGIN_SUCCESS:
      return {
        ...state,
        Payload: {},
        action: action.type,
        onUserLoginResponse: action.value,
        Error: null,
        isLoading: false,
      };
    case ActionTypes.ON_USER_LOGIN_FAILURE:
      return {
        ...state,
        Payload: action.payload,
        action: action.type,
        onUserLoginResponse: {},
        Error: action.error,
        isLoading: false,
      };

    default:
      return {
        ...state,
      };
  }
};
