import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNgmodelNoRepeatComponent } from './select-ngmodel-no-repeat.component';

describe('SelectNgmodelNoRepeatComponent', () => {
  let component: SelectNgmodelNoRepeatComponent;
  let fixture: ComponentFixture<SelectNgmodelNoRepeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectNgmodelNoRepeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectNgmodelNoRepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
