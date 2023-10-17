import type { APIRoute } from "astro"
import sanity from "../components/sanity"

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url)
  const params = Object.fromEntries(url.searchParams)
  try {
    const products = await sanity.fetch(
      `*[_type=="products"][0..$count]{
              title,
              "slug":slug.current,
              "image":images[0]{asset->{url}},
          }
          `,
      { count: parseInt(params.count) || -1 }
    )
    return new Response(JSON.stringify(products))
  } catch (error) {
    throw new Error(error)
  }
}
