import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material.module';
import { EditFormRoutingModule } from './edit-form-routing.module';
import { EditFormComponent } from './edit-form.component';


@NgModule({
  declarations: [EditFormComponent],
  imports: [
    AppMaterialModule,
    CommonModule,
    EditFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class EditFormModule { }
