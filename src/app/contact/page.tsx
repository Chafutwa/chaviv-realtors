"use client";

import { useState } from "react";
import {
    Phone,
    Mail,
    Send,
    Facebook,
    Instagram,
    MessageCircle,
} from "lucide-react";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            subject: formData.get("subject"),
            message: formData.get("message"),
            source: "Contact Page Form",
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
                alert("Message sent successfully!");
                e.currentTarget.reset();
            } else {
                alert("Failed to send message.");
            }
        } catch (error) {
            alert("Something went wrong.");
        }

        setLoading(false);
    };

    return (
        <main className="min-h-screen bg-[#F5F5F0]">
            {/* HERO */}
            <section className="bg-[#0B1F1F] pt-32 pb-24 text-center text-white">
                <p className="text-[#C9A962] uppercase tracking-[0.3em] text-xs font-semibold mb-4">
                    Get In Touch
                </p>

                <h1 className="font-serif text-4xl md:text-6xl mb-6">
                    Let&apos;s Start a Conversation
                </h1>

                <p className="text-white/70 max-w-2xl mx-auto px-6 leading-relaxed">
                    Whether you&apos;re looking to buy, sell, or invest in Nairobi&apos;s
                    premium real estate, our team is here to guide you every step
                    of the way.
                </p>
            </section>

            {/* CONTACT CARDS */}
            <section className="max-w-7xl mx-auto px-6 -mt-10 pb-20">
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">

                    <div className="bg-white shadow-lg p-8">
                        <div className="w-12 h-12 bg-[#0B1F1F] text-white flex items-center justify-center mb-5">
                            <Phone size={22} />
                        </div>

                        <h3 className="font-serif text-2xl text-[#0B1F1F] mb-3">
                            Call Us
                        </h3>

                        <p className="text-gray-500 text-sm">
                            +254 718 493 239
                        </p>

                        <p className="text-gray-500 text-sm">
                            +254 750 456 789
                        </p>

                        <a
                            href="tel:+254718493239"
                            className="inline-block text-[#C9A962] text-sm mt-4"
                        >
                            Contact Now →
                        </a>
                    </div>

                    <div className="bg-white shadow-lg p-8">
                        <div className="w-12 h-12 bg-[#0B1F1F] text-white flex items-center justify-center mb-5">
                            <Mail size={22} />
                        </div>

                        <h3 className="font-serif text-2xl text-[#0B1F1F] mb-3">
                            Email Us
                        </h3>

                        <p className="text-gray-500 text-sm">
                            chavivrealtors@gmail.com
                        </p>

                        <a
                            href="mailto:chavivrealtors@gmail.com"
                            className="inline-block text-[#C9A962] text-sm mt-4"
                        >
                            Contact Now →
                        </a>
                    </div>

                </div>

                {/* FORM + SIDEBAR */}
                <div className="grid lg:grid-cols-[1fr_420px] gap-10 max-w-6xl mx-auto">

                    {/* FORM */}
                    <div className="bg-white shadow-lg p-8">

                        <h2 className="font-serif text-3xl text-[#0B1F1F] mb-3">
                            Send Us a Message
                        </h2>

                        <p className="text-gray-500 text-sm mb-8">
                            Fill out the form below and we&apos;ll get back to you within 24 hours.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            <div className="grid md:grid-cols-2 gap-4">

                                <div>
                                    <label className="block text-sm font-semibold mb-2">
                                        Full Name *
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full bg-[#F5F5F0] px-4 py-3 outline-none focus:ring-1 focus:ring-[#C9A962]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">
                                        Email Address *
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full bg-[#F5F5F0] px-4 py-3 outline-none focus:ring-1 focus:ring-[#C9A962]"
                                    />
                                </div>

                            </div>

                            <div className="grid md:grid-cols-2 gap-4">

                                <div>
                                    <label className="block text-sm font-semibold mb-2">
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+254 712 345 678"
                                        className="w-full bg-[#F5F5F0] px-4 py-3 outline-none focus:ring-1 focus:ring-[#C9A962]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">
                                        Subject *
                                    </label>

                                    <select
                                        name="subject"
                                        required
                                        className="w-full bg-[#F5F5F0] px-4 py-3 outline-none focus:ring-1 focus:ring-[#C9A962]"
                                    >
                                        <option>General Inquiry</option>
                                        <option>Schedule Viewing</option>
                                        <option>Buying Property</option>
                                        <option>Selling Property</option>
                                        <option>Investment Inquiry</option>
                                    </select>
                                </div>

                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Message *
                                </label>

                                <textarea
                                    name="message"
                                    required
                                    rows={6}
                                    placeholder="Tell us about your requirements..."
                                    className="w-full bg-[#F5F5F0] px-4 py-3 outline-none focus:ring-1 focus:ring-[#C9A962] resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#C9A962] text-[#0B1F1F] py-4 font-semibold hover:bg-[#D4B87D] transition disabled:opacity-60 flex items-center justify-center gap-2"
                            >
                                <Send size={18} />

                                {loading ? "Sending..." : "Send Message"}
                            </button>

                        </form>
                    </div>

                    {/* SIDEBAR */}
                    <div className="space-y-6">

                        <div className="bg-[#0B1F1F] text-white p-8">

                            <h3 className="font-serif text-2xl mb-5">
                                Connect With Us
                            </h3>

                            <p className="text-white/70 text-sm mb-6 leading-relaxed">
                                Follow us on social media for the latest listings,
                                market updates, and real estate tips.
                            </p>

                            <div className="flex gap-3">

                                <a
                                    href="https://wa.me/254718493239"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 hover:bg-[#C9A962] transition flex items-center justify-center"
                                >
                                    <MessageCircle size={18} />
                                </a>

                                <a
                                    href="https://www.facebook.com/share/1EtRizgft1/?mibextid=wwXIfr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 hover:bg-[#C9A962] transition flex items-center justify-center"
                                >
                                    <Facebook size={18} />
                                </a>

                                <a
                                    href="https://www.instagram.com/chavivrealtors?igsh=MWN0enJldno2dHNw&utm_source=qr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 hover:bg-[#C9A962] transition flex items-center justify-center"
                                >
                                    <Instagram size={18} />
                                </a>

                            </div>
                        </div>

                        <div className="bg-[#EFE9D8] border-l-4 border-[#C9A962] p-8">

                            <h3 className="font-serif text-xl text-[#0B1F1F] mb-3">
                                Diaspora Clients
                            </h3>

                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                We specialize in helping Kenyans abroad invest in
                                property back home. Schedule a virtual consultation today.
                            </p>

                            <a
                                href="/contact"
                                className="font-semibold text-[#0B1F1F] text-sm"
                            >
                                Book Virtual Meeting →
                            </a>

                        </div>

                    </div>

                </div>
            </section>
        </main>
    );
}