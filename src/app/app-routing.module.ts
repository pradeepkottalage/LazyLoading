import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Obs1Component } from './obs1/obs1.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
 
  {path:"todolist",component:TodoComponent},
  {
    path: 'lazy',
    loadChildren: () =>
      import('./lazy/lazy.module').then(module => module.LazyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
