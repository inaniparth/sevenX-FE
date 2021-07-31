import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalTabViewModule } from './vertical-tab-view/vertical-tab-view.module';
import { GrowlModule } from './growl/growl.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VerticalTabViewModule,
    GrowlModule
  ],
  exports: [
    VerticalTabViewModule,
    GrowlModule
  ]
})
export class CommonUiModule { }
