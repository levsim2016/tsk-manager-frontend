import React, { ReactNode } from 'react';
import styles from './checkbox.module.css';
import checkboxMarker from '../../../assets/images/checkbox-marker.svg';

import { ICheckboxProps } from '../../interfaces/ICheckboxProps';

export class Checkbox extends React.PureComponent<ICheckboxProps> {
    private getMarkerClasses(): string {
        if (this.props.isChecked === true) {
            return `${styles.mark} ${styles.checked}`;
        }

        return styles.mark;
    }

    public render(): ReactNode {
        const { label } = this.props;
        const checkboxMarkerClasses = this.getMarkerClasses();

        return (
            <div className={styles.checkbox}>
                <div className={checkboxMarkerClasses}>
                    <img src={checkboxMarker} alt="Checkbox marker" />
                </div>
                <span className={styles.label}>
                    {label}
                </span>
            </div>
        );
    }
}