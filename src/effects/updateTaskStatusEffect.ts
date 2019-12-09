import { call, put, takeEvery } from 'redux-saga/effects';
import { IUpdateTaskStatusAction, updateTaskStatusAction } from '../actions/updateTaskStatusAction';

function* updateTaskStatus(action: IUpdateTaskStatusAction) {
    yield call(() => {
        return fetch(`http://localhost:3200/api/tasks/${action.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                isDone: action.isDone
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    });

    yield put(updateTaskStatusAction(action.id, action.isDone));
}

export function* updateTaskStatusAsync() {
    yield takeEvery('REQUEST_UPDATE_TASK_STATUS', updateTaskStatus);
}