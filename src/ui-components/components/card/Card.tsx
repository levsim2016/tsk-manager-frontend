import React, { ReactNode } from 'react';
import styles from './card.module.css';

export class Card extends React.PureComponent {
    public render(): ReactNode {
        return (
            <div className={styles.card}>
                {this.props.children}
            </div>
        );
    }
}