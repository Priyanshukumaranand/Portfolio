// filepath: src/sanityClient.js
import createClient from '@sanity/client';

export default createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, // Your project ID from env
  dataset: 'production', // Your dataset name
  useCdn: true, // `false` if you want to ensure fresh data
});