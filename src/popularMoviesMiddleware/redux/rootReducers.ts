import { AnyAction, CombinedState, combineReducers} from 'redux';
import {ILoginState, LoginReducer} from '@popularMoviesMiddleware/redux/login/LoginReducers';
import { IPopularMoviesState, PopularMoviesReducer } from './movies/MoviesReducers';

interface IRootState {
  LoginReducer: ILoginState;
  PopularMoviesReducer: IPopularMoviesState;
}

// Combibining all reducers here but we have only one here we can add as many required
export const appReducer = combineReducers({
  LoginReducer: LoginReducer,
  PopularMoviesReducer:PopularMoviesReducer,
});

const rootReducer = (
  state: CombinedState<IRootState> | undefined,
  action: AnyAction,
) => {
  // if (action.type === ActionTypes.ON_LOGOUT_SUCCESS) {
  //   return appReducer(undefined, action);
  // }
  return appReducer(state, action);
};

export default rootReducer;
