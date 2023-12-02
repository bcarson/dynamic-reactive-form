import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NewFormRoutingModule } from './new-form-routing.module';

import { NewFormComponent } from './new-form.component';


@NgModule({
    imports: [
    CommonModule,
    NewFormRoutingModule,
    ReactiveFormsModule,
    NewFormComponent
]
})
export class NewFormModule { }
