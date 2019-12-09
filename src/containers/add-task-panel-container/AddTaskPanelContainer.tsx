import React, { ReactNode } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { AddTaskPanel } from '../../components/add-task-panel/AddTaskPanel';
import { IAddTaskPanelContainerProps } from '../../interfaces/IAddTaskPanelContainerProps';
import { ITask } from '../../interfaces/ITask';
import { Dispatch } from 'redux';
import { IAddTaskPanelContainerState } from '../../interfaces/IAddTaskPanelContainerState';
import { requestAddTaskAction } from '../../actions/requestAddTaskAction';

const autobind = require('autobind');

const mapDispatchToProps = (dispatch: Dispatch): IAddTaskPanelContainerProps => {
    return {
        addTask: (newTask: ITask) => dispatch(requestAddTaskAction(newTask)),
    }
};

class SubscribedAddTaskPanel extends React.Component<
    IAddTaskPanelContainerProps, IAddTaskPanelContainerState
> {
    constructor(props: IAddTaskPanelContainerProps) {
        super(props);
        this.state = {
            enteredSummary: '',
        }
    }

    @autobind
    private handleNewEnteredSummary(newSummary: string): void {
        this.setState({
            enteredSummary: newSummary,
        });
    }

    @autobind
    private createNewTask(): void {
        this.props.addTask({
            id: uuid.v4(),
            summary: this.state.enteredSummary,
            isDone: false,
            date: new Date(),
        });

        this.setState({
            enteredSummary: '',
        });
    }

    public render(): ReactNode {
        return (
            <AddTaskPanel
                enteredSummary={this.state.enteredSummary}
                summaryInputHandler={this.handleNewEnteredSummary}
                addTaskButtonHandler={this.createNewTask}
            ></AddTaskPanel>
        );
    }
}

export const AddTaskPanelContainer = connect(null, mapDispatchToProps)(SubscribedAddTaskPanel);