import React, { ReactNode, InputHTMLAttributes } from 'react';
import styles from './input-field.module.css';

export class InputField extends React.PureComponent<
    InputHTMLAttributes<HTMLInputElement>
> {
    public render(): ReactNode {
        const { value, placeholder } = this.props;

        return (
            <input className={styles.field} value={value} placeholder={placeholder} />
        );
    }
}