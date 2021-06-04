import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabPackComponent} from './tabpack/tab-pack.component';
import {PackListComponent} from './packlist/pack-list.component';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTooltipModule
} from '@angular/material';
import {BodyComponent} from './body.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [TabPackComponent, PackListComponent, BodyComponent],
  exports: [
    PackListComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class BodyModule {
  constructor() {

  }
}
