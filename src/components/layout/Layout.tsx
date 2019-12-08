import React, { ReactNode } from 'react';
import styles from './layout.module.css';

import { AddTaskPanel } from '../add-task-panel/AddTaskPanel';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { TaskListContainer } from '../../containers/task-list-container/TaskListContainer';
import { fetchTasks } from '../../effects/fetchTasksEffect';

export class Layout extends React.PureComponent {
    public componentDidMount(): void {
        fetchTasks();
    }

    public render(): ReactNode {
        return (
            <div className={styles.layout}>
                <Header></Header>
                <main className={styles.contentContainer}>
                    <AddTaskPanel></AddTaskPanel>
                    <TaskListContainer></TaskListContainer>
                </main>
                <Footer></Footer>
            </div>
        );
    }
}