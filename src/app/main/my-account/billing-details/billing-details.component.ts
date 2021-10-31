import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormStatus, getFormControlValue, getStateList, setFormControlValue } from 'src/app/app-utils';
import { CartDetailsService } from 'src/app/service/api/cart-details.service';
import { SaveOrderService } from 'src/app/service/api/save-order.service';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { LoginGetModel } from 'src/app/service/models/login.model';
import { GrowlService } from 'src/common-ui/growl/growl.service';

@Component({
  selector: 'sevenx-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.scss']
})
export class BillingDetailsComponent implements OnInit {

  billingDetailsForm: FormGroup;

  stateList: string[] = getStateList();

  filteredStateList: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private saveOrderService: SaveOrderService,
    private growlService: GrowlService,
    private authService: AuthService,
    private router: Router,
    private cartDetailsService: CartDetailsService
  ) {
    this.initBillingDetailsForm();
  }

  ngOnInit(): void {
  }

  initBillingDetailsForm() {
    this.billingDetailsForm = this.formBuilder.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      phoneNo: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      gstNumber: [],
      panNumber: []
    });
    this.autoPopulateFormData();
  }

  billingDetailsSaveHandler() {
    if (this.billingDetailsForm && this.billingDetailsForm.status && (this.billingDetailsForm.status.toUpperCase() === FormStatus.VALID.toUpperCase())) {
      this.saveOrderService.post({
        userName: getFormControlValue('userName', this.billingDetailsForm),
        firstName: getFormControlValue('firstName', this.billingDetailsForm),
        phoneNo: getFormControlValue('phoneNo', this.billingDetailsForm),
        address: getFormControlValue('address', this.billingDetailsForm),
        state: getFormControlValue('state', this.billingDetailsForm),
        gstNumber: getFormControlValue('gstNumber', this.billingDetailsForm),
        panNumber: getFormControlValue('panNumber', this.billingDetailsForm),
      }).subscribe((response) => {
        if (response && response.status && response.status === 200) {
          this.growlService.successMessageGrowl('Order Placed Successfully');
          this.cartDetailsService.makeCartAsEmpty();
          this.router.navigate(['/my-account']);
        } else {
          this.growlService.errorMessageGrowl();
        }
      }, () => {
        this.growlService.errorMessageGrowl();
      });
    }
  }

  autoPopulateFormData() {
    const userDetails: LoginGetModel = this.authService && this.authService.userDetails;
    if (userDetails) {
      setFormControlValue('firstName', userDetails.firstName, this.billingDetailsForm);
      setFormControlValue('userName', this.authService.loginUser, this.billingDetailsForm);
      setFormControlValue('phoneNo', userDetails.phoneNo, this.billingDetailsForm);

      setFormControlValue('address', userDetails.address, this.billingDetailsForm);
      setFormControlValue('state', userDetails.state, this.billingDetailsForm);

      setFormControlValue('gstNumber', userDetails.gstNumber, this.billingDetailsForm);
      setFormControlValue('panNumber', userDetails.panNumber, this.billingDetailsForm);
    }
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
      setFormControlValue('state', matchedValue, this.billingDetailsForm);
      stateInputElement.blur();
    }
  }

}
