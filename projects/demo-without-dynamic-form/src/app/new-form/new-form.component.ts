import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
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
