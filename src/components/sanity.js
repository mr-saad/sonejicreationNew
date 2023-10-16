import { createClient } from "next-sanity"

export default createClient({
  dataset: import.meta.env.DATASET,
  projectId: import.meta.env.projectID,
  apiVersion: "2023-10-04",
  useCdn: false,
  token: import.meta.env.sanity_api_token,
})
