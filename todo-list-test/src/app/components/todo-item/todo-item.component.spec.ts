import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoComponent } from '../todo/todo.component';
import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  let component1: TodoComponent;
  let fixture1: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemComponent, TodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    fixture1 = TestBed.createComponent(TodoComponent);
    component1 = fixture1.componentInstance;
    fixture1.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should create', () => {
    expect(component1).toBeTruthy();
  });
});
