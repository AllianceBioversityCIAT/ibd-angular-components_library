import { TestBed } from '@angular/core/testing';

import { IbdAngularComponentsService } from './ibd-angular-components.service';

describe('IbdAngularComponentsService', () => {
  let service: IbdAngularComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IbdAngularComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
