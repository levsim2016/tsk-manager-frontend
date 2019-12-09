export interface IRequestUpdateTaskStatusAction {
    type: 'REQUEST_UPDATE_TASK_STATUS';
    id: string;
    isDone: boolean;
}

export const requestUpdateTaskStatusAction = (
    id: string,
    newStatus: boolean
): IRequestUpdateTaskStatusAction => ({
    type: 'REQUEST_UPDATE_TASK_STATUS',
    id: id,
    isDone: newStatus,
})