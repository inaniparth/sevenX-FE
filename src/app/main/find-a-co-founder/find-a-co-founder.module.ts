import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindACoFounderComponent } from './find-a-co-founder.component';
import { ComingSoonModule } from 'src/common-ui/coming-soon/coming-soon.module';



@NgModule({
  declarations: [
    FindACoFounderComponent
  ],
  imports: [
    CommonModule,
    ComingSoonModule
  ],
  exports: [
    FindACoFounderComponent
  ]
})
export class FindACoFounderModule { }
