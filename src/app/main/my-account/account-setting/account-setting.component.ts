import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormStatus, getFormControl, getStateList, setFormControlValue } from 'src/app/app-utils';
import { AccountSettingService } from 'src/app/service/api/account-setting.service';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { AccountSettingGetModel, AccountSettingPostModel } from 'src/app/service/models/account-setting.model';
import { GrowlService } from 'src/common-ui/growl/growl.service';

@Component({
  selector: 'sevenx-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.scss'],
})
export class AccountSettingComponent implements OnInit {

  accountSettingForm: FormGroup;

  stateList: string[] = getStateList();

  filteredStateList: string[] = [];

  get isUserLoggedInThroughGoogle(): boolean {
    return !!(this.authService && this.authService.userDetails && this.authService.userDetails.socialId);
  }

  constructor(
    private formBuilder: FormBuilder,
    private accountSettingService: AccountSettingService,
    private growlService: GrowlService,
    private authService: AuthService
  ) {
    this.initAccountSettingForm();
  }

  ngOnInit(): void {
    this.getUserData();
  }

  initAccountSettingForm() {
    this.accountSettingForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', Validators.required],
      contactNumber: ['', Validators.required],
      password: ['', [this.passwordValidator.bind(this)]],
      newPassword: ['', [this.newPasswordValidator.bind(this)]],
      confirmPassword: ['', [this.matchPasswordValidator.bind(this)]],
      address: [''],
      state: [''],
      gstNumber: [''],
      panNumber: ['']
    });
    this.passwordValueChangeHandler();
  }

  private passwordValueChangeHandler() {
    this.accountSettingForm.get('password').valueChanges.subscribe((value: string) => {
      const dependentFormFields: string[] = ['newPassword', 'confirmPassword'];
      if (value && value.length) {
        dependentFormFields.forEach((field: string) => {
          const formControl: FormControl = getFormControl(field, this.accountSettingForm);
          if (formControl) {
            formControl.enable();
          }
        });
      } else {
        dependentFormFields.forEach((field: string) => {
          const formControl: FormControl = getFormControl(field, this.accountSettingForm);
          if (formControl) {
            formControl.setValue('');
            formControl.disable();
          }
        });
      }
    })
  }

  private passwordValidator(formControl: FormControl) {
    const passwordValue: string = formControl.parent ? formControl.parent.get('password').value : '';
    if (passwordValue && passwordValue.length < 8) {
      return { minlength: { requiredLength: 8, actualLength: passwordValue.length } };
    }
    return null;
  }

  private newPasswordValidator(formControl: FormControl) {
    const newPasswordValue: string = formControl.parent ? formControl.parent.get('newPassword').value : '';
    if (newPasswordValue && newPasswordValue.length < 8) {
      return { minlength: { requiredLength: 8, actualLength: newPasswordValue.length } };
    }
    return null;
  }

  private matchPasswordValidator(formControl: FormControl) {
    const newPasswordValue: string = formControl.parent ? formControl.parent.get('newPassword').value : '';
    if (newPasswordValue !== formControl.value) {
      return { 'passwordNotMatched': true };
    }
    return null;
  }

  accountSettingSaveHandler() {
    if (this.accountSettingForm && this.accountSettingForm.status && this.accountSettingForm.status.toUpperCase() === FormStatus.VALID.toUpperCase()) {
      const postModel: AccountSettingPostModel = new AccountSettingPostModel().toRemote(this.accountSettingForm.value);
      this.accountSettingService.put(postModel).subscribe((response) => {
        if (response && response.status === 200 && response.data) {
          this.growlService.successMessageGrowl('User Details Updated Successfully!')
          this.getUserDataSuccessHandler(response.data);
          this.authService.loggedInUserDetails$.next(response.data)
        } else {
          this.growlService.errorMessageGrowl();
        }
      }, () => {
        this.growlService.errorMessageGrowl();
      })
    }
  }

  changePasswordControlType(
    passwordControlType: string,
    passwordInputElement: any
  ) {
    if (passwordInputElement) {
      passwordInputElement.type = passwordControlType;
    }
  }

  getUserData() {
    this.accountSettingService.get().subscribe((response) => {
      if (response && response.status === 200 && response.data) {
        this.getUserDataSuccessHandler(response.data);
      } else {
        this.growlService.errorMessageGrowl();
      }
    }, () => {
      this.growlService.errorMessageGrowl();
    });
  }

  private getUserDataSuccessHandler(responseData: any) {
    const userData: AccountSettingGetModel = new AccountSettingGetModel().toLocal(responseData);
    if (this.accountSettingForm) {
      this.accountSettingForm.reset(userData);
      const defaultDisableFields: string[] = ['email', 'newPassword', 'confirmPassword'];
      defaultDisableFields.forEach((field: string) => {
        const formControl: FormControl = getFormControl(field, this.accountSettingForm);
        if (formControl) {
          formControl.disable();
        }
      });
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
      setFormControlValue('state', matchedValue, this.accountSettingForm);
      stateInputElement.blur();
    }
  }
}
