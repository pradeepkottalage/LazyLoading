import { Injectable } from '@angular/core';
import {Todo} from '../app/models/todo';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public  _todos = new BehaviorSubject<Todo[]>([]);
  private dataStore : { todos: any } = { todos: [] };
  readonly todos = this._todos.asObservable();
  private baseurl = "https://56e05c3213da80110013eba3.mockapi.io/api/todos"
  constructor(private httpCall:HttpClient){}

   
  loadAll(){
  
  this.httpCall.get<Todo>(this.baseurl).subscribe((d)=>{

  this.dataStore.todos = d
 
  this._todos.next(Object.assign({},this.dataStore).todos);
  
  }, (error)=>{console.log(error.error);})
  }
removeTodo(item){
  this.httpCall.delete(`${this.baseurl}/${item.id}`).subscribe(()=>{
        this.dataStore.todos.forEach((element,ind) => {
          if(element.id == item.id){
              this.dataStore.todos.splice(ind,1);
          }
        });
      this._todos.next(Object.assign({},this.dataStore).todos);
  },(error)=>{console.log("There is error in removing");}) 
 
}

}
