/* eslint-disable @next/next/no-img-element */
import { PortableText } from "next-sanity";
import { createSanityClient } from "@/sanity/client";
import Link from "next/link";
import { PropertyType } from "@/models/property";
import { getSanityImageUrl } from "@/utils/sanity";
import { formatCurrency } from "@/utils/common";
import { IconDoor, IconMapPin } from "@tabler/icons-react";

const PROPERTY_QUERY = `*[_type == "property" && slug.current == $slug][0]`;

const options = { next: { revalidate: 30 } };

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const client = createSanityClient(process.env.SANITY_PROJECT_ID || "", process.env.SANITY_DATASET || "", process.env.SANITY_API_VERSION || "");
    const property = await client.fetch<PropertyType>(PROPERTY_QUERY, await params, options);
    const propertyImageUrl = getSanityImageUrl(property?.image)

    return (
        <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
            <Link href="/" className="hover:underline">
                ← Back to posts
            </Link>
            {propertyImageUrl && (
                <img
                    src={propertyImageUrl}
                    alt={property.title}
                    className="aspect-video rounded-xl"
                    width="550"
                    height="310"
                />
            )}
            <div>
                <h1 className="text-4xl font-bold">{property.title}</h1>
                <h1 className="text-xl font-bold text-purple-700">{formatCurrency(property.price)}</h1>
                <div className="text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                        <IconMapPin size={14} />
                        <p>Location: {property.location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconDoor size={14} />
                        <p>Rooms: {property.roomNumber || "N/A"}</p>
                    </div>
                </div>
                <div className="prose">
                    {Array.isArray(property.description) && <PortableText value={property.description} />}
                </div>
            </div>
        </main>
    );
}