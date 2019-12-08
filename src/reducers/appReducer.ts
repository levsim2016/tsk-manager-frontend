import { IAppState } from "../interfaces/IAppState";
import { AnyAction } from "redux";
import { IAddTaskAction } from "../actions/addTaskAction";
import { ISetTasksAction } from "../actions/setTasksAction";

const initialState: IAppState = {
    tasks: [],
    selectedDay: new Date().getDate(),
};

type ActionUnion = IAddTaskAction | ISetTasksAction;

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
        default:
            return state;
    }
}