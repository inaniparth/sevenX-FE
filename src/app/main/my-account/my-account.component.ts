import { Component, OnInit, ViewChild } from '@angular/core';
import { VerticalTabViewConfig } from 'src/common-ui/vertical-tab-view/vertical-tab-view.config';
import { AccountSettingComponent } from 'src/app/main/my-account/account-setting/account-setting.component';
import { LocalstorageService } from 'src/app/service/local-storage/localstorageservice.service';
import { Router } from '@angular/router';
import { LocalStorageKeyTypes } from 'src/app/service/local-storage/local-storage-key-types';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { MyDocumentsComponent } from './my-documents/my-documents.component';

@Component({
  selector: 'sevenx-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {

  verticalTabViewConfig: VerticalTabViewConfig;

  constructor(
    private localStorageService: LocalstorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.verticalTabViewConfig = {
      tabs: [
        {
          label: 'My Orders',
          code: 'MY_ORDERS',
          iconClass: 'shopping_cart'
        },
        {
          label: 'Account Settings',
          code: 'ACCOUNT_SETTINGS',
          iconClass: 'fa fa-user',
          viewTemplate: AccountSettingComponent,
        },
        {
          label: 'Upload Documents',
          code: 'UPLOAD_DOCUMENTS',
          iconClass: 'fa fa-upload',
          viewTemplate: UploadDocumentsComponent
        },
        {
          label: 'My Documents',
          code: 'MY_DOCUMENTS',
          iconClass: 'fa fa-file',
          viewTemplate: MyDocumentsComponent
        },
        {
          label: 'Logout',
          code: 'LOGOUT',
          iconClass: 'fa fa-power-off',
          onTabSelection: this.logOutClickHandler.bind(this),
        },
      ],
    };
  }

  logOutClickHandler() {
    this.localStorageService.removeLocalStorage(LocalStorageKeyTypes.TOKEN);
    this.localStorageService.removeLocalStorage(
      LocalStorageKeyTypes.LOGIN_USER
    );
    this.router.navigate(['/']);
  }
}
