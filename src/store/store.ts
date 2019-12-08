import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';

import { appReducer } from '../reducers/appReducer';
import { fetchTasks } from '../effects/fetchTasksEffect';
import { createTaskAsync } from '../effects/createTaskEffect';

const sagaMiddleware = createSagaMiddleware();

const rootEffects = function* () {
    yield all([
        fetchTasks(),
        createTaskAsync(),
    ])
}

export const appStore = createStore(
    appReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootEffects);
