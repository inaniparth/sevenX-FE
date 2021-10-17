import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { AddCartService } from 'src/app/service/api/add-cart.service';
import { AddCartPostModel } from 'src/app/service/models/add-cart.model';
import { PackageListGetModel } from 'src/app/service/models/package-list.model';
import { GrowlService } from 'src/common-ui/growl/growl.service';

@Component({
  selector: 'sevenx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  package: PackageListGetModel = null;

  constructor(
    private addCartService: AddCartService,
    private growlService: GrowlService
  ) { }

  ngOnInit(): void {
  }

  planClickHandler(event: any) {
    const postModel = new AddCartPostModel().toRemote({
      packageId: this.package && this.package.id
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

}
