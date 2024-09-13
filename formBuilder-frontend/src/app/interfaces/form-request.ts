/**
 * Interface to represent form request.
 */
export interface FormRequest {
  formId: string;
  formData: string[];
  formName: string;
  formDescription: string;
  identityTypes: string[];
}
