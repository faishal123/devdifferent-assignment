import { createClient } from "next-sanity";

export const createSanityClient = (projectId: string, dataset: string, apiVersion: string) => createClient({
    projectId,
    dataset,
    apiVersion: apiVersion || "2025-08-03",
    useCdn: false,
    perspective: 'raw',
});