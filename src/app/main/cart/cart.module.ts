import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { SharedModule } from 'src/shared/shared.module';



@NgModule({
  declarations: [
    CartComponent,
    CartDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
