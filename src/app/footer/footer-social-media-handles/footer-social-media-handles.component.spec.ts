import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSocialMediaHandlesComponent } from './footer-social-media-handles.component';

describe('FooterSocialMediaHandlesComponent', () => {
  let component: FooterSocialMediaHandlesComponent;
  let fixture: ComponentFixture<FooterSocialMediaHandlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSocialMediaHandlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSocialMediaHandlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
