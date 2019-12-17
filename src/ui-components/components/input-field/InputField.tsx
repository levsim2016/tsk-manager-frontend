import React, { ReactNode, InputHTMLAttributes } from 'react';
import styles from './input-field.module.css';

export class InputField extends React.PureComponent<
    InputHTMLAttributes<HTMLInputElement>
> {
    public render(): ReactNode {
        const {
            value, 
            placeholder, 
            onInput, 
            onChange 
        } = this.props;

        return (
            <input 
                className={styles.field} 
                value={value} 
                placeholder={placeholder} 
                onInput={onInput} 
                onChange={onChange} 
            />
        );
    }
}