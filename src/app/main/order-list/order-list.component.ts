import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, take } from 'rxjs/operators';
import { getFormControl, setFormControlValue } from 'src/app/app-utils';
import { OrderListService } from 'src/app/service/api/order-list.service';
import { OrderListGetModel } from 'src/app/service/models/order-list.model';
import { SortingOrder } from 'src/common-ui/directive/sortable-column.directive';
import { TableColumnsConfig, TableConfig, TablePaginationConfig } from 'src/common-ui/table/table-config';
import { TableColumnTypes } from 'src/common-ui/table/table-constants';
import { TableComponent } from 'src/common-ui/table/table.component';
import { UpdateOrderListOrderComponent } from '../update-order-list-order/update-order-list-order.component';

@Component({
  selector: 'sevenx-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderListComponent implements OnInit {

  @ViewChild('orderTable')
  orderTable: TableComponent;

  tableConfig: TableConfig;

  tableColumnsConfig: TableColumnsConfig[];

  tablePaginationConfig: TablePaginationConfig;

  filterForm: FormGroup;

  orderStatusList: string[] = ['Pending', 'Approved'];

  filteredOrderStatusList: string[] = [];

  transactionStatusList: string[] = ['Pending', 'Paid'];

  filteredTransactionStatusList: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private orderListService: OrderListService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initFilterForm();
    this.setTableComponentConfig();
  }

  initFilterForm() {
    this.filterForm = this.formBuilder.group({
      fromDate: [],
      toDate: [],
      firstName: [],
      username: [],
      phoneNo: [],
      orderStatus: [],
      transactionStatus: []
    });
    getFormControl('fromDate', this.filterForm).disable();
    getFormControl('toDate', this.filterForm).disable();
  }

  setTableComponentConfig() {
    this.tableConfig = this.getTableConfig();
    this.tableColumnsConfig = this.getTableColumnsConfig();
    this.tablePaginationConfig = this.getTablePaginationConfig();
  }

  getTableConfig(): TableConfig {
    const tableConfig: TableConfig = new TableConfig();
    tableConfig.showPagination = true;
    tableConfig.defaultSortingDetails = { sortField: 'created_at', sortOrder: SortingOrder.DESCENDING };
    tableConfig.dataLoadFunction = this.dataLoadFunction.bind(this);
    tableConfig.isRowClickable = true;
    return tableConfig;
  }

  dataLoadFunction(requestModel: any) {
    const filterModel = this.getFilterRequestModel();
    if (filterModel) {
      requestModel = requestModel ? Object.assign(requestModel, filterModel) : Object.assign({}, filterModel);
    }
    return this.orderListService.post(requestModel)
      .pipe(
        map((response) => {
          if (response && response.status && response.status === 200) {
            let result: OrderListGetModel[] = [];
            if (response.data) {
              if (response.data.orderList && response.data.orderList.length) {
                result = response.data.orderList.map((value: OrderListGetModel) => new OrderListGetModel().toLocal(value));
              }
              if (response.data.totalOrdersCount) {
                this.tablePaginationConfig.totalCount = response.data.totalOrdersCount;
              }
            }
            return result;
          }
        })
      )
  }

  getFilterRequestModel() {
    const filterModel = JSON.parse(JSON.stringify(this.filterForm.getRawValue()));
    if (filterModel.fromDate) {
      filterModel.fromDate = Date.parse(filterModel.fromDate);
    }
    if (filterModel.toDate) {
      filterModel.toDate = Date.parse(filterModel.toDate);
    }
    return filterModel;
  }

  getTableColumnsConfig(): TableColumnsConfig[] {
    return [
      {
        field: 'createdAt',
        columnHeader: 'Order Date',
        columnType: TableColumnTypes.TEXT,
        isEditableColumn: () => false,
        styleClass: 'order-list-created-date-column-container',
        isSortableColumn: true,
        sortingFieldName: 'created_at'
      },
      {
        field: 'firstName',
        columnHeader: 'Name',
        columnType: TableColumnTypes.TEXT,
        isEditableColumn: () => false,
        styleClass: 'order-list-name-column-container',
        isSortableColumn: false,
        sortingFieldName: 'first_name'
      },
      {
        field: 'username',
        columnHeader: 'Email',
        columnType: TableColumnTypes.TEXT,
        isEditableColumn: () => false,
        styleClass: 'order-list-email-column-container',
        isSortableColumn: false,
        sortingFieldName: 'username'
      },
      {
        field: 'phoneNo',
        columnHeader: 'Contact Number',
        columnType: TableColumnTypes.TEXT,
        isEditableColumn: () => false,
        styleClass: 'order-list-contact-number-column-container',
        isSortableColumn: false,
        sortingFieldName: 'phone_no'
      },
      {
        field: 'state',
        columnHeader: 'State',
        columnType: TableColumnTypes.TEXT,
        isEditableColumn: () => false,
        styleClass: 'order-list-state-column-container',
        isSortableColumn: false,
        sortingFieldName: 'state'
      },
      {
        field: 'orderStatus',
        columnHeader: 'Order Status',
        columnType: TableColumnTypes.TEXT,
        isEditableColumn: () => false,
        styleClass: 'order-list-order-status-column-container',
        isSortableColumn: false,
        sortingFieldName: 'order_status'
      },
      {
        field: 'transactionStatus',
        columnHeader: 'Transaction Status',
        columnType: TableColumnTypes.TEXT,
        isEditableColumn: () => false,
        styleClass: 'order-list-transaction-status-column-container',
        isSortableColumn: false,
        sortingFieldName: 'transaction_status'
      },
      {
        field: 'finalOrderTotal',
        columnHeader: 'Order Total',
        columnType: TableColumnTypes.TEXT,
        isEditableColumn: () => false,
        styleClass: 'order-list-order-total-column-container',
        isSortableColumn: true,
        sortingFieldName: 'final_order_total'
      }
    ]
  }

  getTablePaginationConfig(): TablePaginationConfig {
    const tablePaginationConfig: TablePaginationConfig = new TablePaginationConfig();
    tablePaginationConfig.pageSize = 25;
    tablePaginationConfig.pageSizeOptions = ['10', '25', '50', '100'];
    tablePaginationConfig.hidePageSize = false;
    return tablePaginationConfig;
  }

  orderStatusInputChangeHandler(searchedValue: string) {
    searchedValue = searchedValue ? searchedValue.toLowerCase().trim() : '';
    this.filteredOrderStatusList = this.orderStatusList.filter((status: string) => {
      return status && status.toLowerCase().includes(searchedValue);
    });
  }

  orderStatusFieldCloseHandler(orderStatusInputElement: HTMLInputElement) {
    if (orderStatusInputElement) {
      const searchedString = orderStatusInputElement.value ? orderStatusInputElement.value.toLowerCase().trim() : '';
      let matchedValue: string = null;
      if (searchedString) {
        matchedValue = this.orderStatusList.find((status: string) => {
          return status && status.toLowerCase() === searchedString;
        }) || null;
      }
      setFormControlValue('orderStatus', matchedValue, this.filterForm);
      orderStatusInputElement.blur();
    }
  }

  transactionStatusInputChangeHandler(searchedValue: string) {
    searchedValue = searchedValue ? searchedValue.toLowerCase().trim() : '';
    this.filteredTransactionStatusList = this.transactionStatusList.filter((status: string) => {
      return status && status.toLowerCase().includes(searchedValue);
    });
  }

  transactionStatusFieldCloseHandler(transactionStatusInputElement: HTMLInputElement) {
    if (transactionStatusInputElement) {
      const searchedString = transactionStatusInputElement.value ? transactionStatusInputElement.value.toLowerCase().trim() : '';
      let matchedValue: string = null;
      if (searchedString) {
        matchedValue = this.transactionStatusList.find((status: string) => {
          return status && status.toLowerCase() === searchedString;
        }) || null;
      }
      setFormControlValue('transactionStatus', matchedValue, this.filterForm);
      transactionStatusInputElement.blur();
    }
  }

  resetClickHandler() {
    this.filterForm.reset();
    this.refreshTableData();
  }

  filterClickHandler() {
    this.refreshTableData();
  }

  refreshTableData() {
    if (this.orderTable) {
      this.orderTable.loadTableData();
    }
  }

  openOrderDetailsModel(orderDetails: OrderListGetModel) {
    // package -> finalAmount , note/description
    // order -> finalAmount , note/description
    this.openUpdateOrderListInModal(orderDetails);
  }

  openUpdateOrderListInModal(selectedOrder: OrderListGetModel) {
    this.matDialog.open(UpdateOrderListOrderComponent, {
      data: selectedOrder
    }).afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.refreshTableData();
      })
  }

}
