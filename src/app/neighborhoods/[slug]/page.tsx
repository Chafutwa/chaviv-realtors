"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

interface Neighborhood {
  _id: string;
  name: string;
  slug: { current: string };
  shortDescription: string;
  imageUrl?: string;
}

interface Property {
  _id: string;
  title: string;
  slug: { current: string };
  price: string;
  location: string;
  imageUrl?: string;
}

export default function NeighborhoodDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const [neighborhood, setNeighborhood] = useState<Neighborhood | null>(null);
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!slug) return;
      
      try {
        // Fetch neighborhood
        const neighborhoodQuery = `*[_type == "neighborhood" && slug.current == $slug][0] {
          _id,
          name,
          slug,
          shortDescription,
          "imageUrl": image.asset->url
        }`;
        
        const neighborhoodData = await client.fetch(neighborhoodQuery, { slug });
        setNeighborhood(neighborhoodData);
        
        // Fetch properties in this neighborhood
        const propertiesQuery = `*[_type == "property" && neighborhood == $slug] {
          _id,
          title,
          slug,
          price,
          location,
          "imageUrl": image.asset->url
        }`;
        
        const propertiesData = await client.fetch(propertiesQuery, { slug });
        setProperties(propertiesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-semibold">Loading...</h1>
      </div>
    );
  }

  if (!neighborhood) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-semibold">Neighborhood Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      {/* HERO */}
      <div className="relative h-[50vh]">
        {neighborhood.imageUrl ? (
          <Image
            src={neighborhood.imageUrl}
            alt={neighborhood.name}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-300" />
        )}
        
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-serif">
            {neighborhood.name}
          </h1>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="max-w-5xl mx-auto py-12 px-6 text-center">
        <p className="text-gray-700">
          {neighborhood.shortDescription}
        </p>
      </div>

      {/* PROPERTIES */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-serif mb-6">
          Available Properties
        </h2>

        {properties.length === 0 ? (
          <p className="text-gray-600">
            No properties available in this area.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <div
                key={property._id}
                className="bg-white rounded-lg overflow-hidden shadow"
              >
                <div className="relative w-full h-48">
                  {property.imageUrl ? (
                    <Image
                      src={property.imageUrl}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-200" />
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-semibold">
                    {property.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {property.location}
                  </p>

                  <p className="text-[#C9A962] mt-2 font-medium">
                    {property.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}