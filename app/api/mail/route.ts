import { NextRequest } from "next/server";
import sendMail from "../sendmail";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const to = "info@bryandeckers.com"
  const from = "contact@bryandeckers.com";
  const subject = "Inzending van contactformulier";
  const email = formData.get("email") as string;
  const content = formData.get("content") as string;

  // Store the data in KV
  const response = await sendMail({ email: to }, { email: from }, subject, {
    type: "text/plain",
    value: email+"\n"+content,
  });

  // Return the responses as a JSON response
  return new Response(JSON.stringify(response), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
