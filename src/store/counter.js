import { makeAutoObservable } from 'mobx';

class Counter {
  count = 0; // значение по умолчанию

  timer = 60;

  constructor() {
    //автоматическое отслеживание изменений в сторе
    makeAutoObservable(this);
  }

  //наши экшены, которые будут менять состояние
  increment() {
    this.count = this.count + 1; // в отличии от Redux, тут можно напрямую менять стейт
    // console.log('increment,', this.count);
  }
  decrement() {
    this.count = this.count - 1;
    // console.log('decrement,', this.count);
  }

  //computed свойство. Вызывается только если какой-то из этих параметров изменился
  get total() {
    return `Counter + timer = ${this.count + this.timer}`;
  }
}

export default new Counter();
