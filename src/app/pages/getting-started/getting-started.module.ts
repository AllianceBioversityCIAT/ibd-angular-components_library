import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GettingStartedRoutingModule } from './getting-started-routing.module';
import { GettingStartedComponent } from './getting-started.component';
import { MaterialModule } from '../../../../projects/ibd-angular-components/src/lib/angular_material_module/material.module';


@NgModule({
  declarations: [GettingStartedComponent],
  imports: [
    CommonModule,
    GettingStartedRoutingModule,
    MaterialModule
  ]
})
export class GettingStartedModule { }
