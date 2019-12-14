import React, { ReactNode } from 'react';
import styles from './calendar-day-button.module.css';

import { ICalendarDayButtonProps } from '../../interfaces/ICalendarDayButtonProps';

export class CalendarDayButton extends React.PureComponent<ICalendarDayButtonProps> {
    private handleClick = () => {
        const { clickHandler, numberOfDay } = this.props;
        const connectedDateToButton = new Date();
        connectedDateToButton.setDate(numberOfDay);

        clickHandler(connectedDateToButton);
    }

    private getClasses(): string {
        if (this.props.isSelected === true) {
            return `${styles.dayButton} ${styles.selected}`;
        }

        return styles.dayButton;
    }

    public render(): ReactNode {
        const { numberOfDay } = this.props;
        const dayButtonClasses = this.getClasses();

        return (
            <div className={dayButtonClasses} onClick={this.handleClick}>
                <span>
                    {numberOfDay}
                </span>
            </div>
        );
    }
}