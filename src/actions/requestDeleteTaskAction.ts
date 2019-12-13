export interface IRequestDeleteTaskAction {
    type: 'REQUEST_DELETE_TASK';
    id: string;
}

export const requestDeleteTaskAction = (
    id: string,
): IRequestDeleteTaskAction => ({
    type: 'REQUEST_DELETE_TASK',
    id: id,
})