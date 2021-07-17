import { Component, OnInit, ViewChild } from '@angular/core';
import { VerticalTabViewConfig } from 'src/common-ui/vertical-tab-view/vertical-tab-view.config';
import { AccountSettingComponent } from 'src/app/main/my-account/account-setting/account-setting.component';

@Component({
  selector: 'sevenx-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  verticalTabViewConfig: VerticalTabViewConfig;

  constructor() { }

  ngOnInit(): void {
    this.verticalTabViewConfig = {
      tabs: [
        {
          label: 'My Orders',
          code: 'MY_ORDERS',
          iconClass: 'shopping_cart',
          viewTemplate: AccountSettingComponent
        },
        {
          label: 'Account Settings',
          code: 'ACCOUNT_SETTINGS',
          iconClass: 'fa fa-user',
          viewTemplate: AccountSettingComponent
        },
        {
          label: 'Upload Documents',
          code: 'UPLOAD_DOCUMENTS',
          iconClass: 'fa fa-upload',
          viewTemplate: AccountSettingComponent
        },
        {
          label: 'Logout',
          code: 'LOGOUT',
          iconClass: 'fa fa-power-off',
          onTabSelection: () => console.log('logout click handler')
        }
      ]
    }
  }

}
