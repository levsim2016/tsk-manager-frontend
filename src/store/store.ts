import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';

import { appReducer } from '../reducers/appReducer';
import { fetchTasks } from '../effects/fetchTasksEffect';
import { createTaskAsync } from '../effects/createTaskEffect';
import { updateTaskStatusAsync } from '../effects/updateTaskStatusEffect';
import { deleteTaskAsync } from '../effects/deleteTaskEffect';

const sagaMiddleware = createSagaMiddleware();

const rootEffects = function* () {
    yield all([
        fetchTasks(),
        createTaskAsync(),
        updateTaskStatusAsync(),
        deleteTaskAsync(),
    ])
}

export const appStore = createStore(
    appReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootEffects);
