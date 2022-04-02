import { Component, OnInit } from '@angular/core';
import { CartDetailsService } from 'src/app/service/api/cart-details.service';
import { CartDetailsGetModel } from 'src/app/service/models/cart-details.model';
import { PackagesListGetModel } from 'src/app/service/models/packages-list.model';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'sevenx-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  emptyCartLottie: AnimationOptions = {
    path: 'assets/empty_cart.json',
  };

  cartDetails: CartDetailsGetModel = null;

  packagesList: PackagesListGetModel[] = [];

  inBillingDetailsStage: boolean = false;

  constructor(
    private cartDetailsService: CartDetailsService
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
        } else {
          this.packagesList = [];
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

}
