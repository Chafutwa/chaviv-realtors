"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function LeadPopup() {
    const [isOpen, setIsOpen] = useState(true);
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
            source: "Homepage Popup",
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
                alert("Lead submitted successfully!");
                setIsOpen(false);
            } else {
                alert("Failed to send.");
            }
        } catch (error) {
            alert("Something went wrong.");
        }

        setLoading(false);
    };

    return (
        <div className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center px-4">
            <div className="relative bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">

                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black"
                >
                    <X size={22} />
                </button>

                <h2 className="text-3xl font-serif text-[#0B1F1F] mb-3">
                    Find Your Perfect Home
                </h2>

                <p className="text-gray-500 mb-6">
                    Leave your details and our team will contact you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        className="w-full border border-gray-200 px-4 py-3 rounded-lg outline-none focus:border-[#C9A962]"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        className="w-full border border-gray-200 px-4 py-3 rounded-lg outline-none focus:border-[#C9A962]"
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        className="w-full border border-gray-200 px-4 py-3 rounded-lg outline-none focus:border-[#C9A962]"
                    />

                    <textarea
                        name="message"
                        placeholder="Tell us what you're looking for..."
                        rows={4}
                        className="w-full border border-gray-200 px-4 py-3 rounded-lg outline-none focus:border-[#C9A962]"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#C9A962] text-[#0B1F1F] py-3 rounded-lg font-semibold hover:bg-[#D4B87D] transition"
                    >
                        {loading ? "Sending..." : "Submit"}
                    </button>

                </form>
            </div>
        </div>
    );
}