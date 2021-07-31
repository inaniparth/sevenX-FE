import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { growlMessageType } from './growl-constants';
import { GrowlComponentDataInterface } from './growl.interface';

@Component({
  selector: 'sevenx-growl',
  templateUrl: './growl.component.html',
  styleUrls: ['./growl.component.scss']
})
export class GrowlComponent implements OnInit {

  growlContainerStyleClass: string = '';

  growlContainerIconClass: string = '';

  constructor(
    public snackBar: MatSnackBar,
    @Inject(MAT_SNACK_BAR_DATA) public growlData: GrowlComponentDataInterface
  ) { }

  ngOnInit(): void {
    this.growlContainerStyleClass = `${this.growlData.messageType.toLowerCase()}-message-growl-container`;
    this.growlContainerIconClass = this.getGrowlContainerIconClass();
  }

  private getGrowlContainerIconClass(): string {
    switch (this.growlData.messageType) {
      case growlMessageType.SUCCESS:
        return 'fa fa-check-circle';
      case growlMessageType.ERROR:
        return 'fa fa-times-circle';
      case growlMessageType.WARN:
        return 'fa fa-exclamation-triangle';
      case growlMessageType.INFO:
        return 'fa fa-info-circle';
    }
  }

  closeIconClickHandler() {
    this.snackBar.dismiss()
  }

}
