import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNgmodelComponent } from './select-ngmodel.component';

describe('SelectNgmodelComponent', () => {
  let component: SelectNgmodelComponent;
  let fixture: ComponentFixture<SelectNgmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectNgmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectNgmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
