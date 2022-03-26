import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupIdeaAnalysisComponent } from './startup-idea-analysis.component';

describe('StartupIdeaAnalysisComponent', () => {
  let component: StartupIdeaAnalysisComponent;
  let fixture: ComponentFixture<StartupIdeaAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupIdeaAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupIdeaAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
