import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, map } from 'rxjs';
import { FormResponse } from '../interfaces/form-response';
import { ApiService } from './api.service';
import { FormRequest } from '../interfaces/form-request';
import { FormSummary } from '../interfaces/form-summary';
import { FormSave } from '../interfaces/form-save';
import { FormSaveResponse } from '../interfaces/form-save-response';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  /**
   * Inject dependencies.
   *
   * @param apiService
   */
  constructor(private apiService: ApiService) {}

  /**
   * convert FormlyFieldConfig to string array.
   *
   * @param form
   * @returns
   */
  private convertFormToStringArray(form: FormlyFieldConfig[]): string[] {
    // convert formly field array to string array.
    const data: string[] = [];
    form.forEach((element) => {
      data.push(JSON.stringify(element));
    });
    return data;
  }

  /**
   * Convert form-request to form-response.
   *
   * @param data
   * @returns
   */
  private convertRequestToResponse(
    data: Observable<FormRequest>
  ): Observable<FormResponse> {
    const response = data.pipe<FormResponse>(
      map((form) => {
        // convert response data
        const resp: FormResponse = {
          formId: form.formId,
          formData: form.formData.map<FormlyFieldConfig>((field: string) =>
            JSON.parse(field)
          ),
          formDescription: form.formDescription,
          formName: form.formName,
          identityTypes: form.identityTypes,
        };
        return resp;
      })
    );
    return response;
  }

  /**
   * Create new form
   *
   * @returns - new form id
   */
  newForm(): Observable<FormResponse> {
    const data = this.apiService.newForm();
    const resp = this.convertRequestToResponse(data);
    return resp;
  }

  /**
   * get first form ID available
   *
   * @returns
   */
  getFirstForm(): Observable<FormResponse> {
    return this.newForm();
  }

  deleteFormById(id: string) {
    return this.apiService.deleteFormById(id);
  }

  /**
   * Save data
   *
   * @param formFields
   */
  saveForm(form: FormResponse): Observable<FormResponse> {
    // convert formly field array to string array.
    const data: string[] = this.convertFormToStringArray(form.formData);
    const requestData: FormRequest = {
      formId: form.formId,
      formData: data,
      formName: form.formName,
      formDescription: form.formDescription,
      identityTypes: form.identityTypes,
    };

    const req = this.apiService.saveForm(requestData);

    return this.convertRequestToResponse(req);
  }

  /**
   * Load form
   *
   * @param formId
   * @returns
   */
  loadForm(formId: string): Observable<FormResponse> {
    // get data using api.
    const data = this.apiService.getFormById(formId);

    // process received data.
    const response = this.convertRequestToResponse(data);
    return response;
  }

  /**
   * Get summary of all forms
   * @returns
   */
  getAllFormsSummary(): Observable<FormSummary[]> {
    return this.apiService.getAllFormsSummary();
  }

  /**
   * Save response of a form.
   * @param saveFormData
   * @returns
   */
  saveResponse(saveFormData: FormSave): Observable<FormSave> {
    return this.apiService.saveFormResponse(saveFormData);
  }

  /**
   * get form responses by form id
   *
   * @param formId
   * @returns
   */
  getFormResponsesById(formId: string): Observable<FormSaveResponse[]> {
    return this.apiService.getFormResponsesById(formId);
  }
}
