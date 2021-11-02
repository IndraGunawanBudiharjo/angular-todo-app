import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {
  @Output() newTodoEvent = new EventEmitter<Todo>();

  inputTodo: string = "";
  isSubmitted: boolean = false;
  // errors: any = {content: {}};

  todoForm = new FormGroup({
    inputNewItem: new FormControl('', 
      [
        Validators.required,
        Validators.minLength(10)
      ])
  });

  get inputNewItem(){
    return this.todoForm.get('inputNewItem');
  }


  onSubmitForm(){
    this.isSubmitted = true;
    if(!this.inputNewItem?.invalid){
      this.addTodo();
    }
  }

  toggleIsSubmitted(){
    if (this.isSubmitted == true)
      this.isSubmitted = false;
  };

  addTodo() {
    // if(this.inputTodo.length == 0) {
    //   alert("Please insert valid todo.");
    //   return;
    // }
    const todo: Todo = {
      content: this.inputTodo,
      completed: false,
      editable: false
    };

    this.newTodoEvent.emit(todo);
    this.inputTodo = "";

  }


  constructor() { }

  ngOnInit(): void {
  }

}
