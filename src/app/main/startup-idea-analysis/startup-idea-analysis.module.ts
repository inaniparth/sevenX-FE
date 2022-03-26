import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartupIdeaAnalysisComponent } from './startup-idea-analysis.component';
import { ComingSoonModule } from 'src/common-ui/coming-soon/coming-soon.module';



@NgModule({
  declarations: [
    StartupIdeaAnalysisComponent
  ],
  imports: [
    CommonModule,
    ComingSoonModule
  ],
  exports: [
    StartupIdeaAnalysisComponent
  ]
})
export class StartupIdeaAnalysisModule { }
