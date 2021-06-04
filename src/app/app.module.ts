import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderModule} from './header/header.module';
import {BodyModule} from './body/body.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from '@angular/material';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 850,
  hideDelay: 200,
  touchendHideDelay: 1000,
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderModule,
    BodyModule
  ],
  providers: [
    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
