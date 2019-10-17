import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';
import { sharedService } from '../shared/shared/sharedService';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent implements OnInit {

  constructor(private todoServ:sharedService) { }
  //todoList:Observable<Todo[]>;
  list:any;
  ngOnInit() {
   
     
      this.todoServ.todos.subscribe((d)=>{
             this.list = d;
      });
      this.todoServ.loadAll();
  }
  removeTodo(item){
    this.todoServ.removeTodo(item);
  }
  createTodo(input){
      
  }
}
