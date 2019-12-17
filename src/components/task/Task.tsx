import React, { ReactNode } from 'react';
import styles from './task.module.css';
import deleteIcon from '../../assets/images/delete-icon.svg';

import { Checkbox } from '../../ui-components';
import { ITaskProps } from '../../interfaces/ITaskProps';

export class Task extends React.PureComponent<ITaskProps> {
    public render(): ReactNode {
        const { id, summary, isDone, selectHandler, deleteHandler } = this.props;

        return (
            <div className={styles.taskLayout}>
                <Checkbox
                    key={id}
                    label={summary}
                    isChecked={isDone}
                    selectHandler={isSelected => selectHandler(id, isSelected)}
                ></Checkbox>
                <img
                    className={styles.deleteIcon}
                    src={deleteIcon} 
                    alt='Delete' 
                    onClick={() => deleteHandler(id)} 
                />
            </div>
        );
    }
}