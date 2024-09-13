import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-group-field-wrapper',
  templateUrl: './group-field-wrapper.component.html',
  styleUrls: ['./group-field-wrapper.component.sass'],
})
export class GroupFieldWrapperComponent extends FieldWrapper {
  showLabelsFor: string[] = ["Name", "Address"];
}
