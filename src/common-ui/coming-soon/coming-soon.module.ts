import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonComponent } from './coming-soon.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    ComingSoonComponent
  ],
  imports: [
    CommonModule,
    IvyCarouselModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  exports: [
    ComingSoonComponent
  ]
})
export class ComingSoonModule { }
