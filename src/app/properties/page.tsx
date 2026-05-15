"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, Grid3X3, List } from "lucide-react";
import { properties, neighborhoods } from "@/lib/data";
import PropertyCard from "@/components/properties/PropertyCard";

export default function PropertiesPage() {
    const searchParams = useSearchParams();

    const location = searchParams.get("location");
    const showAll = searchParams.get("show") === "all";

    const filteredProperties = location
        ? properties.filter((property) =>
              property.location.toLowerCase().includes(location.toLowerCase())
          )
        : properties;

    const visibleProperties = showAll
        ? filteredProperties
        : filteredProperties.slice(0, 6);

    const viewAllLink = location
        ? `/properties?location=${encodeURIComponent(location)}&show=all`
        : "/properties?show=all";

    return (
        <div className="min-h-screen bg-[#F5F5F0]">
            {/* Spacer so header does not swallow page title */}
            <div className="h-24 bg-white border-b border-gray-200" />

            <section className="py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
                        {/* Sidebar Filters */}
                        <aside className="bg-white shadow-lg p-6 h-fit sticky top-28">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="font-serif text-2xl text-[#0B1F1F]">
                                    Filter Properties
                                </h2>

                                <Link
                                    href="/properties"
                                    className="text-xs text-[#C9A962] hover:underline"
                                >
                                    Clear All
                                </Link>
                            </div>

                            {/* Property Type */}
                            <div className="mb-8">
                                <h3 className="font-semibold text-[#0B1F1F] mb-3">
                                    Property Type
                                </h3>

                                <div className="space-y-3 text-sm text-gray-600">
                                    {["All", "Apartment", "House", "Villa", "Penthouse", "Commercial"].map((type) => (
                                        <label key={type} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="type"
                                                defaultChecked={type === "All"}
                                                className="accent-[#C9A962]"
                                            />
                                            {type}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Status */}
                            <div className="mb-8">
                                <h3 className="font-semibold text-[#0B1F1F] mb-3">
                                    Status
                                </h3>

                                <div className="space-y-3 text-sm text-gray-600">
                                    {["All", "For Sale", "For Rent"].map((status) => (
                                        <label key={status} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="status"
                                                defaultChecked={status === "All"}
                                                className="accent-[#C9A962]"
                                            />
                                            {status}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Neighborhood */}
                            <div className="mb-8">
                                <h3 className="font-semibold text-[#0B1F1F] mb-3">
                                    Neighborhood
                                </h3>

                                <select
                                    value={location || "All"}
                                    onChange={(e) => {
                                        const value = e.target.value;

                                        if (value === "All") {
                                            window.location.href = "/properties";
                                        } else {
                                            window.location.href = `/properties?location=${encodeURIComponent(value)}`;
                                        }
                                    }}
                                    className="w-full bg-[#F5F5F0] border border-gray-200 px-4 py-3 text-sm outline-none"
                                >
                                    <option value="All">All</option>

                                    {neighborhoods.map((neighborhood) => (
                                        <option key={neighborhood.name} value={neighborhood.name}>
                                            {neighborhood.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Price Range */}
                            <div className="mb-8">
                                <h3 className="font-semibold text-[#0B1F1F] mb-3">
                                    Price Range
                                </h3>

                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    defaultValue="100"
                                    className="w-full accent-[#C9A962]"
                                />

                                <div className="flex justify-between text-xs text-gray-500 mt-2">
                                    <span>KES 0</span>
                                    <span>KES 100M</span>
                                </div>
                            </div>

                            {/* Bedrooms */}
                            <div>
                                <h3 className="font-semibold text-[#0B1F1F] mb-3">
                                    Bedrooms
                                </h3>

                                <div className="grid grid-cols-3 gap-2">
                                    {["Any", "1+", "2+", "3+", "4+", "5+"].map((bed) => (
                                        <button
                                            key={bed}
                                            className={`py-2 text-sm border transition ${
                                                bed === "Any"
                                                    ? "bg-[#0B1F1F] text-white border-[#0B1F1F]"
                                                    : "bg-white text-gray-600 border-gray-200 hover:border-[#C9A962]"
                                            }`}
                                        >
                                            {bed}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </aside>

                        {/* Listings */}
                        <main>
                            {/* Top Controls */}
                            <div className="bg-white shadow-sm p-4 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <p className="text-sm text-[#0B1F1F]">
                                    Showing{" "}
                                    <span className="font-semibold">
                                        {visibleProperties.length}
                                    </span>{" "}
                                    of{" "}
                                    <span className="font-semibold">
                                        {filteredProperties.length}
                                    </span>{" "}
                                    properties
                                </p>

                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2">
                                        <Search size={16} className="text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Search properties..."
                                            className="outline-none text-sm w-48"
                                        />
                                    </div>

                                    <button className="w-10 h-10 bg-[#C9A962] text-[#0B1F1F] flex items-center justify-center">
                                        <Grid3X3 size={18} />
                                    </button>

                                    <button className="w-10 h-10 border border-gray-200 text-gray-500 flex items-center justify-center">
                                        <List size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Cards */}
                            {visibleProperties.length === 0 ? (
                                <div className="bg-white p-10 text-center shadow">
                                    <p className="text-gray-600">
                                        No properties found in this neighborhood.
                                    </p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                    {visibleProperties.map((property) => (
                                        <PropertyCard
                                            key={property.id}
                                            property={property}
                                        />
                                    ))}
                                </div>
                            )}

                            {/* View All */}
                            {!showAll && filteredProperties.length > 6 && (
                                <div className="flex justify-center mt-12">
                                    <Link
                                        href={viewAllLink}
                                        className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A962] text-[#0B1F1F] font-semibold hover:bg-[#D4B87D] transition-colors"
                                    >
                                        View All Listings
                                    </Link>
                                </div>
                            )}
                        </main>
                    </div>
                </div>
            </section>
        </div>
    );
}