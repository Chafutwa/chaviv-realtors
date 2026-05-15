"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#F5F5F0] flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-2xl"
            >
                {/* Animated 404 */}
                <div className="relative mb-8">
                    <motion.div
                        animate={{
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.02, 1]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="font-serif text-[150px] md:text-[200px] leading-none text-[#0B1F1F] select-none"
                    >
                        404
                    </motion.div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#C9A962]" />
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4"
                >
                    Page Not Found
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-[#6B7280] text-lg mb-8 max-w-md mx-auto"
                >
                    The property or page you're looking for seems to have moved to a different neighborhood.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0B1F1F] text-white font-semibold hover:bg-[#1A3A3A] transition-colors"
                    >
                        <Home size={18} />
                        Back to Home
                    </Link>
                    <Link
                        href="/properties"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#0B1F1F] text-[#0B1F1F] font-semibold hover:bg-[#0B1F1F] hover:text-white transition-colors"
                    >
                        <Search size={18} />
                        Browse Properties
                    </Link>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    onClick={() => window.history.back()}
                    className="mt-8 inline-flex items-center gap-2 text-[#6B7280] hover:text-[#C9A962] transition-colors"
                >
                    <ArrowLeft size={16} />
                    Go Back
                </motion.button>
            </motion.div>
        </div>
    );
}