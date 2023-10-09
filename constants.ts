export const APP_NAME = 'Starter Kit';
export const COURSE_GITHUB = 'https://github.com/digital-product-jam-2024';
export const COURSE_WELCOME_TEXT = 'Hey there, and welcome! Read the source code, and navigate to the demos.'
export const COURSE_CREDITS = 'Digital Product Jam 2023-2024';

export const DEMOS_ENABLED = process.env.DEMOS_ENABLED === 'true' ? true : false;
export const DEMOS = [
  {
    title: 'Contact Form',
    slug: 'contact',
    description: 'A simple example of a contact form that sends an email. Notice that this page runs client side, and submits the form data to a server side handler in order to actually email the message.',
    cssClass: 'demo-contactForm',
  }
];

export const EMAIL_ADDRESS=process.env.EMAIL_ADDRESS
export const EMAIL_PASSWORD=process.env.EMAIL_PASSWORD
export const EMAIL_HOST=process.env.EMAIL_HOST
export const EMAIL_PORT=process.env.EMAIL_PORT
