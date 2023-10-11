'use client';

import { useState, type ChangeEvent, type SyntheticEvent } from 'react';
import styles from './page.module.css';
import { type ContactFormResponse } from './types';
import { postFormData } from './utils';

const formHandlerUrl = '/demos/contact/api';

export default function Form() {

  // See information on typing events on forms in React here:
  // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/

  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [submissionResponse, setSubmissionResponse] = useState<ContactFormResponse | undefined>(undefined);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  async function handleSubmit(event: SyntheticEvent) {
    // event.preventDefault() : You generally need to do this when working in JavaScript
    // to override default browser behavior of submitting the form and reloading the page.
    event.preventDefault();
    const response = await postFormData(formData, formHandlerUrl);
    setSubmissionResponse(response);
  }

  const formClassName = `${styles.contactForm} gray-bg`;

  return (
    <div className="content">
      <h1>Send a message</h1>
      {
        submissionResponse ?
        <div className="center">{submissionResponse.message}</div> :
        <form className={formClassName} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter the name of the recipient" value={formData.name} onChange={handleChange} required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter a valid email address for the recipient" value={formData.email} onChange={handleChange} required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Enter your message" value={formData.message} onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      }
    </div>
  )
}
