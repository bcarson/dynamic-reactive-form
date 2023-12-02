import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormFieldComponent } from './dynamic-form-field.component';

describe('DynamicFormFieldComponent', () => {
  let component: DynamicFormFieldComponent;
  let fixture: ComponentFixture<DynamicFormFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormFieldComponent]
    });
    fixture = TestBed.createComponent(DynamicFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
