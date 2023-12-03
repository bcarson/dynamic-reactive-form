import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
    selector: 'app-new-form',
    templateUrl: './new-form.component.html',
    styleUrls: ['./new-form.component.scss'],
    standalone: true,
    imports: [MatGridListModule, ReactiveFormsModule, MatListModule, MatFormFieldModule, MatInputModule, MatSelectModule, NgFor, MatOptionModule]
})
export class NewFormComponent implements OnInit {
  formLeft = new UntypedFormGroup({
    firstName: new UntypedFormControl(''),
    lastName: new UntypedFormControl(''),
    faveFood: new UntypedFormControl(''),
    faveColor: new UntypedFormControl('')
  });

  formRight = new UntypedFormGroup({
    phone: new UntypedFormControl(''),
    email: new UntypedFormControl(''),
    faveSeason: new UntypedFormControl(''),
    faveMusic: new UntypedFormControl('')
  });

  foods = [
    {value: 'icecream-0', viewValue: 'Ice Cream'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  colors = ['Red', 'Blue', 'Yellow'];
  seasons = ['Spring', 'Summer', 'Fall', 'Winter'];
  musics = ['Classic', 'Country', 'Folk', 'Rap', 'Rock'];

  ngOnInit(): void {
    this.formLeft.valueChanges.subscribe(values => {
      console.log('what changed on the left?', values);
    });

    this.formRight.valueChanges.subscribe(values => {
      console.log('what changed on the right?', values);
    });
  }

}
