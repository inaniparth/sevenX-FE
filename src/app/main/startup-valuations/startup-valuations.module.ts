import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartupValuationsComponent } from './startup-valuations.component';
import { ComingSoonModule } from 'src/common-ui/coming-soon/coming-soon.module';



@NgModule({
  declarations: [
    StartupValuationsComponent
  ],
  imports: [
    CommonModule,
    ComingSoonModule
  ],
  exports: [
    StartupValuationsComponent
  ]
})
export class StartupValuationsModule { }
