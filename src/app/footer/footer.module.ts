import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { SharedModule } from 'src/shared/shared.module';
import { FooterFaqComponent } from './footer-faq/footer-faq.component';
import { FooterNavigationComponent } from './footer-navigation/footer-navigation.component';
import { FooterSocialMediaHandlesComponent } from './footer-social-media-handles/footer-social-media-handles.component';

@NgModule({
  declarations: [
    FooterComponent,
    FooterFaqComponent,
    FooterNavigationComponent,
    FooterSocialMediaHandlesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
