import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormComponentComponent } from './dynamic-form-component.component';

describe('DynamicFormComponentComponent', () => {
  let component: DynamicFormComponentComponent;
  let fixture: ComponentFixture<DynamicFormComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormComponentComponent]
    });
    fixture = TestBed.createComponent(DynamicFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
