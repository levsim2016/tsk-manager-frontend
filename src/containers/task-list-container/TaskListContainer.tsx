import React, { ReactNode } from 'react';
import { connect } from 'react-redux';

import { TaskList } from '../../components/task-list/TaskList';
import { IAppState } from '../../interfaces/IAppState';
import { ITaskListContainerProps } from '../../interfaces/ITaskListContainerProps';
import { getFilteredTasksByDay } from '../../selectors/getFilteredTasksByDay';

const mapStateToProps = (state: IAppState) => {
    return {
        tasks: getFilteredTasksByDay(state.tasks, state.currentDate),
    };
};

class SubscribedTaskList extends React.PureComponent<ITaskListContainerProps> {
    public render(): ReactNode {
        const { tasks } = this.props;

        return (
            <TaskList tasks={tasks}></TaskList>
        );
    }
}

export const TaskListContainer = connect(
    mapStateToProps
)(SubscribedTaskList);