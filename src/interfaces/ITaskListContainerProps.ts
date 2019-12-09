import { ITask } from "./ITask";

export interface ITaskListContainerProps {
    tasks: ITask[];
    updateTaskStatus: (id: string, newStatus: boolean) => void;
}