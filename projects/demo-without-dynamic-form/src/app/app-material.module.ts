import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

const passThroughArray = [
  CommonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatTableModule,
  MatListModule,
  MatGridListModule
];

@NgModule({
  imports: passThroughArray,
  exports: passThroughArray
})
export class AppMaterialModule { }
