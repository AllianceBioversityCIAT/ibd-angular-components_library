import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveButtonRoutingModule } from './save-button-routing.module';
import { SaveButtonComponent } from './save-button.component';


@NgModule({
  declarations: [SaveButtonComponent],
  imports: [
    CommonModule,
    SaveButtonRoutingModule
  ]
})
export class SaveButtonModule { }
