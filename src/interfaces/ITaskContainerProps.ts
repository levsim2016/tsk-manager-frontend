import { ITask } from "./ITask";
import { ITaskProps } from "./ITaskProps";

export interface ITaskContainerProps {
    data: ITask;
    updateStatus: ITaskProps['selectHandler'];
    deleteTask: ITaskProps['deleteHandler'];
}