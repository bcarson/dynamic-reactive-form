import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditFormComponent } from './edit-form.component';

const routes: Routes = [{ path: '', component: EditFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditFormRoutingModule { }
