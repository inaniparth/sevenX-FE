import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './my-orders.component';
import { OrderDetailsService } from 'src/app/service/api/order-details.service';
import { SharedModule } from 'src/shared/shared.module';



@NgModule({
  declarations: [
    MyOrdersComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MyOrdersComponent
  ],
  providers: [
    OrderDetailsService
  ]
})
export class MyOrdersModule { }
