"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { neighborhoods, properties } from "@/lib/data";

export default function NeighborhoodDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;

    const neighborhood = neighborhoods.find((n) => n.slug === slug);

    if (!neighborhood) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-xl font-semibold">Neighborhood Not Found</h1>
            </div>
        );
    }

    const filteredProperties = properties.filter(
        (p) => p.neighborhood === slug
    );

    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            <div className="relative h-[50vh]">
                <Image
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-serif">
                        {neighborhood.name}
                    </h1>
                </div>
            </div>

            <div className="max-w-5xl mx-auto py-12 px-6 text-center">
                <p className="text-gray-700">
                    {neighborhood.shortDescription}
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-6 pb-16">
                <h2 className="text-2xl font-serif mb-6">
                    Available Properties
                </h2>

                {filteredProperties.length === 0 ? (
                    <p className="text-gray-600">
                        No properties available in this area.
                    </p>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProperties.map((property) => (
                            <div
                                key={property.id}
                                className="bg-white rounded-lg overflow-hidden shadow"
                            >
                                <div className="relative w-full h-48">
                                    <Image
                                        src={property.image}
                                        alt={property.title}
                                        fill
                                        className="object-cover"
                                    />
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