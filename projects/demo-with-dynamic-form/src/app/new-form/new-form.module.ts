import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { DynamicReactiveFormModule } from '@dynamic-form';
import { NewFormRoutingModule } from './new-form-routing.module';
import { NewFormComponent } from './new-form.component';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [NewFormComponent],
  imports: [
    CommonModule,
    DynamicReactiveFormModule,
    NewFormRoutingModule,
    MatGridListModule,
    MatNativeDateModule
  ]
})
export class NewFormModule { }
