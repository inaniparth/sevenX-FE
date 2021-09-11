import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDocumentsComponent } from './my-documents.component';
import { MyDocumentsService } from 'src/app/service/api/my-documents.service';
import { NgxDocViewerModule } from 'ngx-doc-viewer';



@NgModule({
  declarations: [
    MyDocumentsComponent
  ],
  imports: [
    CommonModule,
    NgxDocViewerModule
  ],
  exports: [
    MyDocumentsComponent
  ],
  providers: [
    MyDocumentsService
  ]
})
export class MyDocumentsModule { }
