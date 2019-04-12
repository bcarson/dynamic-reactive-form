import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ad-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() fieldSet;
  @Input() errors;
  @Input() prefillData;
  @Input() readOnly: boolean = false;
  @Output() handleActionButtons = new EventEmitter();
  public sections: string[];
  public form: FormGroup;
  public formReady = false;
  private togglesWithChildren: { section, name }[] = [];
  private falseTogglesWithChildren: { name, value }[] = [];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // confirm a fieldSet was passed in
    if (this.fieldSet) {
      
      // populate section headers
      this.sections = Object.keys(this.fieldSet);
      
      // initialize reactive forms
      this.initializeForm();
    } else console.warn('Please pass a fieldSet into Dynamic Form.');
  }

  initializeForm () {
    this.form = this.formBuilder.group({});
    /**
     * Dynamically Generate Reactive Form Fields
     * fieldSet expects an object structured like so: {
     *  'sectionHeaderOne': [ array of form fields ],
     *  'sectionHeaderTwo': [ array of form fields ]
     * }
     * (this object should be passed in from the parent,
     * see edit-organization for example implementation)
     */
    Object.keys(this.fieldSet).forEach(section => {
      // create a formGroup for each section
      let formSection = this.formBuilder.group({}); 

      // iterate through fields for each section
      this.fieldSet[section].forEach(field => {
        // create each form field and add it to the section formGroup
        formSection.addControl(field.name, this.initializeFormControl(field));

        // add SLIDETOGGLE child fields if needed
        if (field.children) {
          field.children.forEach(child => {
            formSection.addControl(child.name, this.initializeFormControl(child));
            this.togglesWithChildren.push({ section: section, name: field.name });
          });
        }
      });

      // add each section to the main form  
      this.form.addControl(section, formSection);
    });

    // this.form.valueChanges.subscribe(data => {
    //   // console.log('Form changed!', data, this.form.controls);
    // });

    this.handleSlideToggleChildren();
    this.formReady = true;
  }

  initializeFormControl (field) {
    let value;
    
    // populate defaultValues from constants if assigned
    if (typeof field.defaultValue !== 'undefined') {
      value = field.defaultValue;
    }

    // default slide toggles to true unless otherwise specified
    if (field.type === 5 && typeof value === 'undefined') {
      value = true; 
    }
    
    if (field.type === 5 && field.defaultValue === false) {
      this.falseTogglesWithChildren.push({ name: field.name, value: false })
    }

    // check each field for a coordinating field in prefillData
    if (this.prefillData[field.name] !== undefined) {
      value = this.prefillData[field.name];
    } 
    
    // if field has no validation, create formControl w/o validation
    const validation = field.validation ? field.validation : [];
    return this.formBuilder.control({ value: value, disabled: this.readOnly }, field.validation);
  }

  handleSlideToggleChildren () {
    this.falseTogglesWithChildren.forEach(parent => {
      this.toggleChildren(parent.name, parent.value);
    })


    this.togglesWithChildren.forEach(toggle => {
      // set up valueChanges subscription for each slidetoggle field with children
      this.form.controls[toggle.section]['controls'][toggle.name].valueChanges
      .subscribe(toggleValue => { 
        this.toggleChildren(toggle.name, toggleValue);
      })
    }) 
  }

  toggleChildren (name, toggleValue) {
    Object.keys(this.fieldSet).forEach(section => {
      const specifiedField = this.fieldSet[section].find(field => field.name === name);
      if (specifiedField) {
        specifiedField.children.forEach(child => {
          if (toggleValue) this.form.controls[section].get(child.name).enable();
          else this.form.controls[section].get(child.name).disable();
        })
      }
    })
  }

  extractFormValues(form) {
    const formValues = [];
    if (form.controls) {
      Object.keys(form.controls).forEach(key => {
        if(form.controls[key]['controls']) {
          formValues.push({ key: key, value: this.extractFormValues(form.controls[key]) })
        } else {
          formValues.push({ key: key, value: form.get(key).value });
        }
      });
    }
    return formValues;
  }


  // checkForErrors (form) {
  //   if (form.controls) {
  //     console.log('this.form?', form.controls);
  //     Object.keys(form.controls).forEach(key => {
  //       if (form.controls[key]['controls']) {
  //         console.log('handleErrors again!', form.controls[key]['controls']);
  //         this.checkForErrors(form.controls[key]);
  //       } else {
  //         // console.log('which one?', key, form.controls[key]);
  //         if (form.controls[key].errors) this.handleError(key, form.controls[key].errors);
  //       }
  //     })
  //   }
  // }

  // handleError (key, errors) {
    
  //   const result = 

  //   // console.log('handle errors!', key, this.fieldSet, errors);
  //   // Object.entries(this.fieldSet).forEach(([section, value]) => {
  //   //   console.log('checking this section', key, section,'...', value.indexOf(key));
  //   //   if (value.includes(key)) {
  //   //     console.log('found a key!', section, key)
  //   //     // this.fieldSet[section][key].errors = errors;
  //   //     console.log('new fieldSet:', this.fieldSet);
  //   //   }
  //   // })
  // }
}
