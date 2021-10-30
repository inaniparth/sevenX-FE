import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { CartDetailsService } from 'src/app/service/api/cart-details.service';
import { IncrementDecrementPackageService } from 'src/app/service/api/increment-decrement-package.service';
import { PackageRemoveService } from 'src/app/service/api/package-remove.service';
import { IncrementDecrementPackagePostModel } from 'src/app/service/models/increment-decrement-package.model';
import { PackagesListGetModel } from 'src/app/service/models/packages-list.model';
import { GrowlService } from 'src/common-ui/growl/growl.service';

@Component({
  selector: 'sevenx-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {

  @Input()
  package: PackagesListGetModel = null;

  constructor(
    private incrementDecrementPackageService: IncrementDecrementPackageService,
    private growlService: GrowlService,
    private packageRemoveService: PackageRemoveService,
    private cartDetailsService: CartDetailsService
  ) { }

  ngOnInit(): void {
  }

  decrementPackageClickHandler(event: any) {
    const postModel = this.getIncrementDecrementPackagePostModel(false);
    this.makIncrementDecrementPackageApiCall(postModel);
  }

  incrementPackageClickHandler(event: any) {
    const postModel = this.getIncrementDecrementPackagePostModel(true);
    this.makIncrementDecrementPackageApiCall(postModel);
  }

  getIncrementDecrementPackagePostModel(increment: boolean) {
    const postModel: IncrementDecrementPackagePostModel = new IncrementDecrementPackagePostModel();
    postModel.packageId = this.package && this.package.id;
    postModel.increase = increment;
    return postModel.toRemote(postModel);
  }

  makIncrementDecrementPackageApiCall(postModel: any) {
    this.incrementDecrementPackageService.post(postModel)
      .pipe(take(1))
      .subscribe(response => {
        if (response && response.status && response.status === 200) {
          this.growlService.successMessageGrowl("Package Updated Successfully");
        } else {
          this.growlService.errorMessageGrowl("Something went wrong, Please try again");
        }
        this.cartDetailsService.fetchCartDetails();
      }, () => {
        this.growlService.errorMessageGrowl("Something went wrong, Please try again");
      })
  }

  removePackageClickHandler(event: any) {
    this.packageRemoveService.delete({ packageId: this.package && this.package.id })
      .pipe(take(1))
      .subscribe(response => {
        if (response && response.status && response.status === 200) {
          this.growlService.successMessageGrowl("Package Removed Successfully");
        } else {
          this.growlService.errorMessageGrowl("Something went wrong, Please try again");
        }
        this.cartDetailsService.fetchCartDetails();
      }, () => {
        this.growlService.errorMessageGrowl("Something went wrong, Please try again");
      })
  }
}
