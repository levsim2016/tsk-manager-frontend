import React, { ReactNode } from 'react';
import styles from './checkbox.module.css';
import checkboxMarker from '../../../assets/images/checkbox-marker.svg';

import { ICheckboxProps } from '../../interfaces/ICheckboxProps';

const autobind = require('autobind');

export class Checkbox extends React.PureComponent<ICheckboxProps> {
    @autobind
    private handleClick(): void {
        const reversedValue = this.props.isChecked ? false : true;
        this.props.selectHandler(reversedValue);
    }

    private getCheckboxClasses(): string {
        if (this.props.isChecked === true) {
            return `${styles.checkbox} ${styles.checked}`;
        }

        return styles.checkbox;
    }

    public render(): ReactNode {
        const { label } = this.props;
        const checkboxClasses = this.getCheckboxClasses();

        return (
            <div className={checkboxClasses} onClick={this.handleClick}>
                <div className={styles.marker}>
                    <img src={checkboxMarker} alt="Checkbox marker" />
                </div>
                <span className={styles.label}>
                    {label}
                </span>
            </div>
        );
    }
}