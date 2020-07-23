import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { DynamicFormMaterialModule } from './dynamic-form-material.module';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFieldComponent } from './dynamic-field/dynamic-field.component';
import { SentenceCasePipe } from './sentence-case.pipe';

@NgModule({
  declarations: [DynamicFieldComponent, DynamicFormComponent, SentenceCasePipe],
  imports: [
    CommonModule,
    // NgxErrorsModule,
    ReactiveFormsModule,
    DynamicFormMaterialModule,
  ],
  exports: [DynamicFormComponent]
})
export class DynamicReactiveFormModule { }
