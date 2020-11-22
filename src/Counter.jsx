import React from 'react';
import counter from './store/counter'; // импортируем наш store счётчика
import { observer } from 'mobx-react-lite';

// необходимо завернуть наш компонент в функцию observer, чтобы react мог отслеживать изменение state в counter
const Counter = observer(() => {
  return (
    <div className='counter'>
      <div>{counter.total}</div>
      <button onClick={() => counter.increment()}>+</button>
      <button onClick={() => counter.decrement()}>-</button>
    </div>
  );
});

export default Counter;
