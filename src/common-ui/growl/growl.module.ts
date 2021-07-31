import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrowlComponent } from './growl.component';
import { GrowlService } from './growl.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    GrowlComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  providers: [
    GrowlService
  ],
  exports: [
    GrowlComponent
  ]
})
export class GrowlModule { }
