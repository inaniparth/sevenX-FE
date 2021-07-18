import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterNavigationComponent } from './footer-navigation.component';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterNavigationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    FooterNavigationComponent
  ]
})
export class FooterNavigationModule { }
