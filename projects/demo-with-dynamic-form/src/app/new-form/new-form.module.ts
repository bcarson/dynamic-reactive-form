import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewFormRoutingModule } from './new-form-routing.module';
import { NewFormComponent } from './new-form.component';


@NgModule({
  declarations: [NewFormComponent],
  imports: [
    CommonModule,
    NewFormRoutingModule
  ]
})
export class NewFormModule { }
