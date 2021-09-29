import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Field, KeyValuePair, Error } from '@dynamic-form';

@Component({
  selector: 'lib-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  /**
   * Initialize Inputs passed in from parent component
   */
  @Input() fieldset!: Field[]; // Required
  @Input() errors: Error[] = []; // Optional
  @Input() prefillData: KeyValuePair[] = []; // Optional (default values)
  @Input() readOnly = false; // Optional

  /**
   * Use this Output to pass values back to the parent component
   */
  @Output() emitFormValues = new EventEmitter();

  /**
   * Initialize empty Reactive Form Group, set marker to false
   * until Form Controls have been added and the form is ready.
   */
  public form!: FormGroup;
  public formReady = false;

  /**
   * Allow optional slide toggles to show/hide conditional (child) fields.
   */
  private togglesWithChildren: { name: string, value: boolean, children: Field[] }[] = [];

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
       * Create each form field and add it to the Form Group
       */
      this.form.addControl(field.name, this.initializeFormControl(field));

      /**
       * Add Slide Toggle child fields if needed
       */
      if (field.children) {
        field.children.forEach(child => {
          this.form.addControl(child.name, this.initializeFormControl(child));
        });
        this.togglesWithChildren.push(
          { name: field.name, value: field.defaultValue, children: field.children });
      }
    });

    /**
     * This is for demo purposes and should be removed for production code
     * debounceTime added to wait for the user to stop typing
     */
    // this.form.valueChanges.pipe(debounceTime(100)).subscribe(data => {
    //   console.log('Dynamic form changed: ', data, this.form.controls);
    // });

    /**
     * Populate the Slide Toggle child fields if needed
     */
    this.handleSlideToggleChildren();

    /**
     * That's it, we're ready to go! Turn on the Template! 🥳
     */
    this.formReady = true;
  }

  initializeFormControl(field: Field): FormControl {
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

      if (field.defaultValue === false) {
        const parentIndex = this.fieldset.findIndex(current => current.name === field.name);
        this.hideChildren(parentIndex);
      }
    }

    /**
     * Check each field for a coordinating field in prefillData
     */
    if (this.prefillData) {
      const defaultValue = this.prefillData.filter((element, index) => element.key === field.name);
      if (defaultValue.length) {
        value = defaultValue[0].value;
      }
    }

    /**
     * Handle validation (or initialize null), disabled fields, and visibility
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
    /**
     * Set up valueChanges subscription for each Slide Toggle field w/ children
     */
    this.togglesWithChildren.forEach(parent => {
      this.form.controls[parent.name].valueChanges.subscribe(value => {
        this.toggleChildren(parent.name, value);
      });
    });
  }

  toggleChildren(name: string, toggleValue: boolean): void {
    const parentIndex = this.fieldset.findIndex(field => field.name === name);
    if (toggleValue) {
      this.showChildren(parentIndex);
    } else {
      this.hideChildren(parentIndex);
    }
  }

  hideChildren(parentIndex: number): void {
    const parent = { ...this.fieldset[parentIndex] };
    parent?.children?.forEach((child, index) => {
      this.form?.get(child.name)?.disable();
      if (parent?.children?.[index]) {
      parent.children[index].visible = false;
      }
    });
  }

  showChildren(parentIndex: number): void {
    const parent = { ...this.fieldset[parentIndex] };
    parent?.children?.forEach((child, index) => {
      this.form?.get(child.name)?.enable();
      if (parent?.children?.[index]) {
      parent.children[index].visible = true;
      }
    });
  }

  extractFormValues(form: FormGroup): KeyValuePair[] {
    /**
     * Extract Form Field Names and Values into an array of key value pairs
     * will only return valid values
     */
     const formValues: KeyValuePair[] = [];
     if (form.controls) {
      Object.keys(form.controls).forEach(key => {
         const isForm = typeof form.controls[key] === ('FormGroup' as string);
         if (isForm && (form.controls[key] as FormGroup).controls) {
           const formGroup = form.controls[key] as FormGroup;
           if (formGroup.valid) {
             const value: KeyValuePair = { key, value: this.extractFormValues(formGroup) };
             formValues.push(value);
           }
        } else {
           const value: KeyValuePair = { key, value: form.get(key)?.value };
           if (form.get(key)?.valid) {
             formValues.push(value);
           }
        }
      });
    }
     return formValues;
  }
}
