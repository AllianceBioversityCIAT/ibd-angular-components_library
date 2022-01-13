import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IbdAngularComponentsModule } from 'projects/ibd-angular-components/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IbdAngularComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
