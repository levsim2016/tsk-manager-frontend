import React, { ReactNode } from 'react';
import styles from './layout.module.css';
import { mockedTasks } from '../../mocks/tasks';

import { AddTaskPanel } from '../add-task-panel/AddTaskPanel';
import { TaskList } from '../task-list/TaskList';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Calendar } from '../../ui-components';

export class Layout extends React.PureComponent {
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
                    <AddTaskPanel></AddTaskPanel>
                    <TaskList tasks={mockedTasks}></TaskList>
                </main>
                <Footer></Footer>
            </div>
        );
    }
}