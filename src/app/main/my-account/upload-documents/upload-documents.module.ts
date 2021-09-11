import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadDocumentsComponent } from './upload-documents.component';
import { UploadDocumentsService } from 'src/app/service/api/upload-documents.service';
import { ReactiveFormsModule } from '@angular/forms';
import { GrowlModule } from 'src/common-ui/growl/growl.module';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [
    UploadDocumentsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    GrowlModule
  ],
  exports: [
    UploadDocumentsComponent
  ],
  providers: [
    UploadDocumentsService
  ]
})
export class UploadDocumentsModule { }
