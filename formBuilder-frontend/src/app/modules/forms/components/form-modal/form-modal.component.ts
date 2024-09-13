import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { catchError, switchMap, tap } from 'rxjs';
import { FormSave } from 'src/app/interfaces/form-save';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.sass'],
})
export class FormModalComponent implements OnInit {
  @Input()
  inPublishMode = true;

  @Input()
  fields: FormlyFieldConfig[] = [];

  @Input()
  selectedSize: string = 'desktop';

  formName!: string;
  formDescription!: string;
  identityTypes: string[] = [];
  identitiesValue?: { [key: string]: string };

  // sizing of form on different devices
  displaySizes: Record<string, number> = {
    mobile: 400,
    tablet: 600,
    desktop: 700,
  };

  form: FormGroup = new FormGroup({});
  idForm: FormGroup = new FormGroup({});
  model = {};

  formId!: string;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.formId = params.get('formId')!;
          if (this.formId) {
            return this.dataService.loadForm(this.formId).pipe(
              tap((form) => {
                if (form) {
                  this.fields = form.formData;
                  this.formName = form.formName;
                  this.formDescription = form.formDescription;
                  this.identityTypes = form.identityTypes;
                  this.addIdentityTypesInForm();
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
            this.notificationService.error(
              'Invalid Form ID - Cannot load the form'
            );
            return [];
          }
        })
      )
      .subscribe();
  }

  /**
   * add validators in identification form.
   */
  addIdentityTypesInForm() {
    if (this.identityTypes) {
      this.identityTypes.forEach((type) => {
        if (type == 'email') {
          this.idForm.addControl(
            'email',
            new FormControl('', [Validators.required, Validators.email])
          );
        } else if (type == 'name') {
          this.idForm.addControl(
            'name',
            new FormControl('', [Validators.required])
          );
        } else if (type == 'phone') {
          this.idForm.addControl(
            'phone',
            new FormControl('', [
              Validators.required,
              Validators.pattern(/^\d{10}$/), // Example: Simple 10-digit pattern
            ])
          );
        }
      });
    }
  }

  /**
   * Submit form
   */
  onSubmit() {
    if (this.form.valid && this.idForm.valid) {
      if (this.inPublishMode) {
        const submitPayload: FormSave = {
          formId: this.formId,
          formData: JSON.stringify(this.model),
          identities: this.idForm.value,
        };
        this.dataService
          .saveResponse(submitPayload)
          .pipe(
            tap(() => {
              this.idForm.reset();
              this.form.reset();
              this.notificationService.success(
                'Response Submitted Successfully'
              );
            }),
            catchError(() => {
              this.notificationService.error(
                'Unknown error occured while saving response'
              );
              return [];
            })
          )
          .subscribe();
      } else {
        this.notificationService.success('Inputs are valid');
      }
    } else {
      this.notificationService.error('Invalid Inputs');
    }
  }

  /**
   * Reset form
   */
  onReset() {
    this.form.reset();
    this.idForm.reset();
  }

  /**
   * capitalize first letter of input string
   *
   * @param str
   * @returns
   */
  capitalizeFirstLetter(str: string) {
    if (str.length === 0) return str; // Handle empty strings

    const firstLetter = str.charAt(0).toUpperCase();
    const remainingLetters = str.slice(1);
    return firstLetter + remainingLetters;
  }
}
