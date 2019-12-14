import { ITask } from "./ITask";

export interface IAppState {
    tasks: ITask[];
    currentDate: Date;
}