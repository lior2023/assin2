'use client';

import CreateDriveFolder from './components/create';
import ListDriveFolder from './components/list';
import styles from './page.module.css';

export default function Drive() {
  return (
    <div className='content'>
      <div className={styles.driveRoot}>
        <h1>
          Working with Google Drive
        </h1>
        <p>
          This form take some basic information and a file (supports JPG and PNG) and creates a folder on the example Google Drive.
          Enter your email address that you are registered to the course with - it is used to verify your identity to create the folder.
          As your folders are created, they are displayed in the folder list below.
        </p>
        <CreateDriveFolder />
        <ListDriveFolder />
      </div>
    </div>
  )
}
