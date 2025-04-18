import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { finalize, take } from 'rxjs/operators';
import { getOrderStatusData } from 'src/app/app-utils';
import { OrderDetailsService } from 'src/app/service/api/order-details.service';
import { UpdateOrderService } from 'src/app/service/api/update-order.service';
import { MyOrdersGetModel } from 'src/app/service/models/my-orders.model';
import { UpdateOrderPostModel } from 'src/app/service/models/update-order.model';
import { GrowlService } from 'src/common-ui/growl/growl.service';

@Component({
  selector: 'sevenx-update-order-list-order',
  templateUrl: './update-order-list-order.component.html',
  styleUrls: ['./update-order-list-order.component.scss']
})
export class UpdateOrderListOrderComponent implements OnInit {

  orderDetail: MyOrdersGetModel = null;

  LOADER_ID = "update-order-loader";

  orderStatusData: string[] = getOrderStatusData();

  filteredOrderStatusData: string[] = getOrderStatusData();

  constructor(
    private orderDetailsService: OrderDetailsService,
    private dialogRef: MatDialogRef<UpdateOrderListOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ngxUILoaderService: NgxUiLoaderService,
    private growlService: GrowlService,
    private updateOrderService: UpdateOrderService
  ) {

  }

  ngOnInit(): void {
    this.getOrderData();
  }

  getOrderData() {
    this.startLoader();
    this.orderDetailsService.get(null, `/${this.data.id}`)
      .pipe(
        take(1),
        finalize(() => {
          this.stopLoader();
        })
      )
      .subscribe((response) => {
        if (response && response.status && (response.status === 200)) {
          this.orderDetail = response.data;
        }
      })
  }

  closeLoginSignupDialog() {
    this.dialogRef.close();
  }

  saveOrderClickHandler() {
    this.startLoader();
    this.updateOrderService.post(new UpdateOrderPostModel().toRemote(this.orderDetail))
      .pipe(
        take(1),
        finalize(() => {
          this.stopLoader();
        })
      )
      .subscribe(response => {
        if (response && response.status && (response.status === 200)) {
          this.growlService.successMessageGrowl('Order Updated Successfully');
          this.getOrderData();
        } else {
          this.growlService.errorMessageGrowl('Something went wrong, please contact support');
        }
      })
  }

  startLoader() {
    this.ngxUILoaderService.startLoader(this.LOADER_ID);
  }

  /**
   * Function to stop UI loader for selected table.
   *
   * @memberof TableComponent
   */
  stopLoader() {
    this.ngxUILoaderService.stopLoader(this.LOADER_ID);
  }

  statusInputChangeHandler(searchedValue: string) {
    searchedValue = searchedValue ? searchedValue.toLowerCase().trim() : '';
    this.filteredOrderStatusData = this.orderStatusData.filter((state: string) => {
      return state && state.toLowerCase().includes(searchedValue);
    });
  }

  statusFieldCloseHandler(stateInputElement: HTMLInputElement) {
    if (stateInputElement) {
      const searchedString = stateInputElement.value ? stateInputElement.value.toLowerCase().trim() : '';
      let matchedValue: string = null;
      if (searchedString) {
        matchedValue = this.orderStatusData.find((state: string) => {
          return state && state.toLowerCase() === searchedString;
        }) || null;
      }
      // setFormControlValue('state', matchedValue, this.baseForm);
      this.orderDetail.orderStatus = matchedValue;
      stateInputElement.blur();
    }
  }


}
