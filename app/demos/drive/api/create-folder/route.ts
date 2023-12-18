import {
  createGoogleDriveFolder,
  createSheetInGoogleDriveFolder,
  multiPartFormParser,
  uploadAssetsToFolder,
  writeDataToGoogleSheet
} from "@/utils/server";
import { type NextRequest } from "next/server";

// this is how we create route-specific config for next
// by default, next parses request body objects as JSON
// that makes sense for most APIs
// but not for handling multipart form data
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request: NextRequest) {
  // get the data from the request
  const { fields, files } = await multiPartFormParser(request);
  const { email, name, comment } = fields;

  // NOTE: we should probably check if a folder with this name already exists before creating a new one.
  const folderId = await createGoogleDriveFolder(name);
  const sheetId = await createSheetInGoogleDriveFolder(folderId, name);
  const wroteData = await writeDataToGoogleSheet(sheetId, {name, city});
  const attachedAssetsUpload = await uploadAssetsToFolder(folderId, files);

  let success = false;
  if (folderId && sheetId && wroteData && attachedAssetsUpload) {
    success = true;
  }

  // construct a response to send back to the client
  const response = {
    success,
    folderId,
    sheetId,
    wroteData,
    attachedAssetsUpload,
    message: success ? 'Your folder has been created' : 'Oops. Something went wrong.'
  }
  // log our response to the console for debugging purposes
  console.log(response);

  // return our response to the client
  return Response.json(response);
}
