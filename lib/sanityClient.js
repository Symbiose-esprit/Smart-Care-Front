import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "upj7zig5",
  dataset: "production",
  apiVersion: "v1",
  token:
    "skXFospDWMl5cXyzPtuKjl2S6qDDoMI33Nz70dfAYruB1K7pjLJF1GxibDh18MuCRhH6gJHNFoGHHCqTSUKQHCEs5jwaCN9jYSh2fKUyFxXbRQI5Q6UVLylonHi78TNtPGcAKxIdyvn2Frj5IgeV5iWjLk16bMnn0AlgI2bqEwNVD0Q7Zc0b",
  useCdn: false,
});
