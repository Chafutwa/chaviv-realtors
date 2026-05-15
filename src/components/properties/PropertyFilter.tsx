import { ChevronDown } from "lucide-react";

interface PropertyFilterProps {
    selectedType: string;
    setSelectedType: (type: string) => void;
    selectedStatus: string;
    setSelectedStatus: (status: string) => void;
    selectedLocation: string;
    setSelectedLocation: (location: string) => void;
    locations: string[];
    priceRange: [number, number];
    setPriceRange: (range: [number, number]) => void;
    bedrooms: string;
    setBedrooms: (beds: string) => void;
}

const propertyTypes = ["All", "Apartment", "House", "Villa", "Penthouse", "Commercial"];
const statuses = ["All", "For Sale", "For Rent"];
const bedroomOptions = ["Any", "1", "2", "3", "4", "5+"];

export default function PropertyFilter({
    selectedType,
    setSelectedType,
    selectedStatus,
    setSelectedStatus,
    selectedLocation,
    setSelectedLocation,
    locations,
    priceRange,
    setPriceRange,
    bedrooms,
    setBedrooms,
}: PropertyFilterProps) {
    const formatPrice = (price: number) => {
        if (price >= 1000000) return `KES ${(price / 1000000).toFixed(0)}M`;
        if (price >= 1000) return `KES ${(price / 1000).toFixed(0)}K`;
        return `KES ${price}`;
    };

    return (
        <div className="space-y-6">
            {/* Property Type */}
            <div>
                <h4 className="font-semibold text-[#1A1A1A] mb-3">Property Type</h4>
                <div className="space-y-2">
                    {propertyTypes.map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer group">
                            <input
                                type="radio"
                                name="type"
                                checked={selectedType === type}
                                onChange={() => setSelectedType(type)}
                                className="w-4 h-4 accent-[#C9A962] cursor-pointer"
                            />
                            <span className={`text-sm ${selectedType === type ? "text-[#1A3A3A] font-medium" : "text-[#6B7280] group-hover:text-[#1A1A1A]"}`}>
                                {type}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Status */}
            <div>
                <h4 className="font-semibold text-[#1A1A1A] mb-3">Status</h4>
                <div className="space-y-2">
                    {statuses.map((status) => (
                        <label key={status} className="flex items-center gap-2 cursor-pointer group">
                            <input
                                type="radio"
                                name="status"
                                checked={selectedStatus === status}
                                onChange={() => setSelectedStatus(status)}
                                className="w-4 h-4 accent-[#C9A962] cursor-pointer"
                            />
                            <span className={`text-sm ${selectedStatus === status ? "text-[#1A3A3A] font-medium" : "text-[#6B7280] group-hover:text-[#1A1A1A]"}`}>
                                {status}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Location */}
            <div>
                <h4 className="font-semibold text-[#1A1A1A] mb-3">Neighborhood</h4>
                <div className="relative">
                    <select
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="w-full px-3 py-2 bg-[#F5F5F0] border border-gray-200 appearance-none focus:border-[#C9A962] focus:outline-none text-sm"
                    >
                        {locations.map((loc) => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6B7280] pointer-events-none" size={16} />
                </div>
            </div>

            {/* Price Range */}
            <div>
                <h4 className="font-semibold text-[#1A1A1A] mb-3">Price Range</h4>
                <div className="space-y-3">
                    <input
                        type="range"
                        min="0"
                        max="100000000"
                        step="1000000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full accent-[#C9A962]"
                    />
                    <div className="flex justify-between text-sm text-[#6B7280]">
                        <span>{formatPrice(priceRange[0])}</span>
                        <span>{formatPrice(priceRange[1])}</span>
                    </div>
                </div>
            </div>

            {/* Bedrooms */}
            <div>
                <h4 className="font-semibold text-[#1A1A1A] mb-3">Bedrooms</h4>
                <div className="grid grid-cols-3 gap-2">
                    {bedroomOptions.map((bed) => (
                        <button
                            key={bed}
                            onClick={() => setBedrooms(bed)}
                            className={`py-2 text-sm border transition-colors ${bedrooms === bed
                                    ? "bg-[#0B1F1F] text-white border-[#0B1F1F]"
                                    : "bg-white text-[#6B7280] border-gray-200 hover:border-[#C9A962]"
                                }`}
                        >
                            {bed === "Any" ? "Any" : `${bed}+`}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}