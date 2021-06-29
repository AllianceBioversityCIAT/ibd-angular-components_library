import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaveButtonComponent } from './save-button.component';

const routes: Routes = [
  {
    path:'',
    component:SaveButtonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveButtonRoutingModule { }
