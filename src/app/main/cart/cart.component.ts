import { Component, OnInit, ViewChild } from '@angular/core';
import { CartDetailsService } from 'src/app/service/api/cart-details.service';
import { CartDetailsGetModel } from 'src/app/service/models/cart-details.model';
import { PackagesListGetModel } from 'src/app/service/models/packages-list.model';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { StripeComponent } from '../stripe/stripe.component';
import { SaveOrderService } from 'src/app/service/api/save-order.service';
import { GrowlService } from 'src/common-ui/growl/growl.service';

@Component({
  selector: 'sevenx-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  emptyCartLottie: AnimationOptions = {
    path: 'assets/empty-cart.json',
  };

  cartDetails: CartDetailsGetModel = null;

  packagesList: PackagesListGetModel[] = [];

  @ViewChild('stripeComponent')
  stripeComponent: StripeComponent;

  constructor(
    private cartDetailsService: CartDetailsService,
    private saveOrderService: SaveOrderService,
    private growlService: GrowlService
  ) {

  }

  ngOnInit(): void {
    this.fetchCartDetails();
  }

  fetchCartDetails() {
    this.cartDetailsService.cartDetails$.subscribe((response: CartDetailsGetModel) => {
      if (response) {
        this.cartDetails = response;
        if (this.cartDetails && this.cartDetails.packagesList && this.cartDetails.packagesList.length) {
          this.packagesList = this.cartDetails.packagesList;
        }
      } else {
        this.cartDetails = null;
        this.packagesList = [];
      }
    });
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log("Animation Created", animationItem);
  }

  placeOrderClickHandler(event: any) {
    // this.isPaymentDone = true;
    if (this.stripeComponent) {
      // this.stripeComponent.initPayment(this.cartDetails.finalOrderTotal, this.packagesList[0].planName, this.packagesList[0].description);
      this.stripeComponent.initPayment(this.cartDetails.orderTotal, this.packagesList[0].planName, this.packagesList[0].description);
    }
  }

  stripeTokenHandler(event) {
    this.saveOrderService.post({
      subTotal: this.cartDetails.subTotal,
      gstAmount: this.cartDetails.gstAmount,
      orderTotal: this.cartDetails.orderTotal,
      packagesList: this.packagesList.map((obj) => obj.id),
      transactionId: event.id,
      transactionStatus: event.id
    }).subscribe((response) => {
      if (response && response.status && response.status === 200) {
        this.growlService.successMessageGrowl('Order Placed Successfully');
      } else {
        this.growlService.errorMessageGrowl("An unexpected Error occured, please contact support");
      }
    })
  }

}
