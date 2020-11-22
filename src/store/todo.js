import { makeAutoObservable } from 'mobx';

class Todo {
  todos = [
    { id: 1, title: 'Make great app', complete: false },
    { id: 2, title: 'Learn about Mobx', complete: false },
    { id: 3, title: 'Have fun', complete: false },
  ];

  constructor() {
    // если store имеет более сложную структуру, то нужно использовать makeObservable, который имеет больше параметров и там можно указать, каким именно изменения отслеживаются и на какую глубину
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  completeTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
  }

  fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((json) => (this.todos = [...this.todos, ...json]));
  }
}

export default new Todo();
