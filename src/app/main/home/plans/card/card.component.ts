import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PackageListGetModel } from 'src/app/service/models/package-list.model';

@Component({
  selector: 'sevenx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Output()
  ePlanSelect: EventEmitter<any> = new EventEmitter();

  @Input()
  package: PackageListGetModel = null;

  constructor() { }

  ngOnInit(): void {
  }

  planClickHandler(event: any) {
    const dummyAmount: number = 12;
    this.ePlanSelect.emit(dummyAmount);
  }

}
