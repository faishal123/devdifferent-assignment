import { createSanityClient } from "@/sanity/client";
import Home from "@/components/pages/Home";
import { PropertyType } from "@/models/property";
import { getSanityImageUrl } from "@/utils/sanity";

const PROPERTIES_QUERY = `*[
  _type == "property" 
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{ _id, title, location, slug, publishedAt, image, description, price, roomNumber, isPublished }`;

const DRAFTS_PROPERTIES_QUERY = `*[
  _type == "property"
  && _id in path("drafts.**")
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, location, slug, publishedAt, image, description, price, roomNumber, isPublished}`;

const options = { next: { revalidate: 30 } };

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const client = createSanityClient(process.env.SANITY_PROJECT_ID || "", process.env.SANITY_DATASET || "", process.env.SANITY_API_VERSION || "");
  const properties = await client.fetch<PropertyType[]>(PROPERTIES_QUERY, {}, options);
  // TODO: implement filtering based on searchParams
  const tab = (await searchParams).tab
  const drafts = await client.fetch<PropertyType[]>(DRAFTS_PROPERTIES_QUERY, {}, options);

  const propertiesWithImage = properties.map(property => ({
    ...property,
    image: getSanityImageUrl(property?.image)
  }));

  return (
    <Home properties={propertiesWithImage} />
  );
}