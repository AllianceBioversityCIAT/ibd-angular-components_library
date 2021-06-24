import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbdAngularComponentsComponent } from './ibd-angular-components.component';

describe('IbdAngularComponentsComponent', () => {
  let component: IbdAngularComponentsComponent;
  let fixture: ComponentFixture<IbdAngularComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbdAngularComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbdAngularComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
