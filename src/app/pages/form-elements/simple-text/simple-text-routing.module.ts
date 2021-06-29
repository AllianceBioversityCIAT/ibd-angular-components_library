import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleTextComponent } from './simple-text.component';

const routes: Routes = [
  {
    path:'',
    component:SimpleTextComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleTextRoutingModule { }
