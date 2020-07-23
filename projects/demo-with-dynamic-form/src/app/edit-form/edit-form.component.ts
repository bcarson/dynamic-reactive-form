import { Component, OnInit } from '@angular/core';
import { leftForm, rightForm, prefillDataLeft, prefillDataRight } from '../form.constants';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  leftForm = leftForm;
  rightForm = rightForm;
  prefillLeft = prefillDataLeft;
  prefillRight = prefillDataRight;
  constructor() { }

  ngOnInit(): void {
  }

}
