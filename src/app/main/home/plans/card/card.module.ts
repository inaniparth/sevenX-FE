import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { AddCartService } from 'src/app/service/api/add-cart.service';
import { GrowlModule } from 'src/common-ui/growl/growl.module';



@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    GrowlModule
  ],
  exports: [CardComponent],
  providers: [
    AddCartService
  ]
})
export class CardModule { }
