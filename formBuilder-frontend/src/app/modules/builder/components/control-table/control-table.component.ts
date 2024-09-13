import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-control-table',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './control-table.component.html',
  styleUrls: ['./control-table.component.sass'],
})
export class ControlTableComponent implements OnChanges {
  availableControls: FormlyFieldConfig[] = [];
  selectedIdentities: string[] = [];

  @Output() identitiesChange = new EventEmitter<string[]>();

  @Input() identityTypes: string[] = [];

  constructor(private http: HttpClient) {
    this.loadControls();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['identityTypes']) {
      const currentIdentityTypes = changes['identityTypes'].currentValue;
      this.selectedIdentities = currentIdentityTypes;
    }
  }

  loadControls() {
    const templatesFolder = './assets/jsonTemplates/';
    const controlTypes = [
      'address',
      'textarea',
      'text',
      'full-name',
      'email',
      'radio',
      'heading',
      'checkbox',
      'datepicker',
      'dropdown',
      'multi-select',
      'rating',
      'phonenumber',
    ];

    controlTypes.forEach((type) => {
      this.http
        .get<FormlyFieldConfig>(`${templatesFolder}${type}.json`)
        .subscribe({
          next: (template: FormlyFieldConfig) => {
            this.availableControls.push(template);
          },
          error: (error) => {
            console.error(`Error loading ${type} template:`, error);
          },
        });
    });
  }

  onControlDrop(event: CdkDragDrop<FormlyFieldConfig[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        this.availableControls,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onIdentityChange(option: string) {
    if (this.selectedIdentities == null) {
      this.selectedIdentities = [];
    }

    if (this.selectedIdentities.includes(option)) {
      this.selectedIdentities = this.selectedIdentities.filter(
        (id) => id !== option
      );
    } else {
      this.selectedIdentities = [...this.selectedIdentities, option];
    }
    this.identitiesChange.emit(this.selectedIdentities);
  }

  checkType(val: string) {
    if (this.identityTypes != null) {
      return this.identityTypes.includes(val);
    }

    return false;
  }
}
