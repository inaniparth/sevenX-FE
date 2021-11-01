import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateOrderListOrderComponent } from './update-order-list-order.component';
import { OrderDetailsService } from 'src/app/service/api/order-details.service';
import { SharedModule } from 'src/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GrowlModule } from 'src/common-ui/growl/growl.module';
import { NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';


@NgModule({
  declarations: [
    UpdateOrderListOrderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    GrowlModule,
    FormsModule,
    NgxUiLoaderModule.forRoot({
      fgsType: SPINNER.doubleBounce,
      fgsColor: "#aaaaaa",
      fgsSize: 80,
      overlayColor: "rgba(255,255,255,0.6)",
      hasProgressBar: false
    }),
  ],
  exports: [
    UpdateOrderListOrderComponent
  ],
  providers: [
    OrderDetailsService
  ]
})
export class UpdateOrderListOrderModule { }
