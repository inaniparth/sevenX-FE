import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormStatus, getFormControl } from 'src/app/app-utils';
import { AccountSettingService } from 'src/app/service/api/account-setting.service';
import { AccountSettingGetModel, AccountSettingPostModel } from 'src/app/service/models/account-setting.model';

@Component({
  selector: 'sevenx-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.scss'],
})
export class AccountSettingComponent implements OnInit {
  accountSettingForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private accountSettingService: AccountSettingService
  ) {
    this.initAccountSettingForm();
  }

  ngOnInit(): void {
    this.getUserData();
  }

  initAccountSettingForm() {
    this.accountSettingForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
      email: ['', Validators.required],
      contactNumber: ['', Validators.required],
      currentPassword: [''],
      newPassword: [''],
      confirmPassword: [''],
    });
  }

  accountSettingSaveHandler() {
    if (this.accountSettingForm && this.accountSettingForm.status && this.accountSettingForm.status.toUpperCase() === FormStatus.VALID.toUpperCase()) {
      const postModel: AccountSettingPostModel = new AccountSettingPostModel().toRemote(this.accountSettingForm.value);
      this.accountSettingService.put(postModel).subscribe((response) => {
        if (response && response.status && response.status === 200) {
          this.getUserData();
        }
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
      if (
        response &&
        response.status &&
        response.status === 200 &&
        response.data
      ) {
        const userData: AccountSettingGetModel = new AccountSettingGetModel().toLocal(response.data);
        if (this.accountSettingForm) {
          this.accountSettingForm.reset(userData);
          const emailFormControl: FormControl = getFormControl('email', this.accountSettingForm);
          if (emailFormControl) {
            emailFormControl.disable();
          }
        }
      }
    });
  }
}
