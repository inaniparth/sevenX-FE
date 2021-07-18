import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterSocialMediaHandlesComponent } from './footer-social-media-handles.component';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterSocialMediaHandlesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    FooterSocialMediaHandlesComponent
  ]
})
export class FooterSocialMediaHandlesModule { }
