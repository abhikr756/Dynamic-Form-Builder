import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-multiselect',
  templateUrl: './edit-multiselect.component.html',
  styleUrls: ['./edit-multiselect.component.sass'],
})
export class EditMultiselectComponent {
  @Input() field: any;
  @Output() fieldUpdated = new EventEmitter<FormlyFieldConfig>();
    originalField: any;
    tempField: any;
  constructor(
    private dialogRef: MatDialogRef<EditMultiselectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.originalField = JSON.parse(JSON.stringify(data.field));  
    this.tempField = JSON.parse(JSON.stringify(data.field));  
  }
  newOptionLabel = '';

  addOption() {
    if (this.newOptionLabel) {
      this.tempField.props.options.push({
        value: this.newOptionLabel,
        label: this.newOptionLabel,
      });
      this.newOptionLabel = '';
      this.updateField();
    }
  }
  updateOptionValue(index: number) {
    const editedOption = this.tempField.props.options[index];
    if (editedOption) {
      editedOption.value = editedOption.label; // Ensure value matches label
      console.log(editedOption.value)
      this.updateField();
    }
  }

  updateField() {
    
    this.fieldUpdated.emit(this.field);
  }

  saveButton() {
    this.field = JSON.parse(JSON.stringify(this.tempField));
    this.fieldUpdated.emit(this.field);
    this.dialogRef.close(this.field);
  }
  closeButton() {
    this.tempField = JSON.parse(JSON.stringify(this.originalField));
    this.dialogRef.close();
  }
}
