import { ITask } from "../interfaces/ITask";

export interface IRequestAddTaskAction {
    type: 'REQUEST_ADD_TASK';
    task: ITask;
}

export const requestAddTaskAction = (newTask: ITask): IRequestAddTaskAction => ({
    type: 'REQUEST_ADD_TASK',
    task: newTask,
})