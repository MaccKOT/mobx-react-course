import { observer } from 'mobx-react-lite';
import todo from './store/todo';
import React from 'react';

const Todo = observer(() => {
  console.log('Todo component rendered');

  return (
    <div className='todo-list'>
      <button onClick={() => todo.fetchTodos()}>Fetch todos from API</button>
      {todo.todos.map((t) => (
        <div className='todo' key={t.id}>
          <input
            type='checkbox'
            checked={t.complete}
            onChange={() => todo.completeTodo(t.id)}
          />
          <span className={t.complete ? 'todo-completed' : ''}>{t.title}</span>{' '}
          {'  '}
          <button onClick={() => todo.removeTodo(t.id)}>❌</button>
        </div>
      ))}
    </div>
  );
});

export default Todo;
