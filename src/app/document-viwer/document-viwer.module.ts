import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentViwerComponent } from './document-viwer.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { ImageViewerModule } from 'ngx-image-viewer';
import { NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';


@NgModule({
  declarations: [
    DocumentViwerComponent
  ],
  imports: [
    CommonModule,
    NgxDocViewerModule,
    ImageViewerModule,
    NgxUiLoaderModule.forRoot({
      fgsType: SPINNER.doubleBounce,
      fgsColor: "#aaaaaa",
      fgsSize: 80,
      overlayColor: "rgba(255,255,255,0.6)",
      hasProgressBar: false
    }),
  ],
  exports: [
    DocumentViwerComponent
  ]
})
export class DocumentViwerModule { }
