import { type SyntheticEvent } from 'react';
import { createGoogleDriveFolder } from '../actions';
import styles from '../page.module.css';
import {
  getValidFormData,
  postData
} from '../utils';

export default function CreateDriveFolder() {

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    const formData = getValidFormData(event.target as HTMLFormElement);
    // NOTE: Do we want to verify file types, or, size, before we allow upload?
    // if (file.size > someSize)
    // if (file.type === someType)
    postData(formData);
  }

  return (
    <form className={styles.fileForm} action={createGoogleDriveFolder}>
      <h3>Create a Google Drive Folder</h3>
      <input type='email' name='email' id='email' placeholder='Enter your email for verification' required />
      <input type='text' name='name' id='name' placeholder='Choose a name for your folder' required />
      <input type='file' name='file' id='file' placeholder='Add a file to your folder' required />
      <textarea name='comment' id='comment' placeholder='Add some notes about your folder'></textarea>
      <button type='submit'>Send</button>
    </form>
  )
}
