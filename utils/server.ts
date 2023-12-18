import { EMAIL_ADDRESS, EMAIL_HOST, EMAIL_PASSWORD, EMAIL_PORT, SUPABASE_SERVICE_KEY, SUPABASE_URL } from '@/constants';
import { createClient as createDatabaseClient } from '@supabase/supabase-js';
import formidable from 'formidable';
import * as fs from 'fs';
import { google } from 'googleapis';
import { NextRequest } from 'next/server';
import nodemailer, { TransportOptions } from 'nodemailer';
import { GOOGLE_CREDENTIALS, GOOGLE_DRIVE_DIRECTORY, GOOGLE_SCOPES } from '../constants';

export const databaseClient = getDatabaseClient();

export function getDatabaseClient() {
  return createDatabaseClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
}

export function getEmailTransport() {
  const transport = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    // this doesnt mean it is not secure. see https://nodemailer.com/smtp/
    secure: false,
    auth: {
      user: EMAIL_ADDRESS,
      pass: EMAIL_PASSWORD,
    },
  } as TransportOptions);
  return transport;
}

export async function sendEmail(data: Record<string, string>) {
  const transport = getEmailTransport();
  const message = {
    from: EMAIL_ADDRESS,
    to: data.email,
    subject: 'Digital Product Jam Contact Form Message',
    text: data.message,
    html: `<p>${data.message}</p>`,
  }
  // default to false and only set true if the email is sent successfully
  let success = false;
  try {
    await transport.sendMail(message);
    success = true;
  } catch (error) {
    console.log(error)
  }
  return success;
}

export async function getGoogleAuthClient() {
  const googleAuth = new google.auth.GoogleAuth({
    credentials: GOOGLE_CREDENTIALS,
    scopes: GOOGLE_SCOPES
  });
  return googleAuth.getClient();
}

export async function getGoogleDriveClient() {
  const authClient = await getGoogleAuthClient();
  const driveClient = google.drive({
    version: 'v3',
    auth: authClient
  });
  return driveClient;
}

export async function getGoogleSheetsClient() {
  const authClient = await getGoogleAuthClient();
  const sheetsClient = google.sheets({
    version: 'v4',
    auth: authClient
  });
  return sheetsClient;
}

export async function createGoogleDriveFolder(folderName: string): Promise<string | null> {
  const driveClient = await getGoogleDriveClient();
  let result = null;
  const response = await driveClient.files.create({
    resource: {
      parents: [GOOGLE_DRIVE_DIRECTORY],
      name: folderName,
      mimeType: 'application/vnd.google-apps.folder',
    },
  })
  if (response.status === 200) {
    result = response.data.id;
  }
  return result;
}

export async function createSheetInGoogleDriveFolder(folderId: string, name: string): Promise<string | null> {
  const driveClient = await getGoogleDriveClient();
  let result = null;
  const clientResponse = await driveClient.files.create({
    resource: {
      parents: [folderId],
      name,
      mimeType: 'application/vnd.google-apps.spreadsheet',
    },
  })
  if (clientResponse.status === 200) {
    result = clientResponse.data.id;
  }
  return result;
}

export async function writeDataToGoogleSheet(spreadsheetId: string, data: Record<string, string>) {
  const sheetsClient = await getGoogleSheetsClient();
  let result = null;
  const header = Object.keys(data);
  const record = Object.values(data);
  const resource = { values: [header, record] };
  const valueInputOption = 'RAW';
  const range = 'Sheet1'; // This is always the default

  const clientResponse = await sheetsClient.spreadsheets.values.update({
    spreadsheetId,
    range,
    valueInputOption,
    resource,
  });
  if (clientResponse.status === 200) {
    result = clientResponse.data.id;
  }
  return result;
}

export async function uploadAssetsToFolder(folderId, files) {
  const driveClient = await getGoogleDriveClient();
  const results = [];
  for (const [key, value] of Object.entries(files)) {
    const { originalFilename, filepath, mimetype } = value;
    const clientResponse = await driveClient.files.create({
      resource: {
        parents: [folderId],
        name: originalFilename,
        mimeType: mimetype,
      },
      media: {
        body: fs.createReadStream(filepath),
        mimeType: mimetype,
      }
    })
    if (clientResponse.status === 200) {
      results.push(clientResponse.data.id);
    }
  }
  return results;
}

export async function multiPartFormParser(request: NextRequest) {
  return new Promise(async (resolve, reject) => {

    const form = formidable({
      maxFiles: 1, // TODO: set this as desired
      maxFileSize: 1024 * 1024 * 5, // TODO: set this as desired, this is 5mb
    });

    form.parse(request, function (err, fields, files) {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
};