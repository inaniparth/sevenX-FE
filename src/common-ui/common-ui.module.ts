import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalTabViewModule } from './vertical-tab-view/vertical-tab-view.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VerticalTabViewModule
  ],
  exports: [
    VerticalTabViewModule
  ]
})
export class CommonUiModule { }
