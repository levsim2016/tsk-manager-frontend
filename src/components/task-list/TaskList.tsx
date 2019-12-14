import React, { ReactNode } from 'react';
import styles from './task-list.module.css';

import { Card } from '../../ui-components';
import { ITaskListProps } from '../../interfaces/ITaskListProps';
import { TaskContainer } from '../../containers/task-container/TaskContainer';

export class TaskList extends React.PureComponent<ITaskListProps> {
    public render(): ReactNode {
        const { tasks } = this.props;

        return (
            <Card className={styles.wrapper}>
                {tasks.map(task => {
                    return (
                        <TaskContainer
                            data={task}
                            key={task.id}
                        ></TaskContainer>
                    );
                })}
            </Card >
        );
    }
}