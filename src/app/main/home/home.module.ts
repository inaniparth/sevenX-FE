import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReasonsToChooseComponent } from './reasons-to-choose/reasons-to-choose.component';
import { PlansComponent } from './plans/plans.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CardModule } from './plans/card/card.module';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutUsComponent,
    ReasonsToChooseComponent,
    PlansComponent,
  ],
  imports: [
    CommonModule,
    IvyCarouselModule,
    CardModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
