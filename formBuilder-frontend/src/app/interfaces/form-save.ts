/**
 * Interface to represent form saving data.
 */
export interface FormSave {
  formId: string | null;
  formData: string;
  identities: { [key: string]: string };
}
