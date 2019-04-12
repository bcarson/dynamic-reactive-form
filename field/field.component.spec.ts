import { SentenceCasePipe } from '@admin/shared/pipes';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'apps/admin/src/app/app-material.module';
import { FieldType } from '../dynamic-form.model';
import { FieldComponent } from './field.component';


describe('FieldComponent', () => {
    let component: FieldComponent;
    let fixture: ComponentFixture<FieldComponent>;
    let formGroupDirective: Partial<FormGroupDirective>;

    beforeEach(async(() => {
        // form: new FormGroup({ 'myName': new FormControl('myName') })
        formGroupDirective = { };
        // const control = new FormControl('name');
        const form = new FormGroup({});
        formGroupDirective.form = form;
        formGroupDirective.form.addControl('name', new FormControl());

        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                AppMaterialModule
            ],
            declarations: [
                FieldComponent,
                SentenceCasePipe
            ],
            providers: [
                {
                    provide: FormGroupDirective, useValue: formGroupDirective
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FieldComponent);
        component = fixture.componentInstance;
        component.field = {name:'myName', type: FieldType.TEXTFIELD};
        fixture.detectChanges();
    });

    xtest('should create', () => {
        expect(component).toBeTruthy();
    });
});
