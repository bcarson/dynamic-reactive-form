import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  formLeft = new FormGroup({
    firstName: new FormControl('Mickey'),
    lastName: new FormControl('Mouse'),
    faveFood: new FormControl('Pizza'),
    faveColor: new FormControl('Blue')
  });

  formRight = new FormGroup({
    phone: new FormControl('123-456-1212'),
    email: new FormControl('mickey@disney.com'),
    faveSeason: new FormControl('Summer'),
    faveMusic: new FormControl('Rock')
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
