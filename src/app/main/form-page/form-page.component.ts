import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { GetPackagesService } from 'src/app/service/api/get-packages.service';
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
        // const mainScrollableWindowContianer = document.getElementById('mainScrollableWindowContianer');
        if (window.pageYOffset >= wrapperContainerList[i].offsetTop) {
          if (i < length && window.pageYOffset < wrapperContainerList[i + 1].offsetTop) {
            // if (mainScrollableWindowContianer.offsetHeight >= wrapperContainerList[i].offsetHeight) {
            //   if (i < length && mainScrollableWindowContianer.offsetHeight > wrapperContainerList[i + 1].offsetHeight) {
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

  // windowScrollListener: () => void;

  constructor(
    private activatedRoute: ActivatedRoute,
    private renderer: Renderer2
  ) {
    this.setActivatedRouteSubscription();
  }

  setActivatedRouteSubscription() {
    this.activatedRoute.queryParams.subscribe((value) => {
      if (value && value.screenCode) {
        this.selectedServiceScreenCode = value.screenCode;
        this.loadDataForSelectedService();
      }
    });
  }

  loadDataForSelectedService() {
    if (this.selectedServiceScreenCode && FormPageScreenWiseData[this.selectedServiceScreenCode]) {
      this.selectedServiceScreenData = JSON.parse(JSON.stringify(FormPageScreenWiseData[this.selectedServiceScreenCode]));
      this.addFooterFaqNavigationContainer();
    } else {
      this.selectedServiceScreenData = null;
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
    // const mainScrollableWindowContianer = document.getElementById('mainScrollableWindowContianer');
    // this.windowScrollListener = this.renderer.listen(mainScrollableWindowContianer, 'scroll', this.setActiveTab.bind(this));
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }

}
