// filepath: src/sanityClient.js
import createClient from '@sanity/client';

export default createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Your project ID from env
  dataset: 'production', // Your dataset name
  apiVersion: '2023-10-01',
  useCdn: true, // `false` if you want to ensure fresh data
});