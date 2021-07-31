import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsMainComponent } from './about-us-main.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';



@NgModule({
  declarations: [
    AboutUsMainComponent
  ],
  imports: [
    CommonModule,
    IvyCarouselModule,
  ]
})
export class AboutUsMainModule { }
