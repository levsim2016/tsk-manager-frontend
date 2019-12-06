import React, { ReactNode, HTMLAttributes } from 'react';
import styles from './card.module.css';

export class Card extends React.PureComponent<HTMLAttributes<HTMLDivElement>> {
    private getCardClasses(): string {
        if (this.props.className === undefined) {
            return styles.card;
        }

        return `${styles.card} ${this.props.className}`;
    }

    public render(): ReactNode {
        const cardClasses = this.getCardClasses();

        return (
            <div className={cardClasses}>
                {this.props.children}
            </div>
        );
    }
}