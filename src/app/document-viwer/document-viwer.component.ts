import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MyDocumentsGetModel } from '../service/models/my-documents.model';

@Component({
  selector: 'sevenx-document-viwer',
  templateUrl: './document-viwer.component.html',
  styleUrls: ['./document-viwer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DocumentViwerComponent implements OnInit {

  isImageDocument: boolean = false;

  LOADER_ID = "document-viewer-component-loader";

  constructor(
    private ngxUILoaderService: NgxUiLoaderService,
    @Inject(MAT_DIALOG_DATA) public data: MyDocumentsGetModel
  ) {

  }

  ngOnInit(): void {
    this.setIsImageDocumentFlag();
  }

  setIsImageDocumentFlag() {
    const documentUrl: string = this.data && this.data.documentURL && this.data.documentURL.toLowerCase();
    const imageDocumentExtensionList: string[] = ['.jpeg', '.jpg', '.png', '.gif', '.tiff', '.psd'];
    if (documentUrl) {
      this.isImageDocument = !!imageDocumentExtensionList.find((value: string) => documentUrl.includes(value));
    }
    if (!this.isImageDocument) {
      this.startLoader();
    }
  }

  startLoader() {
    this.ngxUILoaderService.startLoader(this.LOADER_ID);
  }

  stopLoader() {
    this.ngxUILoaderService.stopLoader(this.LOADER_ID);
  }

}
