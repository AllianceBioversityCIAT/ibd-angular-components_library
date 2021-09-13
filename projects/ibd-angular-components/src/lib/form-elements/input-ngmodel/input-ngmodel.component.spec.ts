import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNgmodelComponent } from './input-ngmodel.component';

describe('InputNgmodelComponent', () => {
  let component: InputNgmodelComponent;
  let fixture: ComponentFixture<InputNgmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputNgmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNgmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
