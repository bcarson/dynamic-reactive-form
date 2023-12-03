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
    selector: 'app-edit-form',
    templateUrl: './edit-form.component.html',
    styleUrls: ['./edit-form.component.scss'],
    standalone: true,
    imports: [MatGridListModule, ReactiveFormsModule, MatListModule, MatFormFieldModule, MatInputModule, MatSelectModule, NgFor, MatOptionModule]
})
export class EditFormComponent implements OnInit {
  formLeft = new UntypedFormGroup({
    firstName: new UntypedFormControl('Mickey'),
    lastName: new UntypedFormControl('Mouse'),
    faveFood: new UntypedFormControl('Pizza'),
    faveColor: new UntypedFormControl('Blue')
  });

  formRight = new UntypedFormGroup({
    phone: new UntypedFormControl('123-456-1212'),
    email: new UntypedFormControl('mickey@disney.com'),
    faveSeason: new UntypedFormControl('Summer'),
    faveMusic: new UntypedFormControl('Rock')
  });

  foods = ['Pizza', 'Ice Cream', 'Tacos'];
  colors = ['Red', 'Blue', 'Yellow'];
  seasons = ['Spring', 'Summer', 'Fall', 'Winter'];
  musics = ['Classical', 'Country', 'Folk', 'Rap', 'Rock'];

  ngOnInit(): void {
    this.formLeft.valueChanges.subscribe(values => {
      console.log('what changed on the left?', values);
    });

    this.formRight.valueChanges.subscribe(values => {
      console.log('what changed on the right?', values);
    });
  }

}
