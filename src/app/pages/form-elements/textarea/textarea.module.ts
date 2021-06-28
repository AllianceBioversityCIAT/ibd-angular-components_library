import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextareaRoutingModule } from './textarea-routing.module';
import { TextareaComponent } from './textarea.component';


@NgModule({
  declarations: [TextareaComponent],
  imports: [
    CommonModule,
    TextareaRoutingModule
  ]
})
export class TextareaModule { }
