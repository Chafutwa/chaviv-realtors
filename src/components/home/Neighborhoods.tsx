"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { neighborhoods, properties } from "@/lib/data";

export default function Neighborhoods() {
    const getPropertyCount = (neighborhoodName: string) => {
        return properties.filter((property) =>
            property.location.toLowerCase().includes(neighborhoodName.toLowerCase())
        ).length;
    };

    return (
        <section className="py-20 bg-[#0B1F1F]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-14 max-w-xl">
                    <h2 className="font-serif text-3xl text-white mb-3">
                        Explore Nairobi’s Finest Areas
                    </h2>
                    <p className="text-white/60 text-sm">
                        Discover neighborhoods that match your lifestyle.
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
                        {neighborhoods.map((neighborhood, index) => {
                            const count = getPropertyCount(neighborhood.name);

                            return (
                                <motion.div
                                    key={neighborhood.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                >
                                    <Link href={`/properties?location=${encodeURIComponent(neighborhood.name)}`}>
                                        <div className="group relative h-80 overflow-hidden rounded-xl cursor-pointer">
                                            {neighborhood.image && (
                                                <Image
                                                    src={neighborhood.image}
                                                    alt={neighborhood.name}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition duration-500"
                                                />
                                            )}

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                                            <div className="absolute top-4 right-4 bg-[#C9A962] text-[#0B1F1F] px-3 py-1 rounded-full text-xs font-bold">
                                                {count} {count === 1 ? "Property" : "Properties"}
                                            </div>

                                            <div className="absolute bottom-0 p-5">
                                                <h3 className="text-white text-xl font-semibold">
                                                    {neighborhood.name}
                                                </h3>
                                                <p className="text-white/70 text-sm">
                                                    Click to view {count} {count === 1 ? "listing" : "listings"}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
