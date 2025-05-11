import { AnyAction, CombinedState, combineReducers} from 'redux';
import {LoginReducer} from '@popularMoviesMiddleware/redux/login/LoginReducers';
import { PopularMoviesReducer } from './movies/MoviesReducers';

// Combibining all reducers here but we have only one here we can add as many required
export const appReducer = combineReducers({
  LoginReducer: LoginReducer,
  PopularMoviesReducer:PopularMoviesReducer,
});

const rootReducer = (
  state: CombinedState<{ LoginReducer: {}; PopularMoviesReducer: {}; }> | undefined,
  action: AnyAction,
) => {
  // if (action.type === ActionTypes.ON_LOGOUT_SUCCESS) {
  //   return appReducer(undefined, action);
  // }
  return appReducer(state, action);
};

export default rootReducer;
