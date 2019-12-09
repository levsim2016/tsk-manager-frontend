import { ITask } from "./ITask";

export interface ITaskListProps {
    tasks: ITask[];
    selectTaskHandler: (id: string, status: boolean) => void;
}