import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { AppMaterialModule } from '../../../app-material.module';
import { DynamicFormComponent } from './dynamic-form.component';
// import { CustomErrorStateMatcher } from './error-handler';
import { PipesModule } from '../../pipes';
import { FieldComponent } from './field/field.component';

@NgModule({
  imports: [
    AppMaterialModule,
    CommonModule,
    NgxErrorsModule,
    PipesModule,
    ReactiveFormsModule
  ],
  declarations: [ DynamicFormComponent, FieldComponent ],
  exports: [ DynamicFormComponent ]
})
export class DynamicFormModule { }
