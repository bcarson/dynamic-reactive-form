import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  {
    path: 'editForm',
    loadChildren: () =>
      import('./edit-form/edit-form.routes')
        .then(m => m.EDIT_FORM_ROUTES)
  },
  {
    path: 'newForm',
    loadChildren: () =>
      import('./new-form/new-form.routes')
        .then(m => m.NEW_FORM_ROUTES)
  },
];
