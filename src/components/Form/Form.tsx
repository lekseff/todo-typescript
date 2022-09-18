import React from 'react';

interface FormProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  addTodo: (value: string) => void;
}

function Form({ inputValue, setInputValue, addTodo }: FormProps) {
  /**
   * Добавляет задачу
   * @param {*} event - объект события
   */
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addTodo(inputValue.trim());
    setInputValue('');
  };

  /**
   * Обработка события ввода
   * @param event - event
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form className='todo__form form' onSubmit={handleSubmit}>
      <label htmlFor='task' aria-label='Text input field'></label>
      <input
        className='form__field'
        value={inputValue}
        name='task'
        type='text'
        id='task'
        placeholder='Enter the task'
        required
        maxLength={256}
        onChange={handleChange}
      />
      <button className='form__button' aria-label='Add button'></button>
    </form>
  );
}

export default React.memo(Form);
