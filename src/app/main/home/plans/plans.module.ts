import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans.component';
import { CardModule } from './card/card.module';
import { StripeModule } from '../../stripe/stripe.module';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { AddCartService } from 'src/app/service/api/add-cart.service';
import { GrowlModule } from 'src/common-ui/growl/growl.module';
import { GetPackagesService } from 'src/app/service/api/get-packages.service';


@NgModule({
  declarations: [
    PlansComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    // StripeModule,
    IvyCarouselModule,
    GrowlModule
  ],
  exports: [
    PlansComponent
  ],
  providers: [
    GetPackagesService
  ]
})
export class PlansModule { }
