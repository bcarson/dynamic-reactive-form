import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { DynamicFormComponent } from '@dynamic-form'
import { NewFormRoutingModule } from './new-form-routing.module';
import { NewFormComponent } from './new-form.component';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
    imports: [
        CommonModule,
        DynamicFormComponent,
        NewFormRoutingModule,
        MatGridListModule,
        MatNativeDateModule,
        NewFormComponent
    ]
})
export class NewFormModule { }
