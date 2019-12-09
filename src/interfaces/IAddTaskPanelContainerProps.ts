import { ITask } from "./ITask";

export interface IAddTaskPanelContainerProps {
    addTask: (newTask: ITask) => void;
}