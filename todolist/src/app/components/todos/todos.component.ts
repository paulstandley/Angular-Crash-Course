import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() { }

  ngOnInit() {

    this.todos = [
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
