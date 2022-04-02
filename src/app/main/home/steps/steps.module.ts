import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieModule } from 'ngx-lottie';
import { playerFactory } from '../home.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LottieModule.forRoot({ player: playerFactory }),
  ]
})
export class StepsModule { }
