import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDocumentsComponent } from './my-documents.component';
import { MyDocumentsService } from 'src/app/service/api/my-documents.service';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { DocumentViwerModule } from 'src/app/document-viwer/document-viwer.module';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [
    MyDocumentsComponent
  ],
  imports: [
    CommonModule,
    NgxDocViewerModule,
    DocumentViwerModule,
    SharedModule
  ],
  exports: [
    MyDocumentsComponent
  ],
  providers: [
    MyDocumentsService
  ]
})
export class MyDocumentsModule { }
