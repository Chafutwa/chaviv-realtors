import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PropertyCard from "@/components/properties/PropertyCard";
import { properties } from "@/lib/data";

export default function FeaturedListings() {
    const featuredProperties = properties.filter(p => p.featured).slice(0, 3);

    return (
        <section className="section-padding py-20 bg-[#F5F5F0]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <span className="text-[#C9A962] text-sm font-bold tracking-widest uppercase mb-2 block">
                            Featured Properties
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A]">
                            Exclusive Listings
                        </h2>
                    </div>
                    <Link
                        href="/properties"
                        className="flex items-center gap-2 text-[#1A3A3A] hover:text-[#C9A962] transition-colors mt-4 md:mt-0 font-semibold"
                    >
                        <span>View All Properties</span>
                        <ArrowRight size={20} />
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProperties.map((property) => (
                        <PropertyCard key={property.id} property={property} featured />
                    ))}
                </div>
            </div>
        </section>
    );
}