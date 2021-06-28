import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IbdAngularComponentsModule } from '../../../../projects/ibd-angular-components/src/lib/ibd-angular-components.module';


@NgModule({
  declarations: [HomeComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IbdAngularComponentsModule,
  ]
})
export class HomeModule { }
