import { ITask } from "../interfaces/ITask";

export const mockedTasks: ITask[] = [
    {
        id: "1",
        summary: "let me go",
        isDone: false,
        date: new Date()
    },
    {
        id: "2",
        summary: "leds",
        isDone: true,
        date: new Date()
    }
]