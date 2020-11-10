import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'take a nap',
      completed: false,
    },
    {
      task: 'Make dinner',
      completed: false,
    },
    {
      task: 'go to class',
      completed: true,
    },
    {
      task: 'Study',
      completed: false,
    },
    {
      task: 'Chill with kids',
      completed: false,
    },
  ];

  todoSearchTerm: string = '';
  constructor() {}

  ngOnInit(): void {}

  addTask = (form: NgForm): void => {
    let newComplete: Todo = {
      task: form.value.addToDo,
      completed: form.value.completed === 'completed' ? true : false,
    };

    this.todos.push(newComplete);
    form.reset();
  };

  removeTask = (index: number): void => {
    this.todos.splice(index, 1);
  };

  filterTodos = (): Todo[] => {
    if (!this.todoSearchTerm) {
      return this.todos;
    } else {
      return this.todos.filter((todo) => {
        let currentSearch = todo.task.toLowerCase().trim();
        return currentSearch.includes(this.todoSearchTerm.toLowerCase().trim());
      });
    }
  };
  setTodoSearchTerm = (form: NgForm): void => {
    this.todoSearchTerm = form.value.addSearch;
  };
  completedTask = (todo: Todo): void => {
    todo.completed = true;
  };
}
