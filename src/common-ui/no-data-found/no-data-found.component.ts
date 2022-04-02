import { Component, Input, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-no-data-found',
  templateUrl: './no-data-found.component.html',
  styleUrls: ['./no-data-found.component.scss']
})
export class NoDataFoundComponent implements OnInit {

  noDataFoundAnimationOption: AnimationOptions = {
    path: 'assets/no_data_found.json'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
