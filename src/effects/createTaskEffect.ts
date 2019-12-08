import { call, put, takeEvery } from 'redux-saga/effects';
import { ITask } from '../interfaces/ITask';
import { addTaskAction, IAddTaskAction } from '../actions/addTaskAction';

function* createTask(action: IAddTaskAction) {
    yield call(() => {
        return fetch('http://localhost:3200/api/tasks/', {
            method: 'POST',
            body: JSON.stringify(action.task)
        });
    });

    yield put(addTaskAction(action.task));
}

export function* createTaskAsync() {
    yield takeEvery('ADD_TASK', createTask);
}