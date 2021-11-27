import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonComponent } from './coming-soon.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';



@NgModule({
  declarations: [
    ComingSoonComponent
  ],
  imports: [
    CommonModule,
    IvyCarouselModule
  ],
  exports: [
    ComingSoonComponent
  ]
})
export class ComingSoonModule { }
