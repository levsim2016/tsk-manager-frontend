export interface IDeleteTaskAction {
    type: 'DELETE_TASK';
    id: string;
}

export const deleteTaskAction = (id: string): IDeleteTaskAction => ({
    type: 'DELETE_TASK',
    id: id,
})