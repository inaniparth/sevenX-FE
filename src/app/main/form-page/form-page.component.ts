import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { GetPackagesService } from 'src/app/service/api/get-packages.service';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { PackageListGetModel, PackageListPostModel } from 'src/app/service/models/package-list.model';
import { FooterFaqContainerKey, FormPageContainerType, FormPageScreenCode } from './form-page-constants';
import { FormPageScreenWiseData } from './form-page-data';
import { FormPageNavigationContainerModel, FormPageScreenWiseDataModel } from './form-page-interface';


@Component({
  selector: 'sevenx-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  formPageContainerType = FormPageContainerType;

  activeTab: string;

  @HostListener('window: scroll', ['$event'])
  setActiveTab() {
    this.activeTab = '';
    const wrapperContainerList: any = document.getElementsByClassName('form-page-container-wrapper-container');
    if (wrapperContainerList && wrapperContainerList.length) {
      for (let i = 0; i < wrapperContainerList.length; i++) {
        if (window.pageYOffset >= wrapperContainerList[i].offsetTop) {
          if (i < length && window.pageYOffset < wrapperContainerList[i + 1].offsetTop) {
            this.activeTab = wrapperContainerList[i].id;
          } else {
            this.activeTab = wrapperContainerList[i].id;
          }
        }
      }
    }
  }

  selectedServiceScreenCode: FormPageScreenCode;

  selectedServiceScreenData: FormPageScreenWiseDataModel;

  dataToBeAutoPopulate: any = null;

  packagesAgainstScreen: PackageListGetModel[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private getPackagesService: GetPackagesService
  ) {
    this.setActivatedRouteSubscription();
  }

  setActivatedRouteSubscription() {
    this.activatedRoute.queryParams.subscribe((value) => {
      if (value && value.screenCode) {
        this.selectedServiceScreenCode = value.screenCode;
        this.loadDataForSelectedService();
        this.autoPopulateCunsultancyData();
        this.setPackagesPlans();
      }
    });
  }

  setPackagesPlans() {
    if (this.selectedServiceScreenCode) {
      const postModel: PackageListPostModel = new PackageListPostModel();
      postModel.screenNameList = [
        this.selectedServiceScreenCode
      ];
      this.getPackagesService.post(postModel.toRemote(postModel))
        .pipe(take(1))
        .subscribe((response) => {
          if (response && response.status && (response.status === 200) && response.data && response.data.length) {
            this.packagesAgainstScreen = response.data.map(oPackage => {
              return new PackageListGetModel().toLocal(oPackage);
            });
          }
        });
    }
  }

  autoPopulateCunsultancyData() {
    if (this.authService && this.authService.userDetails) {
      this.dataToBeAutoPopulate = {
        name: this.authService.userDetails.firstName,
        email: this.authService.loginUser,
        contactNo: this.authService.userDetails.phoneNo,
        state: this.authService.userDetails.address
      }
    }
  }

  loadDataForSelectedService() {
    if (this.selectedServiceScreenCode) {
      this.selectedServiceScreenData = JSON.parse(JSON.stringify(FormPageScreenWiseData[this.selectedServiceScreenCode]));
      this.addFooterFaqNavigationContainer();
    }
  }

  addFooterFaqNavigationContainer() {
    if (this.selectedServiceScreenData) {
      const footerNavigationContainer: FormPageNavigationContainerModel = {
        title: 'FAQs',
        description: '',
        navigationTitle: 'FAQs',
        containerKey: FooterFaqContainerKey,
        type: FormPageContainerType.FAQ,
        value: null
      }
      if (this.selectedServiceScreenData.navigationContainers && this.selectedServiceScreenData.navigationContainers.length) {
        this.selectedServiceScreenData.navigationContainers.push(footerNavigationContainer);
      } else {
        this.selectedServiceScreenData.navigationContainers = [footerNavigationContainer];
      }
    }
  }

  ngOnInit(): void {
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }

}
