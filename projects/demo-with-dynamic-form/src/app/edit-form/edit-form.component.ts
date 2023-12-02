import { Component, OnInit } from '@angular/core';
import { leftForm, rightForm, prefillDataLeft, prefillDataRight, errors } from '../form.constants';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { DynamicFormComponent } from '@dynamic-form';

@Component({
  standalone: true,
  selector: 'app-edit-form',
  imports: [
    CommonModule,
    MatGridListModule,
    DynamicFormComponent
  ],
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  leftForm = leftForm;
  rightForm = rightForm;
  prefillLeft = prefillDataLeft;
  prefillRight = prefillDataRight;
  errors = errors;
  constructor() { }

  ngOnInit(): void {
  }

}
