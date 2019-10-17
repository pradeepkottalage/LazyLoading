import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedService } from './sharedService';

import { ComCardComponent } from './com-card/com-card.component';



@NgModule({
  declarations: [ ComCardComponent],
  imports: [
    CommonModule
  ],
  exports:[ ComCardComponent,]
})
export class SharedModule { 
  static forRoot(){
    return {
      ngModule: SharedModule,
      providers:[sharedService]
    }
  }
}
