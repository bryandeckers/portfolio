import { NextRequest } from "next/server";
import sendMail from "../sendmail";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const to = "bryan.deckers1@gmail.com"
  const from = formData.get("from") as string;
  const subject = "Inzending van contactformulier";
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
