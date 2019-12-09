import { call, put, takeEvery } from 'redux-saga/effects';
import { addTaskAction } from '../actions/addTaskAction';
import { IRequestAddTaskAction } from '../actions/requestAddTaskAction';

function* createTask(action: IRequestAddTaskAction) {
    yield call(() => {
        return fetch('http://localhost:3200/api/tasks/', {
            method: 'POST',
            body: JSON.stringify(action.task),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    });

    yield put(addTaskAction(action.task));
}

export function* createTaskAsync() {
    yield takeEvery('REQUEST_ADD_TASK', createTask);
}