import { Injectable } from '@angular/core';
import { EditRadioButtonComponent } from '../components/fields/edit-radio-field/edit-radio-field.component';
import { EditAddressComponent } from '../components/fields/edit-address/edit-address.component';
import { EditEmailComponent } from '../components/fields/edit-email/edit-email.component';
import { EditDropdownComponent } from '../components/fields/edit-dropdown/edit-dropdown.component';
import { EditMultiselectComponent } from '../components/fields/edit-multiselect/edit-multiselect.component';
import { EditCheckboxComponent } from '../components/fields/edit-checkbox/edit-checkbox.component';
import { EditHeaderComponent } from '../components/fields/edit-heading/edit-header.component';
import { EditTextareaComponent } from '../components/fields/edit-textarea/edit-textarea.component';
import { EditPhonenumberComponent } from '../components/fields/edit-phonenumber/edit-phonenumber.component';
import { EditDatepickerComponent } from '../components/fields/edit-datepicker/edit-datepicker.component';
import { EditFullnameComponent } from '../components/fields/edit-fullname/edit-fullname.component';
import { EditTextComponent } from '../components/fields/edit-text/edit-text.component';

@Injectable({
  providedIn: 'root',
})
export class EditDialogs {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getDialogComponent(fieldKey: string): any {
    switch (fieldKey) {
      case 'Radio Button':
        return EditRadioButtonComponent;
      case 'Address':
        return EditAddressComponent;
      case 'Email':
        return EditEmailComponent;
      case 'Dropdown':
        return EditDropdownComponent;
      case 'Multi Select':
        return EditMultiselectComponent;
      case 'Checkbox':
        return EditCheckboxComponent;
      case 'Long Text':
        return EditTextareaComponent;
      case 'Header':
        return EditHeaderComponent;
      case 'Phone Number':
        return EditPhonenumberComponent;
      case 'Datepicker':
        return EditDatepickerComponent;
      case 'Fullname':
        return EditFullnameComponent;
      case 'Text':
          return EditTextComponent;
      default:
        return null;
    }
  }
}
