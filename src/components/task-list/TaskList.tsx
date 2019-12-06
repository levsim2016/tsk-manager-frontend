import React, { ReactNode } from 'react';
import styles from './task-list.module.css';

import { Card, Checkbox } from '../../ui-components';
import { ITaskListProps } from '../../interfaces/ITaskListProps';

export class TaskList extends React.PureComponent<ITaskListProps> {
    public render(): ReactNode {
        const { tasks } = this.props;

        return (
            <Card className={styles.list}>
                {tasks.map(task => {
                    return (
                        <Checkbox
                            key={task.id}
                            label={task.summary}
                            isChecked={task.isDone}
                        ></Checkbox>
                    );
                })}
            </Card>
        );
    }
}