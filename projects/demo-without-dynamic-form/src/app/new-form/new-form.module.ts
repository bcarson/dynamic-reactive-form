import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewFormRoutingModule } from './new-form-routing.module';
import { AppMaterialModule } from '../app-material.module';
import { NewFormComponent } from './new-form.component';


@NgModule({
  declarations: [NewFormComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    NewFormRoutingModule
  ]
})
export class NewFormModule { }
