/* eslint-disable @next/next/no-img-element */
"use client";

import { PropertyWithImageType } from "@/models/property";
import { formatCurrency } from "@/utils/common";
import { IconEdit, IconMapPin, IconTrash } from "@tabler/icons-react";
import Link from "next/link";
import { PortableText } from "next-sanity";

export const PropertyCard = ({ property }: { property: PropertyWithImageType }) => {
  return (
    <Link href={`/${property.slug.current}`} className="w-[350px] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer">
      {property?.image && (
        <img
          className="w-full h-48 object-cover"
          src={property?.image}
          alt={property.title}
        />
      )}
      <div className="p-4 flex flex-col gap-1">
        <h2 className="text-lg font-bold">{property.title}</h2>
        <div className="text-xs flex items-center gap-1 text-gray-600">
          <IconMapPin size={14} />
          <p>{property.location}</p>
        </div>
        <p className="text-lg font-bold text-purple-700">{formatCurrency(property.price)}</p>
        {Array.isArray(property.description) &&
          <div className="property-list-description text-sm text-gray-700">
            <PortableText value={property.description} />
          </div>
        }
        <div className="flex mt-2 gap-2">
          <button onClick={e => {
            e.preventDefault();
          }} className="p-2 hover:bg-gray-100 cursor-pointer rounded-md transition-all"><IconEdit size={14} /></button>
          <button onClick={e => {
            e.preventDefault();
          }} className="p-2 hover:bg-gray-100 cursor-pointer rounded-md transition-all"><IconTrash size={14} /></button>
        </div>
      </div>
    </Link>
  );
}