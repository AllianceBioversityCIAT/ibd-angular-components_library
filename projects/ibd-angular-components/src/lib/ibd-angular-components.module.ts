import { NgModule } from '@angular/core';
import { SelectComponent } from './form-elements/select/select.component';
import { IbdAngularComponentsComponent } from './ibd-angular-components.component';
import { TextareaComponent } from './form-elements/textarea/textarea.component';
import { SelectMultipleComponent } from './form-elements/select-multiple/select-multiple.component';
import { UploadFilesComponent } from './form-elements/upload-files/upload-files.component';
import { LinkListComponent } from './form-elements/link-list/link-list.component';
import { InputComponent } from './form-elements/input/input.component';
import { SimpleTextComponent } from './form-elements/simple-text/simple-text.component';
import { SaveButtonComponent } from './components/save-button/save-button.component';



const componentsList = [
  IbdAngularComponentsComponent,
  SelectComponent
];
@NgModule({
  declarations: [...componentsList, TextareaComponent, SelectMultipleComponent, UploadFilesComponent, LinkListComponent, InputComponent, SimpleTextComponent, SaveButtonComponent],
  exports: [...componentsList],
  imports: []
  
})
export class IbdAngularComponentsModule { }
