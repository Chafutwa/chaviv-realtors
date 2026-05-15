"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PropertyCard from "@/components/properties/PropertyCard";
import { properties, Property } from "@/lib/data";

interface SimilarPropertiesProps {
    currentProperty: Property;
}

export default function SimilarProperties({ currentProperty }: SimilarPropertiesProps) {
    // Find similar properties (same neighborhood or type, excluding current)
    const similar = properties
        .filter(p =>
            p.id !== currentProperty.id &&
            (p.neighborhood === currentProperty.neighborhood || p.type === currentProperty.type)
        )
        .slice(0, 3);

    if (similar.length === 0) return null;

    return (
        <section className="bg-white py-16 border-t border-gray-200">
            <div className="section-padding max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="font-serif text-3xl text-[#1A1A1A] mb-2">Similar Properties</h2>
                        <p className="text-[#6B7280]">You might also be interested in these listings</p>
                    </div>
                    <Link
                        href="/properties"
                        className="hidden md:flex items-center gap-2 text-[#1A3A3A] hover:text-[#C9A962] transition-colors font-semibold"
                    >
                        <span>View All</span>
                        <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {similar.map((property, index) => (
                        <motion.div
                            key={property.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <PropertyCard property={property} />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link
                        href="/properties"
                        className="inline-flex items-center gap-2 text-[#1A3A3A] hover:text-[#C9A962] transition-colors font-semibold"
                    >
                        <span>View All Properties</span>
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}