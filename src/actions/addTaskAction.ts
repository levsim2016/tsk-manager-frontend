import { ITask } from "../interfaces/ITask";

export interface IAddTaskAction {
    type: 'ADD_TASK';
    task: ITask;
}

export const addTaskAction = (task: ITask): IAddTaskAction => ({
    type: 'ADD_TASK',
    task: task
})