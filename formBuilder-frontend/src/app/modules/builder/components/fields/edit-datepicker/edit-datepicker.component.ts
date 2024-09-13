import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-datepicker',
  templateUrl: './edit-datepicker.component.html',
  styleUrls: ['./edit-datepicker.component.sass']
})
export class EditDatepickerComponent {
  @Input() field :any 

  @Output() fieldUpdated = new EventEmitter<FormlyFieldConfig>();
  originalField: any;
  tempField: any;

  constructor(
    private dialogRef: MatDialogRef<EditDatepickerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
   ) {
    this.originalField = data.field;  
    this.tempField = data.field; 
   }
   saveButton() {
    // this.field = JSON.parse(JSON.stringify(this.tempField));
    this.field=this.tempField;
    this.fieldUpdated.emit(this.field);
    this.dialogRef.close(this.field);
  }

  closeButton() {
    this.tempField = JSON.parse(JSON.stringify(this.originalField));
    // this.tempField=this.originalField;
    this.dialogRef.close();
  }
}
