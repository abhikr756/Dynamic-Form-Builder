import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-text',
  templateUrl: './edit-text.component.html',
  styleUrl: './edit-text.component.sass'
})
export class EditTextComponent {
  @Input() field: any;
  @Output() fieldUpdated = new EventEmitter<FormlyFieldConfig>();
  originalField: any;
  tempField: any;
  constructor(
    private dialogRef: MatDialogRef<EditTextComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.originalField = JSON.parse(JSON.stringify(data.field));  
    this.tempField = JSON.parse(JSON.stringify(data.field));
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
