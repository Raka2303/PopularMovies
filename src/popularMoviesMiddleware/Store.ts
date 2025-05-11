import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {appReducer} from '@popularMoviesMiddleware/redux/rootReducers';
import rootSaga from '@popularMoviesMiddleware/redux/rootSaga';

console.log('createSagaMiddleware:', createSagaMiddleware);

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const store = createStore(
    appReducer, compose(middleware),
);
sagaMiddleware.run(rootSaga);

export default store;
