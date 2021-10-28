import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { LoginSignupDialogComponent } from 'src/app/login-signup/login-signup-dialog/login-signup-dialog.component';
import { GrowlService } from 'src/common-ui/growl/growl.service';
import { AuthService } from '../auth-service/auth.service';
import { BaseService } from '../base-service/base.service';
import { AddCartPostModel } from '../models/add-cart.model';
import { StartupRegistrationsFormPostModel } from '../models/startup-registrations-form.model';
import { StartupRegistrationsFormService } from './startup-registrations-form.service';

@Injectable({
  providedIn: 'root'
})
export class AddCartService extends BaseService {
  urlPath: string = 'addCart';

  constructor(
    protected httpClient: HttpClient, 
    protected injector: Injector,
    private startupRegistrationsFormService: StartupRegistrationsFormService,
    private authService: AuthService,
    private matDialog: MatDialog,
    private growlService: GrowlService
  ) {
    super(httpClient, injector);
  }

  addItemInCart(selectedPackageId: number, requestModel: StartupRegistrationsFormPostModel = null) {
    if (selectedPackageId) {
      const saveConsultantRequest$: Promise<any> = requestModel ? this.startupRegistrationsFormService.post(requestModel).toPromise() : Promise.resolve(true);
      saveConsultantRequest$.then(() => {
        this.afterSavePlanForConsultant(selectedPackageId);
      }, () => {
        this.afterSavePlanForConsultant(selectedPackageId);
      });
    }
  }

  private afterSavePlanForConsultant(selectedPackageId: number) {
    if (this.authService.userDetails) {
      this.addSelectedItemInUserCart(selectedPackageId);
    } else {
      this.openLoginSignupDialog(selectedPackageId);
    }
  }

  private openLoginSignupDialog(selectedPackageId: number) {
    this.matDialog.open(LoginSignupDialogComponent, {
      disableClose: true,
      minWidth: '350px'
    }).afterClosed().subscribe(() => {
      if (this.authService.userDetails) {
        this.addSelectedItemInUserCart(selectedPackageId);
      } else {
        this.growlService.warnMessageGrowl('Please login to add Item in cart.')
      }
    })
  }

  private addSelectedItemInUserCart(selectedPackageId: number) {
    const postModel = new AddCartPostModel().toRemote({
      packageId: selectedPackageId
    });
    this.post(postModel)
      .pipe(take(1))
      .subscribe((response) => {
        if (response && response.status && response.status === 200) {
          this.growlService.successMessageGrowl('Item added to cart.');
        } else {
          this.growlService.errorMessageGrowl();
        }
      });
  }
}
