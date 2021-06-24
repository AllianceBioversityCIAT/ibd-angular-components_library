import { NgModule } from '@angular/core';
import { SelectComponent } from './form-elements/select/select.component';
import { IbdAngularComponentsComponent } from './ibd-angular-components.component';



const componentsList = [
  IbdAngularComponentsComponent,
  SelectComponent
];
@NgModule({
  declarations: [...componentsList],
  exports: [...componentsList],
  imports: []
  
})
export class IbdAngularComponentsModule { }
