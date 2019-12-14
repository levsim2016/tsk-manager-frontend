import React, { ReactNode } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ICalendarContainerProps } from '../../interfaces/ICalendarContainerProps';
import { Calendar } from '../../ui-components';
import { IAppState } from '../../interfaces/IAppState';
import { changeSelectedDateAction } from '../../actions/changeSelectedDateAction';

const mapStateToProps = (state: IAppState) => {
    return {
        currentDate: state.currentDate
    };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeSelectedDate: (newDate: Date) => {
            dispatch(changeSelectedDateAction(newDate));
        }
    };
}

class SubscribedCalendarContainer extends React.PureComponent<ICalendarContainerProps> {
    public render(): ReactNode {
        const { currentDate, changeSelectedDate } = this.props;

        return (
            <Calendar
                selectedDate={currentDate}
                selectDayHandler={changeSelectedDate}
            ></Calendar>
        );
    }
}

export const CalendarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubscribedCalendarContainer);