import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { getFormControl, getScreenNameDropdownList, getStateList, ScreenNameDropDown, setFormControlValue } from 'src/app/app-utils';
import { SortingOrder } from 'src/common-ui/directive/sortable-column.directive';
import { TableColumnsConfig, TableConfig, TablePaginationConfig } from 'src/common-ui/table/table-config';
import { TableColumnTypes } from 'src/common-ui/table/table-constants';
import { TableComponent } from 'src/common-ui/table/table.component';

@Component({
  selector: 'sevenx-consultant-list',
  templateUrl: './consultant-list.component.html',
  styleUrls: ['./consultant-list.component.scss']
})
export class ConsultantListComponent implements OnInit {

  @ViewChild('consultantTable')
  consultantTable: TableComponent;

  tableConfig: TableConfig;

  tableColumnsConfig: TableColumnsConfig[];

  tablePaginationConfig: TablePaginationConfig;

  screenList: ScreenNameDropDown[] = getScreenNameDropdownList();

  filteredScreenList: ScreenNameDropDown[];

  displayWithScreenNameFn = (screen: ScreenNameDropDown) => screen && `${screen.screenName || ''}`;

  stateList: string[] = getStateList();

  filteredStateList: string[] = [];

  filterForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initFilterForm();
    this.setTableComponentConfig();
  }

  initFilterForm() {
    this.filterForm = this.formBuilder.group({
      fromDate: [],
      toDate: [],
      name: [],
      email: [],
      contactNo: [],
      state: [],
      screenName: []
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
    tableConfig.defaultSortingDetails = { sortField: 'name', sortOrder: SortingOrder.ASCENDING };
    tableConfig.dataLoadFunction = this.dataLoadFunction.bind(this);
    return tableConfig;
  }

  dataLoadFunction(requestModel: any) {
    const filterModel = this.getFilterRequestModel();
    if (filterModel) {
      requestModel = requestModel ? Object.assign(requestModel, filterModel) : Object.assign({}, filterModel);
    }
    return of([]);
  }

  getFilterRequestModel() {
    const filterModel = JSON.parse(JSON.stringify(this.filterForm.getRawValue()));
    if (filterModel.fromDate) {
      filterModel.fromDate = Date.parse(filterModel.fromDate);
    }
    if (filterModel.toDate) {
      filterModel.toDate = Date.parse(filterModel.toDate);
    }
    if (filterModel.screenName) {
      filterModel.screenName = filterModel.screenName.screenCode;
    }
    return filterModel;
  }

  getTableColumnsConfig(): TableColumnsConfig[] {
    return [
      {
        field: 'name',
        columnHeader: 'Name',
        columnType: TableColumnTypes.TEXT,
        isEditableColumn: () => false,
        styleClass: 'width100',
        isSortableColumn: true
      }
    ]
  }

  getTablePaginationConfig(): TablePaginationConfig {
    const tablePaginationConfig: TablePaginationConfig = new TablePaginationConfig();
    tablePaginationConfig.pageSize = 25;
    tablePaginationConfig.pageSizeOptions = ['10', '25', '50', '100'];
    return tablePaginationConfig;
  }

  screenNameInputChangeHandler(searchedValue: string) {
    searchedValue = searchedValue ? searchedValue.toLowerCase().trim() : '';
    this.filteredScreenList = this.screenList.filter((screen: ScreenNameDropDown) => {
      return screen && screen.screenName && screen.screenName.toLowerCase().includes(searchedValue);
    });
  }

  screenNameFieldCloseHandler(screenNameInputElement: HTMLInputElement) {
    if (screenNameInputElement) {
      this.setScreenNameFormControlValue(screenNameInputElement.value);
      screenNameInputElement.blur();
    }
  }

  setScreenNameFormControlValue(searchedString: string) {
    searchedString = searchedString ? searchedString.toLowerCase().trim() : '';
    let matchedValue: ScreenNameDropDown = null;
    if (searchedString) {
      matchedValue = this.screenList.find((screen: ScreenNameDropDown) => {
        return screen && screen.screenName && screen.screenName.toLowerCase() === searchedString;
      }) || null;
    }
    setFormControlValue('screenName', matchedValue, this.filterForm);
  }

  stateInputChangeHandler(searchedValue: string) {
    searchedValue = searchedValue ? searchedValue.toLowerCase().trim() : '';
    this.filteredStateList = this.stateList.filter((state: string) => {
      return state && state.toLowerCase().includes(searchedValue);
    });
  }

  stateFieldCloseHandler(stateInputElement: HTMLInputElement) {
    if (stateInputElement) {
      const searchedString = stateInputElement.value ? stateInputElement.value.toLowerCase().trim() : '';
      let matchedValue: string = null;
      if (searchedString) {
        matchedValue = this.stateList.find((state: string) => {
          return state && state.toLowerCase() === searchedString;
        }) || null;
      }
      setFormControlValue('state', matchedValue, this.filterForm);
      stateInputElement.blur();
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
    if (this.consultantTable) {
      this.consultantTable.loadTableData();
    }
  }

}
