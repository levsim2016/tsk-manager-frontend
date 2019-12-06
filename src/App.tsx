import React from 'react';
import { TaskList } from './components/task-list/TaskList';

import { mockedTasks } from './mocks/tasks';

const App: React.FC = () => {
  return (
    <div>
      <TaskList tasks={mockedTasks}></TaskList>
    </div>
  );
}

export default App;
