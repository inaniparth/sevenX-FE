import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { MyAccountModule } from './my-account/my-account.module';
import { SharedModule } from 'src/shared/shared.module';
import { HomeModule } from './home/home.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    HeaderModule,
    FooterModule,
    MyAccountModule,
    HomeModule,
  ]
})
export class MainModule { }
