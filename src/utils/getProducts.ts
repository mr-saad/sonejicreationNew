import sanity from "./sanity"
export default async function getProducts(count?: number) {
  return await sanity.fetch(
    `*[_type=="products"][0..$count]{
              title,
              "slug":slug.current,
              "image":images[0]{asset->{url}},
          }
          `,
    { count: count || -1 }
  )
}
