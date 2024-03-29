import React, { ReactNode } from 'react';
import styles from './layout.module.css';

import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { TaskListContainer } from '../../containers/task-list-container/TaskListContainer';
import { fetchTasks } from '../../effects/fetchTasksEffect';
import { AddTaskPanelContainer } from '../../containers/add-task-panel-container/AddTaskPanelContainer';
import { CalendarContainer } from '../../containers/calendar-container/CalendarContainer';

export class Layout extends React.PureComponent {
    public componentDidMount(): void {
        fetchTasks();
    }

    public render(): ReactNode {
        return (
            <div className={styles.layout}>
                <Header></Header>
                <div className={styles.contentContainer}>
                    <section>
                        <CalendarContainer></CalendarContainer>
                    </section>
                    <main className={styles.taskListSection}>
                        <AddTaskPanelContainer></AddTaskPanelContainer>
                        <TaskListContainer></TaskListContainer>
                    </main>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}