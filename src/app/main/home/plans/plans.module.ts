import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans.component';
import { CardModule } from './card/card.module';
import { StripeModule } from '../../stripe/stripe.module';
import {IvyCarouselModule} from 'angular-responsive-carousel';


@NgModule({
  declarations: [
    PlansComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    StripeModule,
    IvyCarouselModule
  ],
  exports: [
    PlansComponent
  ]
})
export class PlansModule { }
