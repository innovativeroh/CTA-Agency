import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  apiVersion: '2024-03-19',
  useCdn: process.env.NODE_ENV === 'production',
}) 