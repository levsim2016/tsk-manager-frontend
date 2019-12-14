import React, { ReactNode } from 'react';
import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { requestUpdateTaskStatusAction } from '../../actions/requestUpdateTaskStatusAction';
import { requestDeleteTaskAction } from '../../actions/requestDeleteTaskAction';
import { Task } from '../../components/task/Task';
import { ITaskContainerProps } from '../../interfaces/ITaskContainerProps';

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        deleteTask: (id: string) => {
            dispatch(requestDeleteTaskAction(id))
        },
        updateStatus: (id: string, newStatus: boolean) => {
            dispatch(requestUpdateTaskStatusAction(id, newStatus));
        },
    };
}

class SubscribedTaskContainer extends React.PureComponent<ITaskContainerProps> {
    public render(): ReactNode {
        const {
            data,
            updateStatus,
            deleteTask
        } = this.props;

        return (
            <Task
                id={data.id}
                date={data.date}
                summary={data.summary}
                isDone={data.isDone}
                selectHandler={updateStatus}
                deleteHandler={deleteTask}
            ></Task>
        );
    }
}

export const TaskContainer = connect(
    null,
    mapDispatchToProps
)(SubscribedTaskContainer);