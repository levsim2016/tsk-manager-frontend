import React, { ReactNode } from 'react';
import { connect } from 'react-redux';

import { TaskList } from '../../components/task-list/TaskList';
import { IAppState } from '../../interfaces/IAppState';
import { ITaskListContainerProps } from '../../interfaces/ITaskListContainerProps';
import { Dispatch } from 'redux';
import { requestUpdateTaskStatusAction } from '../../actions/requestUpdateTaskStatusAction';

const mapStateToProps = (state: IAppState) => {
    return {
        tasks: state.tasks,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateTaskStatus: (id: string, newStatus: boolean) => {
            dispatch(requestUpdateTaskStatusAction(id, newStatus));
        },
    };
}

class SubscribedTaskList extends React.PureComponent<ITaskListContainerProps> {
    public render(): ReactNode {
        const { tasks, updateTaskStatus } = this.props;

        return (
            <TaskList
                tasks={tasks}
                selectTaskHandler={updateTaskStatus}
            ></TaskList>
        );
    }
}

export const TaskListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubscribedTaskList);