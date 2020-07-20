import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewFormComponent } from './new-form.component';

const routes: Routes = [{ path: '', component: NewFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewFormRoutingModule { }
