import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SelectComponent } from './form-elements/select/select.component';
import { IbdAngularComponentsComponent } from './ibd-angular-components.component';
import { TextareaComponent } from './form-elements/textarea/textarea.component';
import { SelectMultipleComponent } from './form-elements/select-multiple/select-multiple.component';
import { UploadFilesComponent } from './form-elements/upload-files/upload-files.component';
import { LinkListComponent } from './form-elements/link-list/link-list.component';
import { InputComponent } from './form-elements/input/input.component';
import { SimpleTextComponent } from './form-elements/simple-text/simple-text.component';
import { SaveButtonComponent } from './components/save-button/save-button.component';
import { MaterialModule } from './angular_material_module/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectFilterPipe } from './pipes/select-filter.pipe';
import { TermsOrPoliciesComponent } from './form-elements/terms-or-policies/terms-or-policies.component';
//primeNg
import {InputTextareaModule} from 'primeng/inputtextarea';
import {EditorModule} from 'primeng/editor';
import {DropdownModule} from 'primeng/dropdown';
//
import { WordCounterComponent } from './components/word-counter/word-counter.component';




const componentsList = [
  IbdAngularComponentsComponent,
  SelectComponent, 
  TextareaComponent, 
  SelectMultipleComponent, 
  UploadFilesComponent, 
  LinkListComponent, 
  InputComponent, 
  SimpleTextComponent, 
  SaveButtonComponent,
  TermsOrPoliciesComponent

];

const primeNgModulesList = [
  InputTextareaModule,
  EditorModule,
  DropdownModule
];
@NgModule({
  declarations: [...componentsList, SelectFilterPipe, WordCounterComponent],
  exports: [...componentsList],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ...primeNgModulesList
  ]
  
})
export class IbdAngularComponentsModule { }
