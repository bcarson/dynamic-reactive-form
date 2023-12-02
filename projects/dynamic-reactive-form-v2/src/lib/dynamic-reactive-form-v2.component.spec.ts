import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicReactiveFormV2Component } from './dynamic-reactive-form-v2.component';

describe('DynamicReactiveFormV2Component', () => {
  let component: DynamicReactiveFormV2Component;
  let fixture: ComponentFixture<DynamicReactiveFormV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicReactiveFormV2Component]
    });
    fixture = TestBed.createComponent(DynamicReactiveFormV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
