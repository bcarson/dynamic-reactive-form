import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewFormComponent } from './new-form.component';
import { AppMaterialModule } from '../../../../demo-without-dynamic-form/src/app/app-material.module';

describe('NewFormComponent', () => {
  let component: NewFormComponent;
  let fixture: ComponentFixture<NewFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppMaterialModule,
        NewFormComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
