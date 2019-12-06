import React, { ReactNode } from 'react';
import styles from './layout.module.css';
import { mockedTasks } from '../../mocks/tasks';

import { AddTaskPanel } from '../add-task-panel/AddTaskPanel';
import { TaskList } from '../task-list/TaskList';

export class Layout extends React.PureComponent {
    public render(): ReactNode {
        return (
            <div className={styles.wrapper}>
                <AddTaskPanel></AddTaskPanel>
                <TaskList tasks={mockedTasks}></TaskList>
            </div>
        );
    }
}