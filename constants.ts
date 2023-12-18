export const APP_NAME = 'Starter Kit';
export const COURSE_GITHUB = 'https://github.com/digital-product-jam-2024';
export const COURSE_WELCOME_TEXT = 'Hey there, and welcome! Read the source code, and navigate to the demos.'
export const COURSE_CREDITS = 'Digital Product Jam 2023-2024';

export const DEMOS_ENABLED = process.env.DEMOS_ENABLED === 'true' ? true : false;
export const DEMOS = [
  {
    title: 'Contact form',
    slug: '/demos/contact',
    description: 'A simple example of a contact form that sends an email. Notice that this page runs client side, and submits the form data to a server side handler in order to actually email the message.',
    cssClass: 'demo-contactForm',
  },
  {
    title: 'Read from and write to a database',
    slug: '/demos/database',
    description: 'TODO: A simple example of working with data and content from a database.',
    cssClass: 'demo-database',
  },
  {
    title: 'Read from and write to Google Sheets',
    slug: '/demos/drive',
    description: 'TODO: A simple example of working with data and content from a Google Sheets as a database.',
    cssClass: 'demo-sheets',
  },
  {
    title: 'Read from and write to Google Drive',
    slug: '/demos/drive',
    description: 'TODO: A simple example of working with files stored in Google Drive.',
    cssClass: 'demo-drive',
  },
  {
    title: 'Visualize data',
    slug: '/demos/viz',
    description: 'TODO: A simple example of read data and displaying it visually.',
    cssClass: 'demo-drive',
  },
  {
    title: 'Random Team Generator',
    slug: '/random',
    description: 'An example of a fully functional application that builds random teams and product ideas from this year\'s students.',
    cssClass: 'demo-randomTeamGenerator',
  }
];

export const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS || ''
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || ''
export const EMAIL_HOST = process.env.EMAIL_HOST || ''
export const EMAIL_PORT = process.env.EMAIL_PORT || 587

export const SUPABASE_URL = process.env.SUPABASE_URL || ''
export const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY || ''

export const GOOGLE_CREDENTIALS = {
  client_id: process.env.GOOGLE_CLIENT_ID,
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  project_id: process.env.GOOGLE_PROJECT_ID,
  private_key: process.env.GOOGLE_PRIVATE_KEY
};

export const GOOGLE_DRIVE_DIRECTORY = process.env.GOOGLE_DRIVE_DIRECTORY;
export const GOOGLE_SHEET = {
  'id': process.env.GOOGLE_SHEET_ID,
  'range': process.env.GOOGLE_SHEET_RANGE
};

export const GOOGLE_SCOPES = [
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/spreadsheets'
];
