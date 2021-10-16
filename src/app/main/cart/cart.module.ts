import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { SharedModule } from 'src/shared/shared.module';
import { LottieModule } from 'ngx-lottie';
import { playerFactory } from '../home/home.module';
import { CartDetailsService } from 'src/app/service/api/cart-details.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StripeModule } from '../stripe/stripe.module';
import { SaveOrderService } from 'src/app/service/api/save-order.service';
import { GrowlModule } from 'src/common-ui/growl/growl.module';



@NgModule({
  declarations: [
    CartComponent,
    CartDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LottieModule.forRoot({ player: playerFactory }),
    FormsModule,
    ReactiveFormsModule,
    StripeModule,
    GrowlModule
  ],
  exports: [
    CartComponent
  ],
  providers: [
    CartDetailsService,
    SaveOrderService
  ]
})
export class CartModule { }
