import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos:Todo[]=[];
  

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false,
        editable: false
      },
      {
        content: 'Second todo',
        completed: false,
        editable: false
      }
    ]
  }

  toggleDone (id: number) {
    this.todos.map((v,i) => {
      if(i == id) v.completed = !v.completed;
      // console.log(v);
      // return v;
    })
  }

  addTodo (todo: Todo) {
    this.todos.push(todo);
  }

  deleteTodo (id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  editTodo (id: number) {
    this.todos.map((v,i) => {
      if(i == id) v.editable = !v.editable;
    })
  }

}

