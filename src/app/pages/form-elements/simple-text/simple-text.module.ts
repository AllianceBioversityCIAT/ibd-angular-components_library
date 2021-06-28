import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleTextRoutingModule } from './simple-text-routing.module';
import { SimpleTextComponent } from './simple-text.component';


@NgModule({
  declarations: [SimpleTextComponent],
  imports: [
    CommonModule,
    SimpleTextRoutingModule
  ]
})
export class SimpleTextModule { }
