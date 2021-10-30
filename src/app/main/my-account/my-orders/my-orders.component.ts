import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/service/api/order-details.service';
import { MyOrdersGetModel } from 'src/app/service/models/my-orders.model';

@Component({
  selector: 'sevenx-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  myOrdersDetails: MyOrdersGetModel[] = [];

  constructor(
    private orderDetailsService: OrderDetailsService
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

}
