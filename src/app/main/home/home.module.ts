import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReasonsToChooseComponent } from './reasons-to-choose/reasons-to-choose.component';
import { ReviewsModule } from './reviews/reviews.module';
import { SuperPlaceholderDirective } from './banner/super-placeholder.directive';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { StepsComponent } from './steps/steps.component';
import { StripeModule } from '../stripe/stripe.module';
import { PlansModule } from './plans/plans.module';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutUsComponent,
    ReasonsToChooseComponent,
    SuperPlaceholderDirective,
    StepsComponent
  ],
  imports: [
    CommonModule,
    PlansModule,
    ReviewsModule,
    LottieModule.forRoot({ player: playerFactory }),
    StripeModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
