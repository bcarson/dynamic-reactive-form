import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, FormGroupDirective } from '@angular/forms';
import { Field, FieldType } from '../models/dynamic-reactive-form.model';
import { SentenceCasePipe } from '../sentence-case.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
@Component({
  standalone: true,
  imports: [
    SentenceCasePipe,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule
  ],
  selector: 'lib-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.css']
})
export class DynamicFormFieldComponent implements OnInit {
  @Input() field: Field;
  public control: UntypedFormControl;
  public FieldType = FieldType;
  constructor(private formGroupDir: FormGroupDirective) { }

  ngOnInit(): void {
    /**
     * @angular/forms -> FormGroupDirective! 🎉
     *
     * https://angular.io/api/forms/FormGroupDirective
     * "Binds an existing FormGroup to a DOM element."
     *
     * We can easily access Reactive Forms functionality from this component in our
     * parent component without the need to pass our own inputs or event emitters.
     */
    this.control = this.formGroupDir.control.get(this.field.name) as UntypedFormControl;
  }
}
