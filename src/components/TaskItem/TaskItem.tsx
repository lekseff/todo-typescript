import React from 'react';
import {ITask} from "../../types";

interface TaskItemProps {
  task: ITask;
  changeCompleted: (id:number) => void;
  editTodo:  (id:number) => void;
  removeTodo:  (id:number) => void;
}

function TaskItem(props: TaskItemProps) {
  const { id, content, completed } = props.task; // Данные задачи
  const { changeCompleted, editTodo, removeTodo } = props; // Функции

  return (
    <div className='todo__task task'>
      <div className='task__row'>
        <input
          className='task__checkbox'
          type='checkbox'
          id={`${id}`}
          defaultChecked={completed}
          onChange={() => changeCompleted(id)}
        />
        <label htmlFor={`${id}`} aria-label='Completed toggle'></label>
        <p className='task__content'>{content}</p>
      </div>
      <div className='task__actions'>
        <button
          className='task__button task__button-edit'
          aria-label='Edit button'
          onClick={() => editTodo(id)}
        ></button>
        <button
          className='task__button task__button-remove'
          aria-label='Remove button'
          onClick={() => removeTodo(id)}
        ></button>
      </div>
    </div>
  );
}

export default React.memo(TaskItem);
