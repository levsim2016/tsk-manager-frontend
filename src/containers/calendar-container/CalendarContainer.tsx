import React, { ReactNode } from 'react';
import { connect } from 'react-redux';

import { ICalendarContainerProps } from '../../interfaces/ICalendarContainerProps';
import { Calendar } from '../../ui-components';
import { IAppState } from '../../interfaces/IAppState';

const mapStateToProps = (state: IAppState) => {
    return {
        currentDate: state.currentDate
    };
}

class SubscribedCalendarContainer extends React.PureComponent<ICalendarContainerProps> {
    public render(): ReactNode {
        const { currentDate } = this.props;

        return (
            <Calendar selectedDate={currentDate}></Calendar>
        );
    }
}

export const CalendarContainer = connect(
    mapStateToProps
)(SubscribedCalendarContainer);