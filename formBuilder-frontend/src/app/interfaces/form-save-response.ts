/**
 * Interface to represent form saved response.
 */
export interface FormSaveResponse {
  formResponseId: string;
  formId: string;
  formData: string;
  createdAt: string;
  modifiedAt: string;
  identities: string;
}
