import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReasonsToChooseComponent } from './reasons-to-choose/reasons-to-choose.component';
import { PlansComponent } from './plans/plans.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CardModule } from './plans/card/card.module';
import { ReviewsModule } from './reviews/reviews.module';
// import { CardComponent } from './main/home/reviews/card/card.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutUsComponent,
    ReasonsToChooseComponent,
    PlansComponent,
    // CardComponent,
  ],
  imports: [
    CommonModule,
    IvyCarouselModule,
    CardModule,
    ReviewsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
