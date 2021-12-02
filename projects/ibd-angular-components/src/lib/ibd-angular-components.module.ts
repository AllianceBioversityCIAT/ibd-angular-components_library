import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SelectComponent } from './form-elements/select/select.component';
import { IbdAngularComponentsComponent } from './ibd-angular-components.component';
import { TextareaComponent } from './form-elements/textarea/textarea.component';
import { SelectMultipleComponent } from './form-elements/select-multiple/select-multiple.component';
import { UploadFilesComponent } from './form-elements/upload-files/upload-files.component';
import { LinkListComponent } from './form-elements/link-list/link-list.component';
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
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {FileUploadModule} from 'primeng/fileupload';

//
import { WordCounterComponent } from './components/word-counter/word-counter.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectNgmodelComponent } from './form-elements/select-ngmodel/select-ngmodel.component';
import { InputNgmodelComponent } from './form-elements/input-ngmodel/input-ngmodel.component';
import { AlertComponent } from './form-elements/alert/alert.component';
import {TableModule} from 'primeng/table';
import { SelectNgmodelNoRepeatComponent } from './form-elements/select-ngmodel-no-repeat/select-ngmodel-no-repeat.component';
import { RouterModule } from '@angular/router';
import { SortAlphabeticallyPipe } from './pipes/sort-alphabetically.pipe';
import { InputFieldComponent } from './form-elements/input-field/input-field.component';
import { SelectFieldComponent } from './form-elements/select-field/select-field.component';




const componentsList = [
  IbdAngularComponentsComponent,
  SelectComponent, 
  TextareaComponent, 
  SelectMultipleComponent, 
  UploadFilesComponent, 
  LinkListComponent, 
  SimpleTextComponent, 
  SaveButtonComponent,
  TermsOrPoliciesComponent,
  SelectNgmodelComponent,
  SelectNgmodelNoRepeatComponent,
  InputNgmodelComponent,
  AlertComponent,
  InputFieldComponent,
  SelectFieldComponent
];

const primeNgModulesList = [
  InputTextareaModule,
  EditorModule,
  DropdownModule,
  InputTextModule,
  InputNumberModule,
  ButtonModule,
  TooltipModule,
  FileUploadModule,
  TableModule
];
@NgModule({
  declarations: [...componentsList, SelectFilterPipe, WordCounterComponent, SortAlphabeticallyPipe],
  exports: [...componentsList],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ...primeNgModulesList
  ]
  
})
export class IbdAngularComponentsModule { }
