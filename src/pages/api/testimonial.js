import sanity from "../../utils/sanity"

export const POST = async ({ request }) => {
  const body = await request.json()
  const review = await sanity.create(body)
  // console.log(review)

  return new Response(review)
}
