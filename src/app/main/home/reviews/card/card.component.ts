import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sevenx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  cardData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
