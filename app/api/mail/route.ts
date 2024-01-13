import { NextRequest } from "next/server";
import sendMail from "../sendmail";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const to = formData.get("to") as string;
  const from = formData.get("from") as string;
  const subject = formData.get("subject") as string;
  const content = formData.get("content") as string;

  // Store the data in KV
  const response = await sendMail({ email: to }, { email: from }, subject, {
    type: "text/plain",
    value: content,
  });

  // Return the responses as a JSON response
  return new Response(JSON.stringify({ response }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
