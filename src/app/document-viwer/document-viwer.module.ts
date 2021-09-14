import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentViwerComponent } from './document-viwer.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';


@NgModule({
  declarations: [
    DocumentViwerComponent
  ],
  imports: [
    CommonModule,
    NgxDocViewerModule
  ],
  exports: [
    DocumentViwerComponent
  ]
})
export class DocumentViwerModule { }
