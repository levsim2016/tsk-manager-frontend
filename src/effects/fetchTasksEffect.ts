import { call, put } from 'redux-saga/effects';
import { requestTasksAction } from '../actions/requestTasksAction';
import { setTasksAction } from '../actions/setTasksAction';

export function* fetchTasks() {
    yield put(requestTasksAction());

    const tasks = yield call(() => {
        return fetch('http://localhost:3200/api/tasks/')
            .then(res => res.json());
    });

    yield put(setTasksAction(tasks));
}