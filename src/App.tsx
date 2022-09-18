import { useState, useCallback } from 'react';
import TaskItem from './components/TaskItem/TaskItem';
import Form from './components/Form/Form';
import TaskList from './components/TaskList/TaskList';
import {ITask} from  './types';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]); // Список задач
  const [inputValue, setInputValue] = useState(''); // Состояние поля ввода

  /**
   * Добавляет задачу в список
   * @param {*} text - текст задачи
   */
  const addTodo = (text: string) => {
    const task:ITask = {
      id: Date.now(),
      content: text,
      completed: false,
    };
    setTasks((prev) => [...prev, task]); // Добавляем новый Todo
  };

  /**
   * Удаляет задачу
   * @param {*} id - id задачи
   */
  const removeTodo = useCallback((id: number) => {
    setTasks((prev) => prev.filter((task:ITask) => task.id !== id));
  }, []);

  /**
   * Изменение состояния выполнено
   * @param {*} id
   */
  const changeCompleted = useCallback(
    (id: number) => {
      const newTasks = tasks.map((task:ITask) => {
        if (task.id === id) task.completed = !task.completed;
        return task;
      });
      setTasks(() => newTasks);
    },
    [tasks]
  );

  /**
   * Редактирование задачи
   */
  const editTodo = useCallback(
    (id: number) => {
      const task = tasks.find((task) => task.id === id);
      if(!task) return; // Если по какой-то причине todo не найден - выходим
      setInputValue(task.content);
      removeTodo(id);
    },
    [tasks, removeTodo]
  );

  /**
   * Рендерит элемент todo
   */
  const renderTodo = useCallback(
    (item: ITask) => (
      <TaskItem
        task={item}
        key={item.id}
        editTodo={editTodo}
        removeTodo={removeTodo}
        changeCompleted={changeCompleted}
      />
    ),
    [editTodo, removeTodo, changeCompleted]
  );

  return (
    <div className='container'>
      <div className='todo'>
        <h1 className='todo__title'>Todo List</h1>
        <Form
          addTodo={addTodo}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <TaskList renderTodo={renderTodo} tasks={tasks} />
      </div>
    </div>
  );
}

export default App;

