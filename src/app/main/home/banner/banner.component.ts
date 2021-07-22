import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sevenx-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  placeholder_samples = ["'Company Registration'", "'GST Filling'"];
}
