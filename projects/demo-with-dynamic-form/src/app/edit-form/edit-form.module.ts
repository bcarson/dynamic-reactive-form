import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { DynamicReactiveFormModule } from '@dynamic-form';
import { EditFormRoutingModule } from './edit-form-routing.module';
import { EditFormComponent } from './edit-form.component';


@NgModule({
  declarations: [EditFormComponent],
  imports: [
    CommonModule,
    EditFormRoutingModule,
    MatGridListModule,
    DynamicReactiveFormModule
  ]
})
export class EditFormModule { }
