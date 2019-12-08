import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import { appReducer } from '../reducers/appReducer';

const sagaMiddleware = createSagaMiddleware();

export const appStore = createStore(
    appReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);