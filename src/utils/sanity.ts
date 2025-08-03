import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { createSanityClient } from "@/sanity/client";
import { ImageType } from "@/models/sanity";


export const getSanityImageUrl = (image?: ImageType | null) => {
  const client = createSanityClient(process.env.SANITY_PROJECT_ID || "", process.env.SANITY_DATASET || "", process.env.SANITY_API_VERSION || "");
  const { projectId, dataset } = client.config();
  const urlFor = (source: SanityImageSource) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;
  return image
    ? urlFor(image)?.width(550).height(310).url()
    : null;
}