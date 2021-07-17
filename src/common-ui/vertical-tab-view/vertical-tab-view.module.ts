import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalTabViewComponent } from './vertical-tab-view.component';
import { MaterialModule } from 'src/shared/material.module';



@NgModule({
  declarations: [
    VerticalTabViewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    VerticalTabViewComponent
  ]
})
export class VerticalTabViewModule { }
