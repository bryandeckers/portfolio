export default function sendMail(
  to: { email: string; name?: string },
  from: { email: string; name?: string },
  subject: string,
  content: { type?: string; value: string }
) {
  const response = fetch(
    new Request("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      body: JSON.stringify({
        personalizations: [
          {
            to: [to],
            dkim_domain: "bcdetailing.be", // The value has to be the domain you added DKIM records to and where you're sending your email from
            dkim_selector: "mailchannels",
            dkim_private_key: process.env.DKIM_PRIVATE_KEY,
          },
        ],

        from: from,
        subject: subject,
        content: [content],
      }),
    })
  );
  return response;
}
