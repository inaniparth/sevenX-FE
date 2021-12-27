import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsMainComponent } from './about-us-main.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ReviewsModule } from '../home/reviews/reviews.module';


@NgModule({
  declarations: [
    AboutUsMainComponent
  ],
  imports: [
    CommonModule,
    IvyCarouselModule,
    ReviewsModule
  ]
})
export class AboutUsMainModule { }
