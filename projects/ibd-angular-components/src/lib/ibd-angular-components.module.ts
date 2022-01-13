import { NgModule } from '@angular/core';
import { SimpleTextComponent } from './form-elements/simple-text/simple-text.component';
import { IbdAngularComponentsComponent } from './ibd-angular-components.component';
import { TextAreaFieldComponent } from './form-elements/text-area-field/text-area-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './form-elements/alert/alert.component';
import { SaveButtonComponent } from './components/save-button/save-button.component';
import { InputComponent } from './form-elements/input/input.component';
import { InputFieldComponent } from './form-elements/input-field/input-field.component';
import { InputNgmodelComponent } from './form-elements/input-ngmodel/input-ngmodel.component';
import { LinkListComponent } from './form-elements/link-list/link-list.component';
import { SelectComponent } from './form-elements/select/select.component';
import { SelectFieldComponent } from './form-elements/select-field/select-field.component';
import { SelectMultipleComponent } from './form-elements/select-multiple/select-multiple.component';
import { SelectNgmodelComponent } from './form-elements/select-ngmodel/select-ngmodel.component';
import { SelectNgmodelNoRepeatComponent } from './form-elements/select-ngmodel-no-repeat/select-ngmodel-no-repeat.component';
import { TermsOrPoliciesComponent } from './form-elements/terms-or-policies/terms-or-policies.component';
import { TextareaComponent } from './form-elements/textarea/textarea.component';
import { UploadFilesComponent } from './form-elements/upload-files/upload-files.component';
import { CommonModule } from '@angular/common';
//primeNg
import {InputTextareaModule} from 'primeng/inputtextarea';
import {EditorModule} from 'primeng/editor';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {FileUploadModule} from 'primeng/fileupload';
import {TableModule} from 'primeng/table';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const componentsList = [
  AlertComponent,
  InputComponent,
  InputFieldComponent,
  InputNgmodelComponent,
  LinkListComponent,
  SelectComponent,
  SelectFieldComponent,
  SelectMultipleComponent,
  SelectNgmodelComponent,
  SelectNgmodelNoRepeatComponent,
  SimpleTextComponent,
  TermsOrPoliciesComponent,
  TextAreaFieldComponent,
  TextareaComponent,
  UploadFilesComponent,
  SaveButtonComponent
]

const primeNgModulesList = [
  InputTextareaModule,
  EditorModule,
  DropdownModule,
  InputTextModule,
  InputNumberModule,
  ButtonModule,
  TooltipModule,
  FileUploadModule,
  TableModule,
  ClipboardModule
];

@NgModule({
  declarations: [
    IbdAngularComponentsComponent,
    ...componentsList
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ...primeNgModulesList
  ],
  exports: [
    IbdAngularComponentsComponent,
    ...componentsList
  ]
})
export class IbdAngularComponentsModule { }
