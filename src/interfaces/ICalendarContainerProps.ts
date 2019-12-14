export interface ICalendarContainerProps {
    currentDate: Date;
    changeSelectedDate: (newDate: Date) => void;
}