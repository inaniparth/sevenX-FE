import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentViwerComponent } from './document-viwer.component';

describe('DocumentViwerComponent', () => {
  let component: DocumentViwerComponent;
  let fixture: ComponentFixture<DocumentViwerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentViwerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentViwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
