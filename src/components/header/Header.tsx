import React, { ReactNode } from 'react';
import styles from './header.module.css';

export class Header extends React.PureComponent {
    public render(): ReactNode {
        return (
            <header className={styles.header}>
                <div className={styles.innerWrapper}>
                    <span className={styles.logo}>
                        Tsk
                    </span>
                    <span className={styles.tagline}>
                        minimal task manager
                    </span>
                </div>
            </header>
        );
    }
}