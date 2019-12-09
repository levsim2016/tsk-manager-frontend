import React, { ReactNode } from 'react';
import styles from './layout.module.css';

import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { TaskListContainer } from '../../containers/task-list-container/TaskListContainer';
import { fetchTasks } from '../../effects/fetchTasksEffect';
import { AddTaskPanelContainer } from '../../containers/add-task-panel-container/AddTaskPanelContainer';
import { Calendar } from '../../ui-components';

export class Layout extends React.PureComponent {
    public componentDidMount(): void {
        fetchTasks();
    }

    public render(): ReactNode {
        return (
            <div className={styles.layout}>
                <Header></Header>
                <section>
                    <Calendar 
                        month={12} 
                        selectedDay={8}
                    ></Calendar>
                </section>
                <main className={styles.contentContainer}>
                    <AddTaskPanelContainer></AddTaskPanelContainer>
                    <TaskListContainer></TaskListContainer>
                </main>
                <Footer></Footer>
            </div>
        );
    }
}