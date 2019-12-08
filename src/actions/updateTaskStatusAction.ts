export interface IUpdateTaskStatusAction {
    type: 'UPDATE_TASK_STATUS';
    id: string;
    isDone: boolean;
}

export const updateTaskStatusAction = (
    id: string,
    isDone: boolean
): IUpdateTaskStatusAction => ({
    type: 'UPDATE_TASK_STATUS',
    id: id,
    isDone: isDone,
})