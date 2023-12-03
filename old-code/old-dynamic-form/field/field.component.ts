import { Component, Input } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { Field, FieldType } from '../dynamic-form.model';

@Component({
  selector: 'ad-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent {
  @Input() field: Field;
  public control: FormControl;
  public FieldType = FieldType;
  constructor(private formGroupDir: FormGroupDirective) { }

  ngOnInit() {
    this.control = this.formGroupDir.control.get(this.field.name) as FormControl;  
  }
}
