import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import { AddCartService } from 'src/app/service/api/add-cart.service';
import { GetPackagesService } from 'src/app/service/api/get-packages.service';
import { AddCartPostModel } from 'src/app/service/models/add-cart.model';
import { PackageListGetModel, PackageListPostModel } from 'src/app/service/models/package-list.model';
import { GrowlService } from 'src/common-ui/growl/growl.service';
import { FormPageScreenCode } from '../../form-page/form-page-constants';
// import { StripeComponent } from '../../stripe/stripe.component';

@Component({
  selector: 'sevenx-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  @Input()
  isOpenFromHome: boolean = true;

  // @ViewChild('stripeComponent')
  // stripeComponent: StripeComponent;

  packages: PackageListGetModel[] = [];

  constructor(
    private addCartService: AddCartService,
    private growlService: GrowlService,
    private getPackagesService: GetPackagesService
  ) {
    this.setPackagesPlans();
  }

  ngOnInit(): void {
  }

  show: boolean;
  slidesPerView: number = 3;
  pagination: any = false;
  slides = Array.from({ length: 5 }).map((el, index) => `Slide ${index + 1}`);
  virtualSlides = Array.from({ length: 600 }).map(
    (el, index) => `Slide ${index + 1}`
  );
  navigation = false;
  toggleNavigation() {
    this.navigation = !this.navigation;
  }
  breakpoints = {
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 40 },
    1024: { slidesPerView: 3, spaceBetween: 50 }
  };
  scrollbar: any = false;
  toggleScrollbar() {
    if (!this.scrollbar) {
      this.scrollbar = { draggable: true };
    } else {
      this.scrollbar = false;
    }
  }
  indexNumber = 1;

  planSelectHandler(dummyAmount: number) {
    // if (this.stripeComponent) {
    //   this.stripeComponent.initPayment(dummyAmount);
    // }
    const postModel = new AddCartPostModel().toRemote({
      subTotal: dummyAmount,
      gstAmount: dummyAmount,
      orderTotal: dummyAmount + dummyAmount,
      packagesList: [1]
    });
    this.addCartService.post(postModel)
      .pipe(take(1))
      .subscribe((response) => {
        if (response && response.status && response.status === 200) {
          this.growlService.successMessageGrowl('Package Added Successfully');
        } else {
          this.growlService.errorMessageGrowl('Something went wrong, please try again');
        }
      });
  }

  setPackagesPlans() {
    const postModel: PackageListPostModel = new PackageListPostModel();
    postModel.screenNameList = [
      FormPageScreenCode.PARTERSHIP_FIRM,
      FormPageScreenCode.LLP,
      FormPageScreenCode.OPC,
      FormPageScreenCode.PVT_LTD,
      FormPageScreenCode.LTD_COMPANY
    ];
    this.getPackagesService.post(postModel.toRemote(postModel))
      .pipe(take(1))
      .subscribe((response) => {
        if (response && response.status && (response.status === 200) && response.data && response.data.length) {
          this.packages = response.data.map(oPackage => {
            return new PackageListGetModel().toLocal(oPackage);
          });
        }
      })
  }
}
