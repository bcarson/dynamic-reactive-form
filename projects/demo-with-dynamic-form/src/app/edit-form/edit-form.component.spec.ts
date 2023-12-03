import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditFormComponent } from './edit-form.component';
import { AppMaterialModule } from '../../../../demo-without-dynamic-form/src/app/app-material.module';

describe('EditFormComponent', () => {
  let component: EditFormComponent;
  let fixture: ComponentFixture<EditFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [AppMaterialModule],
    declarations: [EditFormComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
