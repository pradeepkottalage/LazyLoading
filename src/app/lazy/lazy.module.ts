import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingModule } from './lazy-routing.module';
import { LazyPageComponent } from './lazy-page/lazy-page.component';
import { Page2Component } from './page2/page2.component';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [LazyPageComponent, Page2Component],
  imports: [
    CommonModule,
    LazyRoutingModule,
    SharedModule  
  ],
  providers:[]
})
export class LazyModule { }
