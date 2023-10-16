import { google } from "googleapis"

export const POST = async ({ request }) => {
  const body = await request.json()
  const creds = JSON.parse(
    Buffer.from(import.meta.env.creds, "base64").toString()
  )

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_id: creds.client_id,
        client_email: creds.client_email,
        private_key: creds.private_key,
      },
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    })
    const sheets = google.sheets({
      version: "v4",
      auth,
    })
    await sheets.spreadsheets.values.append({
      spreadsheetId: import.meta.env.spreadsheetId,
      range: "Orders!A2:E2",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [body],
      },
    })
    return new Response(
      JSON.stringify({ message: "Order Successfully Booked!" })
    )
  } catch (error) {
    throw new Error(error)
  }
}
