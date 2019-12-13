import { call, put, takeEvery } from 'redux-saga/effects';
import { IRequestDeleteTaskAction } from '../actions/requestDeleteTaskAction';
import { deleteTaskAction } from '../actions/deleteTaskAction';

function* deleteTask(action: IRequestDeleteTaskAction) {
    yield call(() => {
        return fetch(`http://localhost:3200/api/tasks/${action.id}`, {
            method: 'DELETE',
        });
    });

    yield put(deleteTaskAction(action.id));
}

export function* deleteTaskAsync() {
    yield takeEvery('REQUEST_DELETE_TASK', deleteTask);
}