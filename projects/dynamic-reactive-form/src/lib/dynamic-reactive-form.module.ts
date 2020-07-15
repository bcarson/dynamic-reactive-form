import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { SharedMaterialModule } from './material.module';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFieldComponent } from './dynamic-field/dynamic-field.component';

@NgModule({
  declarations: [DynamicFormComponent],
  imports: [
    CommonModule,
    DynamicFieldComponent,
    NgxErrorsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
  ],
  exports: [DynamicFormComponent]
})
export class DynamicReactiveFormModule { }
