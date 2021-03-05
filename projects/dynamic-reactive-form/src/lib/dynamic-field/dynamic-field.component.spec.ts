import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DynamicFieldComponent } from './dynamic-field.component';

describe('DynamicFieldComponent', () => {
  let component: DynamicFieldComponent;
  let fixture: ComponentFixture<DynamicFieldComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
