import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EditFormRoutingModule } from './edit-form-routing.module';
import { EditFormComponent } from './edit-form.component';


@NgModule({
    imports: [
    CommonModule,
    EditFormRoutingModule,
    ReactiveFormsModule,
    EditFormComponent
]
})
export class EditFormModule { }
