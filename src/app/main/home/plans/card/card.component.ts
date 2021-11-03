import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
    private growlService: GrowlService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  planClickHandler(event: any) {
    // this.addCartService.addItemInCart(this.package);
    this.router.navigate(['/service'], { queryParams: { screenCode: this.package.screenName } })
  }

}
