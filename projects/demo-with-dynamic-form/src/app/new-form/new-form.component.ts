import { Component, OnInit } from '@angular/core';
import { leftForm, rightForm, toggleSet, errors } from '../form.constants';
import { DynamicFormComponent } from '@dynamic-form';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
    selector: 'app-new-form',
    templateUrl: './new-form.component.html',
    styleUrls: ['./new-form.component.scss'],
    standalone: true,
    imports: [MatGridListModule, DynamicFormComponent, MatNativeDateModule, DynamicFormComponent]
})
export class NewFormComponent implements OnInit {
  leftForm = leftForm;
  rightForm = rightForm;
  toggleForm = toggleSet;
  errors = errors;
  constructor() { }

  ngOnInit(): void {
  }

}
