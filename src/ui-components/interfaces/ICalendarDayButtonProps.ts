export interface ICalendarDayButtonProps {
    numberOfDay: number;
    isSelected?: boolean;
    clickHandler: (date: Date) => void;
}