import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table';

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
export class AppMaterialModule {}
