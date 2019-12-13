import React, { ReactNode } from 'react';
import { connect } from 'react-redux';

import { TaskList } from '../../components/task-list/TaskList';
import { IAppState } from '../../interfaces/IAppState';
import { ITaskListContainerProps } from '../../interfaces/ITaskListContainerProps';

const mapStateToProps = (state: IAppState) => {
    return {
        tasks: state.tasks,
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