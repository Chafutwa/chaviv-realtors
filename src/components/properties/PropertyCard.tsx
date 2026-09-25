"use client";

import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Maximize, MapPin, Heart, ArrowUpRight } from "lucide-react";
import { Property } from "@/types";
import { motion } from "framer-motion";

interface PropertyCardProps {
    property: Property;
    featured?: boolean;
    viewMode?: "grid" | "list";
}

export default function PropertyCard({
    property,
    featured = false,
    viewMode = "grid",
}: PropertyCardProps) {

    if (viewMode === "list") {
        return (
            <motion.div className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row overflow-hidden">

                {/* Image */}
                <div className="relative w-full md:w-72 h-48 md:h-auto shrink-0 overflow-hidden">
                    <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute top-3 left-3 flex gap-2">
                        {property.featured && (
                            <span className="bg-[#C9A962] text-[#0B1F1F] px-2 py-1 text-xs font-bold uppercase">
                                Featured
                            </span>
                        )}

                        <span className="px-2 py-1 text-xs font-bold uppercase bg-[#1A3A3A] text-white">
                            For Sale
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-5 flex flex-col md:flex-row gap-4">

                    <div className="flex-1">

                        <div className="flex items-start justify-between mb-2">
                            <h3 className="font-serif text-xl text-[#1A1A1A] group-hover:text-[#1A3A3A] transition-colors">
                                {property.title}
                            </h3>

                            <p className="font-serif text-xl text-[#C9A962] md:hidden">
                                {property.price}
                            </p>
                        </div>

                        <p className="font-serif text-lg text-[#C9A962] hidden md:block mb-2">
                            {property.price}
                        </p>

                        <div className="flex items-center gap-1 text-[#6B7280] mb-3 text-sm">
                            <MapPin size={16} className="text-[#C9A962]" />
                            {property.location}
                        </div>

                        <div className="flex items-center gap-4 text-sm text-[#1A1A1A] mb-3">

                            <span className="flex items-center gap-1">
                                <Bed size={16} className="text-[#C9A962]" />
                                {property.bedrooms} Beds
                            </span>

                            <span className="flex items-center gap-1">
                                <Bath size={16} className="text-[#C9A962]" />
                                {property.bathrooms} Baths
                            </span>

                            <span className="flex items-center gap-1">
                                <Maximize size={16} className="text-[#C9A962]" />
                                {property.sqft}
                            </span>

                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="flex md:flex-col items-center md:items-stretch gap-3 md:w-40">

                        <Link
                            href={`/properties/${property.id}`}
                            className="flex-1 md:flex-none flex items-center justify-center gap-2 py-3 bg-[#C9A962] text-[#0B1F1F] font-semibold hover:bg-[#D4B87D] transition-colors"
                        >
                            <span>View</span>
                            <ArrowUpRight size={16} />
                        </Link>

                        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 py-3 border border-[#C9A962] text-[#C9A962] hover:bg-[#C9A962] hover:text-[#0B1F1F] transition-colors">
                            <Heart size={16} />
                            <span className="md:hidden">Save</span>
                        </button>

                    </div>

                </div>
            </motion.div>
        );
    }

    // GRID VIEW
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
        >

            {/* Image */}
            <div className="relative h-64 overflow-hidden">

                <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">

                    {property.featured && (
                        <span className="bg-[#C9A962] text-[#0B1F1F] px-3 py-1 text-xs font-bold uppercase tracking-wider">
                            Featured
                        </span>
                    )}

                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#1A3A3A] text-white">
                        For Sale
                    </span>

                </div>

                {/* Favorite */}
                <button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 hover:bg-[#C9A962] hover:text-[#0B1F1F] flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                    <Heart size={20} />
                </button>

                {/* Price */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B1F1F]/90 to-transparent p-4">
                    <p className="font-serif text-2xl text-[#C9A962]">
                        {property.price}
                    </p>
                </div>

            </div>

            {/* Content */}
            <div className="p-5">

                <h3 className="font-serif text-xl text-[#1A1A1A] group-hover:text-[#1A3A3A] transition-colors line-clamp-1 mb-2">
                    {property.title}
                </h3>

                <div className="flex items-center gap-1 text-[#6B7280] mb-4">
                    <MapPin size={16} className="text-[#C9A962]" />
                    <span className="text-sm">{property.location}</span>
                </div>

                {/* Features */}
                <div className="flex items-center gap-4 mb-4 text-sm text-[#1A1A1A] border-t border-b border-gray-100 py-3">

                    <div className="flex items-center gap-1">
                        <Bed size={18} className="text-[#C9A962]" />
                        <span>{property.bedrooms} Beds</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <Bath size={18} className="text-[#C9A962]" />
                        <span>{property.bathrooms} Baths</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <Maximize size={18} className="text-[#C9A962]" />
                        <span>{property.sqft}</span>
                    </div>

                </div>

                {/* CTA */}
                <Link
                    href={`/properties/${property.id}`}
                    className="flex items-center justify-center gap-2 w-full py-3 border border-[#C9A962] text-[#C9A962] hover:bg-[#C9A962] hover:text-[#0B1F1F] transition-all font-semibold text-sm uppercase tracking-wider"
                >
                    <span>View Details</span>
                    <ArrowUpRight size={16} />
                </Link>

            </div>
        </motion.div>
    );
}
