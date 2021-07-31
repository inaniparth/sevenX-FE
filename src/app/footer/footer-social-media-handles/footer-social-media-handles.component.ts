import { Component, OnInit } from '@angular/core';
import { growlMessageType } from 'src/common-ui/growl/growl-constants';
import { GrowlService } from 'src/common-ui/growl/growl.service';

@Component({
  selector: 'sevenx-footer-social-media-handles',
  templateUrl: './footer-social-media-handles.component.html',
  styleUrls: ['./footer-social-media-handles.component.scss']
})
export class FooterSocialMediaHandlesComponent implements OnInit {

  constructor(
    private growlService: GrowlService
  ) { }

  ngOnInit(): void {
  }

  successMessageGrowl() {
    this.growlService.showGrowlMessage({ message: `User's information saved successfully in the global database.`, messageType: growlMessageType.SUCCESS });
  }

  errorMessageGrowl() {
    this.growlService.showGrowlMessage({ message: 'show error message', messageType: growlMessageType.ERROR });
  }

  warnMessageGrowl() {
    this.growlService.showGrowlMessage({ message: 'show warn message', messageType: growlMessageType.WARN });
  }

  infoMessageGrowl() {
    this.growlService.showGrowlMessage({ message: 'show info message', messageType: growlMessageType.INFO });
  }

}
