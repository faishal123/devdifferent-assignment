"use client";

import { PropertyWithImageType } from "@/models/property";
import { TabMenu } from "@/components/atoms/TabMenu";
import { PropertyCard } from "@/components/molecules/PropertyCard";

export default function Home({ properties }: { properties: PropertyWithImageType[] }) {
  return (
    <div className="px-5">
      <TabMenu menus={[
        {
          title: 'All Properties',
          param: 'all'
        },
        {
          title: 'Published',
          param: 'published'
        },
        {
          title: 'Draft',
          param: 'draft'
        }
      ]} />
      <div className="flex gap-10 flex-wrap justify-center py-5">
        {properties.map(property => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
}
