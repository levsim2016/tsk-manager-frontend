import React, { ReactNode } from 'react';
import styles from './button.module.css';

import { IButtonProps } from '../../interfaces/IButtonProps';

export class Button extends React.PureComponent<IButtonProps> {
    private getClasses(): string {
        const { type } = this.props;
        if (type === undefined && type === 'secondary') {
            return `${styles.button} ${styles.secondary}`;
        }

        return `${styles.button} ${styles.primary}`;
    }

    public render(): ReactNode {
        const { label } = this.props;
        const buttonClasses = this.getClasses();

        return (
            <button className={buttonClasses}>
                {label}
            </button>
        );
    }
}