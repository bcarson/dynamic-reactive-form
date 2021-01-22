import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormComponent } from './new-form.component';
import { AppMaterialModule } from '../app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

describe('NewFormComponent', () => {
  let component: NewFormComponent;
  let fixture: ComponentFixture<NewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AppMaterialModule
      ],
      declarations: [ NewFormComponent ]
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
