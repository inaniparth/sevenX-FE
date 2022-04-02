import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalTabViewModule } from './vertical-tab-view/vertical-tab-view.module';
import { GrowlModule } from './growl/growl.module';
import { NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';
import { TableComponent } from './table/table.component';
import { SortHeaderComponent } from './sort-header/sort-header.component';
import { SortableColumnDirective } from './directive/sortable-column.directive';
import { MaterialModule } from 'src/shared/material.module';
import { NoDataFoundComponent } from './no-data-found/no-data-found.component';
import { FormFieldErrorComponent } from './form-field-error/form-field-error.component';
import { FormFieldDirective } from './directive/form-field.directive';
import { FormGroupDirective } from './directive/form-group.directive';
import { ComingSoonModule } from './coming-soon/coming-soon.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

const COMPONENTS = [
  TableComponent,
  SortHeaderComponent,
  NoDataFoundComponent,
  FormFieldErrorComponent
];

const DIRECTIVES = [
  SortableColumnDirective,
  // PhoneFaxMaskDirective,
  // RemoveWhitespaceDirective,
  FormFieldDirective,
  FormGroupDirective
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  imports: [
    CommonModule,
    VerticalTabViewModule,
    GrowlModule,
    NgxUiLoaderModule.forRoot({
      fgsType: SPINNER.doubleBounce,
      fgsColor: "#aaaaaa",
      fgsSize: 80,
      overlayColor: "rgba(255,255,255,0.6)",
      hasProgressBar: false
    }),
    MaterialModule,
    ComingSoonModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  exports: [
    VerticalTabViewModule,
    GrowlModule,
    ComingSoonModule,
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  entryComponents: [
    FormFieldErrorComponent
  ]
})
export class CommonUiModule { }
