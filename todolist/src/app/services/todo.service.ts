import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return [
      {
        id: 1,
        title: 'todo One',
        completed: false
      },
      {
        id: 2,
        title: 'todo Two',
        completed: false
      },
      {
        id: 3,
        title: 'todo Three',
        completed: false
      }
    ];
  }
}
