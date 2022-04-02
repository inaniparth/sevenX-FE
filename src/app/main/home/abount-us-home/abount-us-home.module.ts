import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbountUsHomeComponent } from './abount-us-home.component';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule } from '@angular/router';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AbountUsHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  exports: [
    AbountUsHomeComponent
  ]
})
export class AbountUsHomeModule { }
