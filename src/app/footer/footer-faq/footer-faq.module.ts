import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterFaqComponent } from './footer-faq.component';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterFaqComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    FooterFaqComponent
  ]
})
export class FooterFaqModule { }
