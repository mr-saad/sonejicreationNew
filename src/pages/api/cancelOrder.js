import { sheets } from "../shop/new"

export async function POST({ request }) {
  const { orderId } = await request.json()

  try {
    const orders = await sheets.spreadsheets.values.get({
      spreadsheetId: import.meta.env.spreadsheetId,
      range: "Orders!A2:I"
    })

    const updatedOrders = orders.data.values.filter(all => all[8] !== orderId)

    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: import.meta.env.spreadsheetId,
      resource: {
        requests: [
          {
            deleteDimension: {
              range: {
                dimension: "ROWS",
                startIndex: 1,
                endIndex: 100
              }
            }
          }
        ]
      }
    })
    await sheets.spreadsheets.values.append({
      spreadsheetId: import.meta.env.spreadsheetId,
      range: "Orders!A2:I2",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: updatedOrders
      }
    })
    return new Response("Canceled")
  } catch (error) {
    throw new Error(error)
  }
}
