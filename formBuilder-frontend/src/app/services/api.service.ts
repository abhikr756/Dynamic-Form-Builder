import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormRequest } from '../interfaces/form-request';
import { FormSummary } from '../interfaces/form-summary';
import { FormSave } from '../interfaces/form-save';
import { FormSaveResponse } from '../interfaces/form-save-response';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private formApiUrl = environment.apiUrl;
  private formResponseApiUrl = environment.formResponseUrl;

  /**
   * Inject Dependencies.
   *
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   * Create new empty form.
   *
   * @returns
   */
  newForm(): Observable<FormRequest> {
    const payload = { formData: [] };
    return this.http.post<FormRequest>(`${this.formApiUrl}/`, payload);
  }

  /**
   * Save existing form
   *
   * @param formFields
   * @returns
   */
  saveForm(payload: FormRequest): Observable<FormRequest> {
    return this.http.put<FormRequest>(
      `${this.formApiUrl}/${payload.formId}`,
      payload
    );
  }

  /**
   * get form by form id
   *
   * @param id
   * @returns
   */
  getFormById(id: string): Observable<FormRequest> {
    return this.http.get<FormRequest>(`${this.formApiUrl}/${id}`);
  }

  /**
   * delete form
   *
   * @param id
   * @returns
   */
  deleteFormById(id: string) {
    return this.http.delete(`${this.formApiUrl}/${id}`);
  }

  /**
   * get first available form from server
   *
   * @returns
   */
  getFirstForm(): Observable<FormRequest> {
    return this.http.get<FormRequest>(`${this.formApiUrl}/first`);
  }

  /**
   * Get summary of all forms
   * @returns
   */
  getAllFormsSummary(): Observable<FormSummary[]> {
    return this.http.get<FormSummary[]>(`${this.formApiUrl}/getSummary`);
  }

  /**
   * Post form responses to backend
   * @param payload
   * @returns
   */
  saveFormResponse(payload: FormSave): Observable<FormSave> {
    return this.http.post<FormSave>(this.formResponseApiUrl, payload);
  }

  /**
   *
   * @param formId
   * @returns all form responses of a form
   */
  getFormResponsesById(formId: string): Observable<FormSaveResponse[]> {
    return this.http.get<FormSaveResponse[]>(
      this.formResponseApiUrl + 'formId/' + formId
    );
  }
}
