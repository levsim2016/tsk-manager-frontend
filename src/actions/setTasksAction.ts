import { ITask } from "../interfaces/ITask";

export interface ISetTasksAction {
    type: 'SET_TASKS';
    tasks: ITask[];
}

export const setTasksAction = (tasks: ITask[]): ISetTasksAction => ({
    type: 'SET_TASKS',
    tasks: tasks
})