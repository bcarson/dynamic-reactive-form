import { TestBed } from '@angular/core/testing';

import { DynamicReactiveFormV2Service } from './dynamic-reactive-form-v2.service';

describe('DynamicReactiveFormV2Service', () => {
  let service: DynamicReactiveFormV2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicReactiveFormV2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
