import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sevenx-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.scss'],
})
export class AccountSettingComponent implements OnInit {
  
  accountSettingForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initAccountSettingForm();
  }

  ngOnInit(): void {}

  initAccountSettingForm() {
    this.accountSettingForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      contactNumber: ['', Validators.required],
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  accountSettingSaveHandler() {
    console.log('save clicked');
  }

  changePasswordControlType(passwordControlType: string, passwordInputElement: any) {
    if (passwordInputElement) {
      passwordInputElement.type = passwordControlType;
    }
  }
}
