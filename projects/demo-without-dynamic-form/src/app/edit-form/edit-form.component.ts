import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
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
