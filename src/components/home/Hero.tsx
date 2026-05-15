"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background fallback image */}
            <Image
                src="/images/cheval (5).jpeg"
                alt="Luxury real estate background"
                fill
                priority
                className="absolute inset-0 object-cover"
            />

            {/* Background video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                poster="/images/cheval (5).jpeg"
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/images/cheval.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F1F]/80 via-[#0B1F1F]/40 to-[#0B1F1F]/90" />

            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <span className="text-[#C9A962] uppercase tracking-widest text-sm mb-4 block">
                        Nairobi’s Premier Real Estate
                    </span>

                    <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">
                        Find Your <span className="text-[#C9A962]">Perfect</span> Home
                    </h1>

                    <p className="text-white/80 mb-8">
                        Discover luxury homes in Nairobi’s most prestigious neighborhoods.
                    </p>
                </motion.div>

                <div className="bg-white p-4 shadow-xl max-w-xl mx-auto flex gap-2">
                    <div className="flex items-center gap-2 flex-1 px-3">
                        <MapPin className="text-[#C9A962]" size={18} />
                        <input
                            type="text"
                            placeholder="Search by location..."
                            className="w-full outline-none"
                        />
                    </div>

                    <Link
                        href="/properties"
                        className="bg-[#1A3A3A] text-white px-6 py-2 flex items-center gap-2"
                    >
                        <Search size={18} />
                        Search
                    </Link>
                </div>
            </div>
        </section>
    );
}