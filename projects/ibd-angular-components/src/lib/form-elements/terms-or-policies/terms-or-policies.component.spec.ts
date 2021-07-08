import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsOrPoliciesComponent } from './terms-or-policies.component';

describe('TermsOrPoliciesComponent', () => {
  let component: TermsOrPoliciesComponent;
  let fixture: ComponentFixture<TermsOrPoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsOrPoliciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsOrPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
