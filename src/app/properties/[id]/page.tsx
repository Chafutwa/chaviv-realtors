"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Bed,
    Bath,
    Maximize,
    MapPin,
    Check,
    ChevronLeft,
    ChevronRight,
    Phone,
    Mail,
} from "lucide-react";

import { properties } from "@/lib/data";

export default function PropertyDetailPage() {
    const params = useParams();
    const id = params.id as string;

    const property = properties.find((p) => p.id === id);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const [formType, setFormType] = useState("Property Inquiry");
    const [loading, setLoading] = useState(false);

    if (!property) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F5F5F0]">
                <h1 className="text-2xl font-serif text-[#0B1F1F]">
                    Property Not Found
                </h1>
            </div>
        );
    }

    const images = [property.image, ...(property.gallery || [])];

    const openLeadForm = (type: string) => {
        setFormType(type);
        setOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const data = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            message: formData.get("message"),
            source: formType,
            property: property.title,
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Request sent successfully!");
                e.currentTarget.reset();
                setOpen(false);
            } else {
                alert("Failed to send request.");
            }
        } catch (error) {
            alert("Something went wrong.");
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-[#F5F5F0] pt-28">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-sm text-gray-500 mb-5">
                    <Link href="/" className="hover:text-[#C9A962]">
                        Home
                    </Link>
                    <span> / </span>
                    <Link href="/properties" className="hover:text-[#C9A962]">
                        Properties
                    </Link>
                    <span> / </span>
                    <span className="text-[#0B1F1F]">{property.title}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-14">
                    <div className="lg:col-span-2 relative h-[430px] rounded-xl overflow-hidden">
                        <Image
                            src={images[currentImageIndex]}
                            alt={property.title}
                            fill
                            priority
                            className="object-cover"
                        />

                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={() =>
                                        setCurrentImageIndex((prev) =>
                                            prev === 0 ? images.length - 1 : prev - 1
                                        )
                                    }
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
                                >
                                    <ChevronLeft size={22} />
                                </button>

                                <button
                                    onClick={() =>
                                        setCurrentImageIndex((prev) =>
                                            prev === images.length - 1 ? 0 : prev + 1
                                        )
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
                                >
                                    <ChevronRight size={22} />
                                </button>
                            </>
                        )}
                    </div>

                    <div className="hidden lg:grid grid-rows-2 gap-4">
                        {images.slice(1, 3).map((img, index) => (
                            <div
                                key={`${img}-${index}`}
                                onClick={() => setCurrentImageIndex(index + 1)}
                                className="relative rounded-xl overflow-hidden cursor-pointer"
                            >
                                <Image
                                    src={img}
                                    alt={property.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
                    <div>
                        <h1 className="text-4xl font-bold text-[#0B1F1F] mb-3">
                            {property.title}
                        </h1>

                        <div className="flex items-center gap-2 text-gray-500 mb-8">
                            <MapPin size={18} />
                            {property.location}
                        </div>

                        <div className="flex gap-14 py-6 border-y border-gray-200 mb-10">
                            <div className="flex items-center gap-3">
                                <Bed className="text-[#E8E2D4]" size={28} />
                                <div>
                                    <p className="text-[#0B1F1F] font-bold">
                                        {property.bedrooms}
                                    </p>
                                    <p className="text-gray-500">Bedrooms</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Bath className="text-[#E8E2D4]" size={28} />
                                <div>
                                    <p className="text-[#0B1F1F] font-bold">
                                        {property.bathrooms}
                                    </p>
                                    <p className="text-gray-500">Bathrooms</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Maximize className="text-[#E8E2D4]" size={28} />
                                <div>
                                    <p className="text-[#0B1F1F] font-bold">
                                        {property.sqft}
                                    </p>
                                    <p className="text-gray-500">Sq Ft</p>
                                </div>
                            </div>
                        </div>

                        <section className="mb-14">
                            <h2 className="text-4xl font-bold text-[#0B1F1F] mb-8">
                                Description
                            </h2>

                            <div className="text-gray-600 leading-[2.2] text-[18px] whitespace-pre-line max-w-4xl">
                                {property.description}
                            </div>
                        </section>

                        <section className="mt-12">
                            <h2 className="text-4xl font-bold text-[#0B1F1F] mb-8">
                                Amenities
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
                                {property.amenities.map((amenity: string) => (
                                    <div
                                        key={amenity}
                                        className="flex items-center gap-3 text-gray-700 text-lg"
                                    >
                                        <Check size={20} className="text-[#C9A962]" />
                                        <span>{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <aside>
                        <div className="bg-white rounded-2xl shadow-md p-8 sticky top-28 border border-gray-100">
                            <p className="text-gray-500 mb-2 text-lg">Price</p>

                            <p className="text-5xl font-bold text-[#0B1F1F] mb-8">
                                {property.price}
                            </p>

                            <button
                                onClick={() => openLeadForm("Schedule Viewing")}
                                className="w-full bg-[#C9A962] hover:bg-[#B8954E] text-[#0B1F1F] py-4 rounded-xl font-semibold text-lg transition mb-4"
                            >
                                Book Viewing
                            </button>

                            <button
                                onClick={() => openLeadForm("Make an Offer")}
                                className="w-full bg-[#0B1F1F] hover:bg-[#071414] text-white py-4 rounded-xl font-semibold text-lg transition mb-8"
                            >
                                Make an Offer
                            </button>

                            <div className="border-t border-gray-200 pt-6">
                                <p className="text-[#0B1F1F] font-semibold text-xl mb-5">
                                    Contact Us
                                </p>

                                <a
                                    href={`tel:${property.agent.phone}`}
                                    className="flex items-center gap-3 text-[#0B1F1F] hover:text-[#C9A962] transition mb-4 text-lg"
                                >
                                    <Phone size={20} />
                                    {property.agent.phone}
                                </a>

                                <a
                                    href={`mailto:${property.agent.email}`}
                                    className="flex items-center gap-3 text-[#0B1F1F] hover:text-[#C9A962] transition text-lg break-all"
                                >
                                    <Mail size={20} />
                                    {property.agent.email}
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {open && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] px-4">
                    <div className="bg-white rounded-2xl p-8 w-full max-w-md relative shadow-2xl">
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-black"
                        >
                            ✕
                        </button>

                        <h3 className="text-2xl font-serif mb-3 text-[#0B1F1F]">
                            {formType}
                        </h3>

                        <p className="text-gray-500 text-sm mb-6">
                            Leave your details and our team will contact you shortly.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full border border-gray-200 p-3 rounded-lg outline-none focus:border-[#C9A962]"
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Contact Number"
                                required
                                className="w-full border border-gray-200 p-3 rounded-lg outline-none focus:border-[#C9A962]"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                className="w-full border border-gray-200 p-3 rounded-lg outline-none focus:border-[#C9A962]"
                            />

                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows={4}
                                className="w-full border border-gray-200 p-3 rounded-lg outline-none focus:border-[#C9A962]"
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#0B1F1F] text-white py-3 rounded-lg hover:bg-black transition disabled:opacity-60"
                            >
                                {loading ? "Sending..." : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
