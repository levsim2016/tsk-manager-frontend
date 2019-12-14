import { ITask } from "../interfaces/ITask";

export function getFilteredTasksByDay(
    tasks: ITask[],
    date: Date | string
): ITask[] {
    return tasks.filter(task => {
        return new Date(task.date).getDate() === new Date(date).getDate();
    });
}