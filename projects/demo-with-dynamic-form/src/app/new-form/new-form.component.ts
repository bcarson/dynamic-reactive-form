import { Component, OnInit } from '@angular/core';
import { leftForm, rightForm, toggleSet } from '../form.constants';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {
  leftForm = leftForm;
  rightForm = rightForm;
  toggleForm = toggleSet;
  constructor() { }

  ngOnInit(): void {
  }

}
