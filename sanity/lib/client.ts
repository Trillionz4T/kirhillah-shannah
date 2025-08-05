// lib/sanity/client.ts
import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId, // ← string, not undefined
  dataset,      // or your actual dataset
  apiVersion,   // match your version
  useCdn: false               // disable for fresh content
});








/*

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
  */
