import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { SharedModule } from 'src/shared/shared.module';
import { LottieModule } from 'ngx-lottie';
import { playerFactory } from '../home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StripeModule } from '../stripe/stripe.module';
import { SaveOrderService } from 'src/app/service/api/save-order.service';
import { GrowlModule } from 'src/common-ui/growl/growl.module';
import { IncrementDecrementPackageService } from 'src/app/service/api/increment-decrement-package.service';
import { PackageRemoveService } from 'src/app/service/api/package-remove.service';



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
    SaveOrderService,
    IncrementDecrementPackageService,
    PackageRemoveService
  ]
})
export class CartModule { }
