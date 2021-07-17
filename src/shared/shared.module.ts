import { NgModule } from '@angular/core';
import { CommonUiModule } from 'src/common-ui/common-ui.module';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    MaterialModule,
    CommonUiModule
  ],
  exports: [
    MaterialModule,
    CommonUiModule
  ]
})
export class SharedModule { }
