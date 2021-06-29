import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllRoutingModule } from './all-routing.module';
import { AllComponent } from './all.component';
import { IbdAngularComponentsModule } from '../../../../../projects/ibd-angular-components/src/lib/ibd-angular-components.module';


@NgModule({
  declarations: [AllComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    AllRoutingModule,
    IbdAngularComponentsModule,
  ]
})
export class AllModule { }
