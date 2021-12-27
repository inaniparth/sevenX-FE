import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    ReviewsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    IvyCarouselModule,
  ],
  exports: [
    ReviewsComponent,
    CardComponent
  ]
})
export class ReviewsModule { }
