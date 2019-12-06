import React from 'react';
import { TaskList } from './components/task-list/TaskList';

import { mockedTasks } from './mocks/tasks';
import { AddTaskPanel } from './components/add-task-panel/AddTaskPanel';

const App: React.FC = () => {
  return (
    <div>
      <AddTaskPanel></AddTaskPanel>
      <TaskList tasks={mockedTasks}></TaskList>
    </div>
  );
}

export default App;
