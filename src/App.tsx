import React from 'react';
import styles from './app.module.css';
import { Card, Checkbox } from './ui-components';

const App: React.FC = () => {
  return (
    <div>
      <Card className={styles.list}>
        <Checkbox label="Hmm.." isChecked={true}></Checkbox>
        <Checkbox label="Hmm.." isChecked={false}></Checkbox>
      </Card>
    </div>
  );
}

export default App;
