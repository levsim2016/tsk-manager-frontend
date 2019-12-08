export interface IRequestTasksAction {
    type: 'REQUEST_TASKS';
}

export const requestTasksAction = (): IRequestTasksAction => ({
    type: 'REQUEST_TASKS',
})