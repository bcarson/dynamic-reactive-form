import { NgModule } from '@angular/core';
import { DynamicReactiveFormV2Component } from './dynamic-reactive-form-v2.component';
import { DynamicFormComponentComponent } from './dynamic-form-component/dynamic-form-component.component';
import { DynamicFormFieldComponent } from './dynamic-form-field/dynamic-form-field.component';



@NgModule({
  declarations: [
    DynamicReactiveFormV2Component,
    DynamicFormComponentComponent,
    DynamicFormFieldComponent
  ],
  imports: [
  ],
  exports: [
    DynamicReactiveFormV2Component
  ]
})
export class DynamicReactiveFormV2Module { }
