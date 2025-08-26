import { createClient } from '@sanity/client';

// Guard against missing env vars during build (causes prerender failure)
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

if (!projectId && typeof window === 'undefined') {
  // eslint-disable-next-line no-console
  console.warn('Sanity projectId is missing. Set NEXT_PUBLIC_SANITY_PROJECT_ID in your env.');
}

export const sanityClient = createClient({
  projectId: projectId || 'placeholder',
  dataset,
  apiVersion: '2023-10-01',
  useCdn: true,
});

export default sanityClient;