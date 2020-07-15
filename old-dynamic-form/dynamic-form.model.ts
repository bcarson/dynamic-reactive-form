import { Validators } from '@angular/forms';

export enum FieldType {
    CHECKBOX,
    DATEPICKER,
    RADIO,
    SELECTDROPDOWN,
    SELECTLIST,
    SLIDETOGGLE,
    TEXTAREA,
    TEXTFIELD,
    SUBHEADER,
    DIVIDER
}

export interface Field {
    name: string;
    type: FieldType;
    children?: Field[]; 
    defaultValue?: any;
    disabled?: boolean;
    options?: string[];
    parent?: string;
    validation?: Validators[];
    visible?: boolean;
}

// export interface Field {
//     name: string;
//     type: FieldType;
//     disable?: boolean;
//     validation?: Validators[];
//     options?: string[];
//     visible?: boolean;
// }