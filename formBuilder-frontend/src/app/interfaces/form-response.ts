import { FormlyFieldConfig } from '@ngx-formly/core';

/**
 * Interface to represent form request.
 */
export interface FormResponse {
  formId: string;
  formData: FormlyFieldConfig[];
  formName: string;
  formDescription: string;
  identityTypes: string[];
}
