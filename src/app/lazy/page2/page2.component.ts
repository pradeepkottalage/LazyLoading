import { Component, OnInit } from '@angular/core';
import {sharedService} from '../../shared/shared/sharedService'
//import {ComCardComponent} from './shared/shared/com-card/com-card.component';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.less']
})
export class Page2Component implements OnInit {

  constructor(private shared : sharedService) { }
  list:any
  ngOnInit() {
    
    this.shared.todos.subscribe((d)=>{  this.list = d; console.log(d);})
   
  }

}
