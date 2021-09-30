import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sevenx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Output()
  ePlanSelect: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  planClickHandler(event: any) {
    const dummyAmount: number = 12;
    this.ePlanSelect.emit(dummyAmount);
  }

}
