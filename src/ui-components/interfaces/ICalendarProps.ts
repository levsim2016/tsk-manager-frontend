import { HTMLAttributes } from "react";

export interface ICalendarProps extends HTMLAttributes<HTMLDivElement> {
    month: number;
    selectedDay: number;
}