import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


const passThroughArray = [
  CommonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatListModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule
];

@NgModule({
  imports: passThroughArray,
  exports: passThroughArray
})
export class DynamicFormMaterialModule {}
