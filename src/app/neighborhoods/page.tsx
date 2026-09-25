"use client";

import Image from "next/image";
import Link from "next/link";
import { neighborhoods } from "@/lib/data";

export default function NeighborhoodsPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif mb-4">
                        Explore Neighborhoods
                    </h1>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover properties across Nairobi&apos;s most sought-after
                        neighborhoods.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {neighborhoods.map((neighborhood) => (
                        <Link
                            key={neighborhood.id}
                            href={`/properties?location=${encodeURIComponent(
                                neighborhood.name
                            )}`}
                            className="group block"
                        >
                            <div className="relative h-80 overflow-hidden rounded-lg">
                                <Image
                                    src={neighborhood.image}
                                    alt={neighborhood.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

                                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                                    <h2 className="text-2xl font-serif">
                                        {neighborhood.name}
                                    </h2>

                                    <p className="text-sm mt-1">
                                        {neighborhood.propertyCount}{" "}
                                        {neighborhood.propertyCount === 1
                                            ? "Property"
                                            : "Properties"}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
