import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbountUsHomeComponent } from './abount-us-home.component';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AbountUsHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    AbountUsHomeComponent
  ]
})
export class AbountUsHomeModule { }
