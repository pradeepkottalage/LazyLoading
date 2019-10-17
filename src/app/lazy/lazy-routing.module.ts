import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyPageComponent } from './lazy-page/lazy-page.component';
import { Page2Component } from './page2/page2.component';



const routes: Routes = [{path:'',component:LazyPageComponent,children: [
  { path:'', component: Page2Component }
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
