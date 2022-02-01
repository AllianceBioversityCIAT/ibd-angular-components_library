import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCounterForFieldsComponent } from './word-counter-for-fields.component';

describe('WordCounterForFieldsComponent', () => {
  let component: WordCounterForFieldsComponent;
  let fixture: ComponentFixture<WordCounterForFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordCounterForFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCounterForFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
