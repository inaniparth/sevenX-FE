import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormStatus, getFormControl, getFormControlValue, setFormControlValue } from 'src/app/app-utils';
import { StartupRegistrationsFormService } from 'src/app/service/api/startup-registrations-form.service';
import { LoginGetModel } from 'src/app/service/models/login.model';
import { StartupRegistrationsFormPostModel } from 'src/app/service/models/startup-registrations-form.model';
import { GrowlService } from 'src/common-ui/growl/growl.service';
import { map, startWith, take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { FormPageScreenTitleMap } from '../../form-page/form-page-data';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { PackageListGetModel, PackageListPostModel } from 'src/app/service/models/package-list.model';
import { FormPageScreenCode } from '../../form-page/form-page-constants';
import { GetPackagesService } from 'src/app/service/api/get-packages.service';

export interface ScreenNameDropDown {
  screenCode: string;
  screenName: string;
}

@Component({
  selector: 'sevenx-startup-registrations-form',
  templateUrl: './startup-registrations-form.component.html',
  styleUrls: ['./startup-registrations-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StartupRegistrationsFormComponent implements OnInit {

  @Input()
  isOpenFromContact: boolean = false;

  baseForm: FormGroup;

  screenList: ScreenNameDropDown[] = Object.keys(FormPageScreenTitleMap).map((screenCode: string) => 
    {
      return {
        screenCode: screenCode,
        screenName: FormPageScreenTitleMap[screenCode]
      }
    }
  );

  filteredScreenList: ScreenNameDropDown[];

  displayWithScreenNameFn = (screen: ScreenNameDropDown) => screen && `${screen.screenName || ''}`;

  selectedScreenPackage: PackageListGetModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private getPackagesService: GetPackagesService,
    private growlService: GrowlService,
    private startupRegistrationsFormService: StartupRegistrationsFormService
  ) {
    this.init();
  }

  init() {
    this.initBaseForm();
    this.setActivatedRouteSubscription();
  }

  initBaseForm() {
    this.baseForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', Validators.required],
      screenName: ['', Validators.required]
    });
    this.autoPopulateFormData();
  }

  autoPopulateFormData() {
    const userDetails: LoginGetModel = this.authService && this.authService.userDetails;
    if (userDetails) {
      setFormControlValue('name', userDetails.firstName, this.baseForm);
      setFormControlValue('email', this.authService.loginUser, this.baseForm);
      setFormControlValue('contactNo', userDetails.phoneNo, this.baseForm);
    }
  }

  setActivatedRouteSubscription() {
    this.activatedRoute.queryParams.subscribe((value) => {
      if (!this.isOpenFromContact && value && value.screenCode) {
        this.setScreenNameFormControlValue(FormPageScreenTitleMap[value.screenCode]);
        this.setSelectedScreenPackage(value.screenCode);
      }
    });
  }

  setSelectedScreenPackage(selectedScreenCode: FormPageScreenCode) {
    if (selectedScreenCode) {
      const postModel: PackageListPostModel = new PackageListPostModel();
      postModel.screenNameList = [
        selectedScreenCode
      ];
      this.getPackagesService.post(postModel.toRemote(postModel))
        .pipe(take(1))
        .subscribe((response) => {
          if (response && response.status && (response.status === 200) && response.data && response.data.length) {
            this.selectedScreenPackage = new PackageListGetModel().toLocal(response.data[0]);
          }
        });
    }
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
      setFormControlValue('screenName', matchedValue, this.baseForm);
  }

  ngOnInit() {

  }

  registerClickHandler() {
    if (this.baseForm && this.baseForm.status && this.baseForm.status.toUpperCase() === FormStatus.INVALID.toUpperCase()) {
      return;
    } else {
      const startupRegistrationsFormPostModel = new StartupRegistrationsFormPostModel().toRemote({
        name: getFormControlValue('name', this.baseForm),
        email: getFormControlValue('email', this.baseForm),
        contactNo: getFormControlValue('contactNo', this.baseForm),
        state: '',
        screenName: getFormControlValue('screenName', this.baseForm).screenCode
      });
      this.registerRequest(startupRegistrationsFormPostModel);
    }
  }

  registerRequest(startupRegistrationsFormPostModel) {
    this.startupRegistrationsFormService.post(startupRegistrationsFormPostModel)
      .pipe(take(1))
      .subscribe((response) => {
        if (response && response.data && response.status === 200) {
          this.growlService.successMessageGrowl('Contact details saved Successfully');
          // logic if any
        } else {
          this.growlService.errorMessageGrowl('An Error occured, please contact Admin');
        }
      });
  }


}
