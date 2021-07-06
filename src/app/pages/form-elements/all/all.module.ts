import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllRoutingModule } from './all-routing.module';
import { AllComponent } from './all.component';
import { IbdAngularComponentsModule } from '../../../../../projects/ibd-angular-components/src/lib/ibd-angular-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/angular_material_module/material.module';
import { SelectModule } from '../select/select.module';


@NgModule({
  declarations: [AllComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    AllRoutingModule,
    IbdAngularComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SelectModule
  ]
})
export class AllModule { }
