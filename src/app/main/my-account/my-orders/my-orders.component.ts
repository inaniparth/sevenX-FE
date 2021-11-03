import { Component, OnInit, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import { OrderDetailsService } from 'src/app/service/api/order-details.service';
import { SavePaymentService } from 'src/app/service/api/save-payment.service';
import { MyOrdersGetModel } from 'src/app/service/models/my-orders.model';
import { PackagesListGetModel } from 'src/app/service/models/packages-list.model';
import { StripeComponent } from '../../stripe/stripe.component';
import { OrderStatus } from './my-orders-utils';

@Component({
  selector: 'sevenx-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  myOrdersDetails: MyOrdersGetModel[] = [];

  orderStatus = OrderStatus;

  @ViewChild('stripeComponent')
  stripeComponent: StripeComponent;

  orderForPayment: MyOrdersGetModel = null;

  constructor(
    private orderDetailsService: OrderDetailsService,
    private savePaymentService: SavePaymentService
  ) {
    this.orderDetailsService.get()
      .subscribe((response) => {
        if (response && response.status && (response.status === 200) && response.data && response.data.length) {
          this.myOrdersDetails = response.data.map((oPackage) => {
            return new MyOrdersGetModel().toLocal(oPackage);
          });
          console.log(this.myOrdersDetails);
        } else {

        }
      });
  }

  ngOnInit(): void {
  }

  placeOrderHandler(order: MyOrdersGetModel) {
    this.orderForPayment = order;
    if (this.stripeComponent) {
      const description: string = order.packagesList.map((oPackage: PackagesListGetModel) => oPackage.planName).join((''));
      this.stripeComponent.initPayment(order.orderTotal, description, description, order.id);
    }
  }

  stripeTokenHandler(orderToken: any) {
    const token = orderToken.token;
    const orderId = orderToken.orderId;
    console.log(token);
    this.savePaymentService.post({
      orderId: orderId,
      transactionId: token.id,
      transactionStatus: null,
      transactionNote: null
    })
      .pipe(take(1))
      .subscribe(response => {
        console.log(response);
      })
  }

}
