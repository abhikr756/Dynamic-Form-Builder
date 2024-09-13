import { FormResponse } from './../../../../interfaces/form-response';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogs } from '../../services/EditDialogs.service';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, switchMap, tap } from 'rxjs';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.sass'],
})
export class FormBuilderComponent implements OnInit, OnChanges {
  formFields: FormlyFieldConfig[] = [];
  selectedField!: FormlyFieldConfig;
  formId!: string;
  formName: string = '';
  formDescription: string = '';
  isEditingFormName = false;
  isEditingFormDescription = false;

  @Input()
  identityTypes?: string[];

  @Output()
  identitiesChange = new EventEmitter<string[]>();

  constructor(
    private dialog: MatDialog,
    private editDialogs: EditDialogs,
    private storage: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['identityTypes']) {
      const currentIdentityTypes = changes['identityTypes'].currentValue;
      this.identityTypes = currentIdentityTypes;
      this.saveForm();
    }
  }

  /**
   * Read form ID form URI params and load form.
   */
  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((param) => {
          // get form id from parameter
          const id = param.get('formId');
          if (id) {
            // load form from id
            this.formId = id;
            return this.storage.loadForm(id).pipe(
              tap((form: FormResponse) => {
                if (form) {
                  // form exists
                  this.formFields = form.formData;
                  this.formName = form.formName;
                  this.formDescription = form.formDescription;
                  this.identityTypes = form.identityTypes;
                  this.identitiesChange.emit(form.identityTypes);
                } else {
                  // form id does not exists
                  this.notificationService.error('Form not found');
                }
              }),
              catchError(() => {
                this.notificationService.error(
                  'Unknown error occured while loading form'
                );
                return [];
              })
            );
          } else {
            // Form id is not provided.
            return this.storage.getFirstForm().pipe(
              tap((form: FormResponse) => {
                this.formId = form.formId;
                this.router.navigateByUrl('/builder/' + this.formId);
              }),
              catchError(() => {
                this.notificationService.error(
                  'Unknown error occured while loading form'
                );
                return [];
              })
            );
          }
        }),
        catchError(() => {
          this.notificationService.error(
            'Unknown error occured while reading parameters'
          );
          return [];
        })
      )
      .subscribe();
  }

  /**
   * Save form
   */
  public saveForm() {
    if (this.formId) {
      const formData: FormResponse = {
        formId: this.formId,
        formData: this.formFields,
        formName: this.formName,
        formDescription: this.formDescription,
        identityTypes: this.identityTypes!,
      };

      this.storage
        .saveForm(formData)
        .pipe(
          catchError(() => {
            this.notificationService.error(
              'Unknown error occured while saving form'
            );
            return [];
          })
        )
        .subscribe();
    }
  }

  /**
   * Handle on drop event of drag and drop
   *
   * @param event
   */
  onDrop(event: CdkDragDrop<FormlyFieldConfig[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.formFields, event.previousIndex, event.currentIndex);
    } else {
      const data: FormlyFieldConfig[] = [];
      event.previousContainer.data.forEach((val) => {
        data.push(JSON.parse(JSON.stringify(val)));
      });
      copyArrayItem(
        data,
        this.formFields,
        event.previousIndex,
        event.currentIndex
      );
    }
    // Saving form
    this.saveForm();
  }

  /**
   * Handle edit field button click
   *
   * @param field
   * @param index
   */
  editField(field: FormlyFieldConfig, index: number) {
    this.selectedField = field;
    this.openEditDialog(this.selectedField, index);
  }

  /**
   * Open dialog box
   *
   * @param field
   * @param index
   */
  openEditDialog(field: FormlyFieldConfig, index: number) {
    if (field.key && typeof field.key === 'string') {
      const dialogComponent = this.editDialogs.getDialogComponent(field.key);
      if (dialogComponent) {
        const dialogRef = this.dialog.open(dialogComponent, {
          data: {
            field: { ...field },
            index: index,
          },
        });
        dialogRef
          .afterClosed()
          .subscribe((updatedField: FormlyFieldConfig | undefined) => {
            if (updatedField) {
              this.updateField(updatedField, index);
            }
          });
      }
    }
  }

  /**
   * Update field after editing
   *
   * @param updatedField
   * @param index
   */
  updateField(updatedField: FormlyFieldConfig, index: number) {
    if (index !== -1) {
      this.formFields[index] = updatedField;
      // Saving Form
      this.saveForm();
    }
  }

  /**
   * Delete field button click handler
   *
   * @param index
   */
  deleteField(index: number) {
    if (index >= 0 && index < this.formFields.length) {
      this.formFields.splice(index, 1);
      // Saving Form
      this.saveForm();
    }
  }

  onFormNameChange(name: string) {
    this.formName = name;
    this.saveForm();
  }

  onFormDescriptionChange(description: string) {
    this.formDescription = description;
    this.saveForm();
  }
}
