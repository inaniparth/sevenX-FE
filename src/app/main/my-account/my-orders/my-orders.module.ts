import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './my-orders.component';
import { OrderDetailsService } from 'src/app/service/api/order-details.service';
import { SharedModule } from 'src/shared/shared.module';
import { StripeModule } from '../../stripe/stripe.module';
import { SavePaymentService } from 'src/app/service/api/save-payment.service';



@NgModule({
  declarations: [
    MyOrdersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StripeModule
  ],
  exports: [
    MyOrdersComponent
  ],
  providers: [
    OrderDetailsService,
    SavePaymentService
  ]
})
export class MyOrdersModule { }
