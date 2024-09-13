import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-radio-button',
  templateUrl: './edit-radio-field.component.html',
  styleUrls: ['./edit-radio-field.component.sass'],
})
export class EditRadioButtonComponent {
  @Input() field: any;
  @Output() fieldUpdated = new EventEmitter<{ field: FormlyFieldConfig, index: number }>();
  originalField: any;
  tempField: any;

  constructor(
    private dialogRef: MatDialogRef<EditRadioButtonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.originalField = JSON.parse(JSON.stringify(data.field));  
    this.tempField = JSON.parse(JSON.stringify(data.field));   
  }
  
  newOptionLabel = '';

  addOption() {
    // console.log(this.newOptionLabel);    
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
    this.fieldUpdated.emit({ field: this.field, index: this.data.index }); 
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
