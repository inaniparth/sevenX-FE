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
import { SuperPlaceholderDirective } from './banner/super-placeholder.directive';
// import { CardComponent } from './main/home/reviews/card/card.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { StepsComponent } from './steps/steps.component';
import { StripeModule } from '../stripe/stripe.module';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutUsComponent,
    ReasonsToChooseComponent,
    PlansComponent,
    SuperPlaceholderDirective,
    StepsComponent,
    // CardComponent,
  ],
  imports: [
    CommonModule,
    IvyCarouselModule,
    CardModule,
    ReviewsModule,
    LottieModule.forRoot({ player: playerFactory }),
    StripeModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
