import { PortableTextBlock } from "next-sanity";
import { ImageType } from "./sanity";

export type PropertyType = {
    _id: string;
    title: string;
    location: string;
    slug: {
        _type: 'slug', current: string
    };
    publishedAt: string; // ISO date string
    image?: ImageType | null; // Optional, in case some properties do not have an image     
    description: PortableTextBlock;
    price: number;
    roomNumber: number;
    isPublished: boolean;
}

export type PropertyWithImageType = Omit<PropertyType, 'image'> & {
    image?: null | string; // URL of the image
}