import { IAppState } from "../interfaces/IAppState";
import { AnyAction } from "redux";
import { IAddTaskAction } from "../actions/addTaskAction";
import { ISetTasksAction } from "../actions/setTasksAction";
import { IUpdateTaskStatusAction } from "../actions/updateTaskStatusAction";
import { IDeleteTaskAction } from "../actions/deleteTaskAction";
import { IChangeSelectedDateAction } from "../actions/changeSelectedDateAction";

const initialState: IAppState = {
    tasks: [],
    currentDate: new Date(),
};

type ActionUnion =
    | IAddTaskAction
    | ISetTasksAction
    | IUpdateTaskStatusAction
    | IDeleteTaskAction
    | IChangeSelectedDateAction;

export const appReducer = (
    state: IAppState = initialState,
    action: ActionUnion | AnyAction
): IAppState => {
    const appAction = action as ActionUnion;

    switch (appAction.type) {
        case 'SET_TASKS':
            return {
                ...state,
                tasks: appAction.tasks
            }
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        ...appAction.task
                    }
                ]
            }
        case 'UPDATE_TASK_STATUS':
            const taskToUpdateIndex = state.tasks.findIndex(task => {
                return task.id === appAction.id;
            });
            const updatedTasks = [...state.tasks];
            updatedTasks[taskToUpdateIndex] = {
                ...updatedTasks[taskToUpdateIndex],
                isDone: appAction.isDone,
            }

            return {
                ...state,
                tasks: updatedTasks
            }
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== appAction.id)
            }

        case 'CHANGE_SELECTED_DATE':
            return {
                ...state,
                currentDate: appAction.selectedDate,
            }

        default:
            return state;
    }
}