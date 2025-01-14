import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from '@/schemas/index'

export const config = defineConfig({
  projectId: 'your-project-id',
  dataset: 'production',
  title: 'Your Project Name',
  apiVersion: '2024-03-19',
  basePath: '/admin',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
}) 