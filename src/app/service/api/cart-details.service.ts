import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth-service/auth.service';
import { BaseService } from '../base-service/base.service';
import { CartDetailsGetModel } from '../models/cart-details.model';
import { PackagesListGetModel } from '../models/packages-list.model';

@Injectable({
  providedIn: 'root'
})
export class CartDetailsService extends BaseService {
  
  urlPath: string = 'cartDetails';

  private cartDetails: CartDetailsGetModel = null;

  cartDetails$: BehaviorSubject<CartDetailsGetModel> = new BehaviorSubject<CartDetailsGetModel>(null);

  constructor(
    protected httpClient: HttpClient, 
    protected injector: Injector,
    private authService: AuthService
  ) {
    super(httpClient, injector);
    this.loggedInUserChangeHandler();
  }

  private loggedInUserChangeHandler() {
    this.authService.loggedInUserDetails$.subscribe(() => this.fetchCartDetails());
  }

  fetchCartDetails() {
    if (this.authService && this.authService.userDetails) {
      this.get().subscribe((response) => {
        if (response && response.status && (response.status === 200) && response.data) {
          const cartDetails: CartDetailsGetModel = new CartDetailsGetModel().toLocal(response.data);
          this.cartDetails = cartDetails;
          this.cartDetails$.next(this.cartDetails);
        }
      });
    } else {
      this.cartDetails = null;
      this.cartDetails$.next(this.cartDetails);
    }
  }

}

