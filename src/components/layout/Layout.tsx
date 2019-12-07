import React, { ReactNode } from 'react';
import styles from './layout.module.css';
import { mockedTasks } from '../../mocks/tasks';

import { AddTaskPanel } from '../add-task-panel/AddTaskPanel';
import { TaskList } from '../task-list/TaskList';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

export class Layout extends React.PureComponent {
    public render(): ReactNode {
        return (
            <div className={styles.layout}>
                <Header></Header>
                <main className={styles.wrapper}>
                    <AddTaskPanel></AddTaskPanel>
                    <TaskList tasks={mockedTasks}></TaskList>
                </main>
                <Footer></Footer>
            </div>
        );
    }
}