import React, { ReactNode } from 'react';
import styles from './add-task-panel.module.css';

import { Card, Button, InputField } from '../../ui-components';

export class AddTaskPanel extends React.PureComponent {
    public render(): ReactNode {
        return (
            <Card className={styles.wrapper}>
                <InputField placeholder="New task..."></InputField>
                <Button label="Add" type="primary"></Button>
            </Card>
        );
    }
}