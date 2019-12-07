import React, { ReactNode } from 'react';
import styles from './footer.module.css';

export class Footer extends React.PureComponent {
    public render(): ReactNode {
        return (
            <footer className={styles.footer}>
                <span>
                    by&nbsp;
                </span>
                <a href="https://github.com/levsim2016" target="_blank" rel="noopener noreferrer">
                    Lev Simionenko
                </a>
            </footer>
        );
    }
}