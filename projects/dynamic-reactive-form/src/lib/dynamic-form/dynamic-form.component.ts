import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { KeyValuePair } from '../dynamic-reactive-form.model';

@Component({
  selector: 'lib-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  /**
   * Initialize Inputs passed in from parent component
   */
  @Input() fieldset; // Required
  @Input() errors; // Optional
  @Input() prefillData; // Optional (default values)
  @Input() readOnly = false; // Optional

  /**
   * Use this Output to pass values back to the parent component
   */
  @Output() emitFormValues = new EventEmitter();

  /**
   * Initialize empty Reactive Form Group, set marker to false
   * until Form Controls have been added and the form is ready.
   */
  public form: FormGroup;
  public formReady = false;

  /**
   * Allow optional slide toggles to show/hide conditional (child) fields.
   */
  private togglesWithChildren: { section, name }[] = [];
  private falseTogglesWithChildren: { name, value }[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    /**
     * Confirm a fieldset was passed in
     */
    if (this.fieldset) {
      /**
       * Initialize Reactive Form
       */
      this.initializeForm();
    }
    else {
      console.warn('Please pass a fieldset into the dynamic form component.');
    }
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({});

      /**
       * Iterate through fields for each section
       */
    this.fieldset.forEach(field => {
      /**
       * Create each form field and add it to this section's Form Group
       */
      this.form.addControl(field.name, this.initializeFormControl(field));

      /**
       * Add Slide Toggle child fields if needed
       */
      if (field.children) {
        field.children.forEach(child => {
          this.form.addControl(child.name, this.initializeFormControl(child));
          this.togglesWithChildren.push({ section: field.name, name: child.name });
        });
      }
    });

    /**
     * This is for demo purposes and should be removed for production code
     * debounceTime added to wait for the user to stop typing
     */
    this.form.valueChanges.pipe(debounceTime(100)).subscribe(data => {
      console.log('Dynamic form changed: ', data, this.form.controls);
    });

    /**
     * Populate the Slide Toggle child fields if needed
     */
    this.handleSlideToggleChildren();

    /**
     * That's it, we're ready to go! Turn on the Template! 🥳
     */
    this.formReady = true;
  }

  initializeFormControl(field): FormControl {
    let value;

    /**
     * Populate defaultValues from constants if assigned
     */
    if (typeof field.defaultValue !== 'undefined') {
      value = field.defaultValue;
    }

    /**
     * Default Slide Toggles to true unless otherwise specified,
     * push specific false toggles to falseToggles array
     */
    if (field.type === 5) {

      if (typeof value === 'undefined') {
        value = true;
      }

      if (!field.defaultValue) {
        this.falseTogglesWithChildren.push({ name: field.name, value: false });
      }
    }

    /**
     * Check each field for a coordinating field in prefillData
     */
    if (this.prefillData && this.prefillData[field.name] !== undefined) {
      value = this.prefillData[field.name];
    }

    /**
     * Handle validation (or initialize null) and disabled fields
     * (passing in readOnly = true will disabled ALL fields)
     */
    const validation = field.validation ? field.validation : [];
    const isDisabled = field.disabled || this.readOnly ? true : false;

    /**
     * That's it, we're done! Return our new Form Control up to the form.
     */
    return this.formBuilder.control({ value, disabled: isDisabled }, validation);
  }

  handleSlideToggleChildren(): void {
    this.falseTogglesWithChildren.forEach(parent => {
      this.toggleChildren(parent.name, parent.value);
    });

    this.togglesWithChildren.forEach(toggle => {
      /**
       * Set up valueChanges subscription for each Slide Toggle field w/ children
       */
      // tslint:disable-next-line: no-string-literal
      this.form.controls[toggle.section]['controls'][toggle.name].valueChanges.subscribe(toggleValue => {
        this.toggleChildren(toggle.name, toggleValue);
      });
    });
  }

  toggleChildren(name, toggleValue): void {
    Object.keys(this.fieldset).forEach(section => {
      const specifiedField = this.fieldset[section].find(field => field.name === name);
      if (specifiedField) {
        specifiedField.children.forEach(child => {
          if (toggleValue) {
            this.form.controls[section].get(child.name).enable();
          } else {
            this.form.controls[section].get(child.name).disable();
          }
        });
      }
    });
  }

  extractFormValues(form): KeyValuePair[] {
    /**
     * Extract Form Field Names and Values into an array of key value pairs
     */
    const formValues = [];
    if (form.controls) {
      Object.keys(form.controls).forEach(key => {
        if (form.controls[key].controls) {
          formValues.push({ key, value: this.extractFormValues(form.controls[key])});
        } else {
          formValues.push({ key, value: form.get(key).value });
        }
      });
    }
    return formValues;
  }

}
