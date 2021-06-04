import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {MatButtonModule, MatIconModule, MatTooltipModule} from '@angular/material';
import {BodyModule} from '../body/body.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        BodyModule,
        MatTooltipModule
    ]
})
export class HeaderModule {
}
