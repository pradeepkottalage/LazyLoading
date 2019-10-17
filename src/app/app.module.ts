import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Obs1Component } from './obs1/obs1.component';
//import { TodoService } from './todo.service';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
//import { sharedService } from './shared/shared/sharedService';
import { SharedModule } from './shared/shared/shared.module';
import { ComCardComponent } from './shared/shared/com-card/com-card.component';


@NgModule({
  declarations: [
    AppComponent,
    Obs1Component,
    TodoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
