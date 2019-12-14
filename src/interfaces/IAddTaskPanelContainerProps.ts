import { ITask } from "./ITask";

export interface IAddTaskPanelContainerProps {
    selectedDate: Date;
    addTask: (newTask: ITask) => void;
}