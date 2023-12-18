export interface FormPostData {
  email: string;
  name: string;
  file: File;
  comment: string;
}

export const FORM_VALID_FIELDS = ['email', 'name', 'file', 'comment'];

export const CREATE_GOOGLE_DRIVE_FOLDER_ENDPOINT = '/demos/drive/api/create-folder/';

export const LIST_GOOGLE_DRIVE_FOLDER_ENDPOINT = '/demos/drive/api/list/';

export function getValidFormData(target: HTMLFormElement): FormPostData {
  const formElements = target.elements as unknown as HTMLInputElement[];
  const validElements = Array.from(formElements).filter(element => FORM_VALID_FIELDS.includes(element.name));
  const validData = validElements.map(
    (element) => {
      const value = (element.name === 'file' && element.files) ? element.files[0]: element.value
      return [element.name, value]}
  );
  return Object.fromEntries(validData);
}

export async function postData(data: FormPostData) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }
  const response = await fetch(CREATE_GOOGLE_DRIVE_FOLDER_ENDPOINT, {
    method: 'POST',
    // Note we removed the content type headers
    // We are not longer sending JSON
    // We are sending multipart form data
    // because of the file upload
    // https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data
    body: formData
  })
  return response;
}
