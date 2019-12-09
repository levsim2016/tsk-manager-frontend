import React, { ReactNode, FormEvent } from 'react';
import styles from './add-task-panel.module.css';

import { Card, Button, InputField } from '../../ui-components';
import { IAddTaskPanelProps } from '../../interfaces/IAddTaskPanelProps';

const autobind = require('autobind');

export class AddTaskPanel extends React.PureComponent<IAddTaskPanelProps> {
    @autobind
    private handleSummaryInput(event: FormEvent<HTMLInputElement>): void {
        this.props.summaryInputHandler(event.currentTarget.value);
    }

    @autobind
    private handleAddTask(): void {
        this.props.addTaskButtonHandler();
    }

    public render(): ReactNode {
        return (
            <Card className={styles.wrapper}>
                <InputField
                    placeholder="New task..."
                    value={this.props.enteredSummary}
                    onInput={this.handleSummaryInput}
                    onChange={this.handleSummaryInput}
                ></InputField>
                <Button 
                    label="Add" 
                    type="primary"
                    clickHandler={this.handleAddTask}
                ></Button>
            </Card>
        );
    }
}