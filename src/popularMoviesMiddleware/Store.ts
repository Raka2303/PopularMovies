import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {appReducer} from '@popularMoviesMiddleware/redux/rootReducers';
import rootSaga from '@popularMoviesMiddleware/redux/rootSaga';

// Initializes the saga middleware instance that will later be connected to the Redux store.
const sagaMiddleware = createSagaMiddleware();

// This applies the saga middleware to the Redux store so that it can intercept actions and trigger saga side effects.
const middleware = applyMiddleware(sagaMiddleware);

/*
    createStore sets up the Redux store using:
    appReducer: to manage state updates
    compose(middleware): to apply middleware (in this case, sagaMiddleware)
*/
const store = createStore(
    appReducer, compose(middleware),
);
// This starts the root saga which in turn starts all your saga watchers and workers.
sagaMiddleware.run(rootSaga);

export default store;
