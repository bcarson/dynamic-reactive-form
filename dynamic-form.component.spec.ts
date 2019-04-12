import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { AppMaterialModule } from '../../../app-material.module';
import { SentenceCasePipe } from '../../pipes';
import { DynamicFormComponent } from './dynamic-form.component';
import { FieldComponent } from './field/field.component';


describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        AppMaterialModule,
        NgxErrorsModule
      ],
      declarations: [ 
        DynamicFormComponent,
        SentenceCasePipe,
        FieldComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
