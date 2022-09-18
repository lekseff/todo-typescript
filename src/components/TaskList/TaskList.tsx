import React from 'react';
import { ITask } from '../../types';

interface TaskListProps {
  tasks: ITask[];
  renderTodo: (task: ITask) => React.ReactNode;
}

function TaskList({ tasks, renderTodo }: TaskListProps) {
  return (
    <div className='todo__tasks tasks'>
      {!tasks.length ? (
        <h2 className='tasks_title-notask'>There are no tasks. Add a task</h2>
      ) : (
        tasks.map((task) => renderTodo(task))
      )}
    </div>
  );
}

export default React.memo(TaskList);
