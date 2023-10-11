import { ContactFormResponse } from "@/app/demos/contact/types";

export async function postFormData(data: Record<string, string>, url: string): Promise<ContactFormResponse> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  return response.json();
}
