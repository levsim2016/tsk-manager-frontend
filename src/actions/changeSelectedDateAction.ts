export interface IChangeSelectedDateAction {
    type: 'CHANGE_SELECTED_DATE';
    selectedDate: Date;
}

export const changeSelectedDateAction = (newDate: Date): IChangeSelectedDateAction => ({
    type: 'CHANGE_SELECTED_DATE',
    selectedDate: newDate,
})