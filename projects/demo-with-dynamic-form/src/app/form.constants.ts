import { Field, FieldType, KeyValuePair } from '@dynamic-form';

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
export const rightForm: Field[] = [
      {
        name: 'phone',
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

export const prefillDataLeft: KeyValuePair[] = [
  { key: 'firstName', value: 'Mickey' },
  { key: 'lastName', value: 'Mouse' },
  { key: 'favoriteFood', value: 'Pizza' },
  { key: 'favoriteColor', value: 'Blue' }
];

export const prefillDataRight: KeyValuePair[] = [
  { key: 'phone', value: '123-456-1212' },
  { key: 'email', value: 'mickey@disney.com' },
  { key: 'favoriteSeason', value: 'Summer' },
  { key: 'favoriteMusic', value: 'Rock' }
];
