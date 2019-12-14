import { HTMLAttributes } from "react";

export interface ICalendarProps extends HTMLAttributes<HTMLDivElement> {
    selectedDate: Date;
}