"use client";

import { useState } from "react";

export default function CTA() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const data = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            message: formData.get("message"),
            source: "CTA Consultation Form",
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
                alert("Consultation request sent successfully!");

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
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto text-center px-6">

                <h2 className="text-3xl md:text-4xl font-serif text-[#0B1F1F] mb-4">
                    Let’s Find Your Perfect Property
                </h2>

                <p className="text-gray-600 mb-8">
                    Book a consultation and let us guide you to the right investment or home.
                </p>

                <button
                    onClick={() => setOpen(true)}
                    className="bg-[#0B1F1F] text-white px-8 py-3 rounded-lg hover:bg-black transition"
                >
                    Book Consultation
                </button>
            </div>

            {/* MODAL */}
            {open && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">

                    <div className="bg-white rounded-2xl p-8 w-full max-w-md relative shadow-2xl">

                        {/* CLOSE */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-black"
                        >
                            ✕
                        </button>

                        <h3 className="text-2xl font-serif mb-3 text-[#0B1F1F]">
                            Book a Consultation
                        </h3>

                        <p className="text-gray-500 text-sm mb-6">
                            Leave your details and our team will contact you shortly.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >

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
        </section>
    );
}