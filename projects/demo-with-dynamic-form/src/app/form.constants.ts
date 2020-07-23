import { Field, FieldType } from '@dynamic-form';

export const leftForm: Field[] = [
      {
        name: 'firstName',
        type: FieldType.TEXTFIELD
      },
      {
        name: 'lastName',
        type: FieldType.TEXTFIELD
      },
      {
        name: 'favoriteFood',
        type: FieldType.SELECTDROPDOWN,
        options: ['Ice Cream', 'Pizza', 'Tacos']
      },
      {
        name: 'favoriteColor',
        type: FieldType.SELECTDROPDOWN,
        options: ['Red', 'Blue', 'Yellow']
      }
    ];
export const  rightForm = [
      {
        name: 'phoneNumber',
        type: FieldType.TEXTFIELD
      },
      {
        name: 'email',
        type: FieldType.TEXTFIELD
      },
      {
        name: 'favoriteSeason',
        type: FieldType.SELECTDROPDOWN,
        options: ['Spring', 'Summer', 'Fall', 'Winter']
      },
      {
        name: 'favoriteMusic',
        type: FieldType.SELECTDROPDOWN,
        options: ['Classic', 'Country', 'Folk', 'Rap', 'Rock']
      }
    ];
