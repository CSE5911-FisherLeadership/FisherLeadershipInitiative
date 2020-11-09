import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BUILDAssessmentComponent } from './build-assessment.component';

describe('BUILDAssessmentComponent', () => {
  let component: BUILDAssessmentComponent;
  let fixture: ComponentFixture<BUILDAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BUILDAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BUILDAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
