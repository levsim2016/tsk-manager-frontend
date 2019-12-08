import { call, put, takeEvery } from 'redux-saga/effects';
import { IUpdateTaskStatusAction, updateTaskStatusAction } from '../actions/updateTaskStatusAction';

function* updateTaskStatus(action: IUpdateTaskStatusAction) {
    yield call(() => {
        return fetch('http://localhost:3200/api/tasks/', {
            method: 'PUT',
            body: JSON.stringify(action.isDone)
        });
    });

    yield put(updateTaskStatusAction(action.id, action.isDone));
}

export function* updateTaskStatusAsync() {
    yield takeEvery('UPDATE_TASK_STATUS', updateTaskStatus);
}