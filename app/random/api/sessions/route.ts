import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const response = { message: "Not Implemented" }
  console.log(response);
  return Response.json(response);
}
