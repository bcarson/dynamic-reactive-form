import { TestBed } from '@angular/core/testing';

import { DynamicReactiveFormService } from './dynamic-reactive-form.service';

describe('DynamicReactiveFormService', () => {
  let service: DynamicReactiveFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicReactiveFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
