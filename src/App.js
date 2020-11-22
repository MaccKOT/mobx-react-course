import './App.css';
import Counter from './Counter';
import Todo from './Todo';

function App() {
  return (
    <div className='App'>
      <Counter />
      <hr />
      <Todo />

      {/* Компонент будет брать все данные из одного store */}
      {/* <hr />
      <p>Same Todo component</p>
      <Todo /> */}
    </div>
  );
}

export default App;
