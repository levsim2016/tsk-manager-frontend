import { IAppState } from "../interfaces/IAppState";
import { AnyAction } from "redux";

const initialState: IAppState = {
    tasks: [],
    selectedDay: new Date().getDate(),
};

type ActionUnion = any;

export const appReducer = (
    state: IAppState = initialState,
    action: ActionUnion | AnyAction
): IAppState => {
    const appAction = action as ActionUnion;

    switch (appAction.type) {
        default:
            return state;
    }
}