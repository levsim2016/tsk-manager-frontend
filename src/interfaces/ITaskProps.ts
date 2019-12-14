import { ITask } from "./ITask";

export interface ITaskProps extends ITask {
    selectHandler: (id: string, isSelected: boolean) => void;
    deleteHandler: (id: string) => void;
}