import React, { ReactNode } from 'react';
import styles from './calendar.module.css';

import { Card } from '../card/Card';
import { ICalendarProps } from '../../interfaces/ICalendarProps';
import { CalendarDayButton } from '../calendar-day-button/CalendarDayButton';

export class Calendar extends React.PureComponent<ICalendarProps> {
    private renderDateButtons(): ReactNode {
        const { selectedDate } = this.props;

        const currentYear = new Date().getFullYear();
        const month = selectedDate.getMonth();

        const timestampOfMonth = new Date(currentYear, month, 1).getTime();
        const timestampOfNextMonth = new Date(currentYear, month + 1, 0).getTime();
        const differenceInMs = timestampOfNextMonth - timestampOfMonth;

        const numberOfDays = new Date(differenceInMs).getDate();
        const selectedDay = selectedDate.getDate();

        return new Array(numberOfDays)
            .fill(0)
            .map((value, index) => {
                const day = index + 1;
                return (
                    <CalendarDayButton
                        numberOfDay={day}
                        isSelected={selectedDay === day}
                        key={day}
                    ></CalendarDayButton>
                );
            });
    }

    private getMonthName(): string {
        const { selectedDate } = this.props;
        const month = selectedDate.getMonth();

        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();

        if (month < 1 || month > 12) {
            return currentDate.toLocaleString('en', { month: 'long' });
        }

        return new Date(currentYear, month - 1)
            .toLocaleString('en', { month: 'long' });
    }

    private getClasses(): string {
        if (this.props.className === undefined) {
            return styles.calendarLayout;
        }

        return `${styles.calendarLayout} ${this.props.className}`;
    }

    public render(): ReactNode {
        const calendarClasses = this.getClasses();
        const monthName = this.getMonthName();
        const renderedDayButtons = this.renderDateButtons();

        return (
            <Card className={calendarClasses}>
                <span className={styles.monthLabel}>
                    {monthName}
                </span>
                <div className={styles.dayButtonsContainer}>
                    {renderedDayButtons}
                </div>
            </Card>
        );
    }
}