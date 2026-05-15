"use client";

import { motion } from "framer-motion";
import { Award, Users, TrendingUp, Target, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const stats = [
    { value: "Nairobi", label: "Market Focus", icon: Target },
    { value: "4+", label: "Prime Areas Covered", icon: Award },
    { value: "100%", label: "Client-Centered", icon: Users },
    { value: "Modern", label: "Digital Experience", icon: TrendingUp },
];

const values = [
    {
        title: "Clarity",
        description: "We simplify real estate by presenting clear, honest, and structured property information.",
    },
    {
        title: "Trust",
        description: "We focus on transparency and reliability in every interaction and recommendation.",
    },
    {
        title: "Modern Approach",
        description: "We use design, technology, and data to improve how people discover and evaluate property.",
    },
    {
        title: "Client Focus",
        description: "Every decision we make is guided by what actually helps you move forward confidently.",
    },
];

const team = [
    {
        name: "Founder",
        role: "Founder & Lead Strategist",
        image: "/images/team/founder.jpg",
        bio: "Focused on building a smarter and more transparent real estate experience for modern buyers and investors in Nairobi.",
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F0]">

            {/* HERO */}
            <section className="relative bg-[#0B1F1F] pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A962] rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A962] rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="text-[#C9A962] text-sm font-bold tracking-widest uppercase mb-4 block">
                            About Chaviv
                        </span>

                        <h1 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight">
                            A Modern Approach to Real Estate in Nairobi
                        </h1>

                        <p className="text-white/70 text-lg leading-relaxed">
                            We’re building a simpler, more transparent way to discover and invest
                            in property across Nairobi’s most sought-after neighborhoods.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* STATS */}
            <section className="bg-[#C9A962] py-12 -mt-12 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <stat.icon className="mx-auto text-[#0B1F1F] mb-3" size={32} />
                                <p className="font-serif text-3xl text-[#0B1F1F]">{stat.value}</p>
                                <p className="text-[#0B1F1F]/80 text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STORY */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* TEXT */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#C9A962] text-sm font-bold uppercase mb-2 block">
                            Our Story
                        </span>

                        <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-6">
                            Built for Clarity and Confidence
                        </h2>

                        <div className="space-y-4 text-[#6B7280]">
                            <p>
                                Chaviv was created to bring clarity and confidence to Nairobi’s
                                real estate space. We saw how overwhelming property decisions can be.
                            </p>
                            <p>
                                So we built something different. A platform that combines clean
                                presentation, reliable insights, and a simplified experience.
                            </p>
                            <p>
                                Our focus is simple: help you make smarter property decisions without the noise.
                            </p>
                        </div>

                        <div className="mt-8 flex gap-4 flex-wrap">
                            <Link href="/properties" className="btn-primary">
                                Browse Properties
                            </Link>
                            <Link href="/contact" className="btn-secondary">
                                Work With Us
                            </Link>
                        </div>
                    </motion.div>

                    {/* IMAGE (FIXED LOGO) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] relative">
                            <div className="absolute inset-4 border-2 border-[#C9A962] z-10 pointer-events-none" />

                            <Image
                                src="/images/logo.png"
                                alt="Chaviv Realtors Logo"
                                fill
                                className="object-contain p-10"
                            />
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* VALUES */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">

                    <span className="text-[#C9A962] text-sm font-bold uppercase block mb-2">
                        Our Principles
                    </span>

                    <h2 className="font-serif text-3xl md:text-4xl mb-12">
                        What Guides Us
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 hover:bg-[#F5F5F0] transition"
                            >
                                <div className="w-16 h-16 bg-[#0B1F1F] flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="text-white" size={28} />
                                </div>

                                <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                                <p className="text-sm text-[#6B7280]">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* TEAM */}
            <section className="max-w-5xl mx-auto px-6 py-20 text-center">

                <span className="text-[#C9A962] text-sm font-bold uppercase block mb-2">
                    Leadership
                </span>

                <h2 className="font-serif text-3xl mb-6">
                    Behind the Vision
                </h2>

                {team.map((member) => (
                    <div key={member.name} className="max-w-md mx-auto">
                        <div className="h-80 bg-[#0B1F1F] flex items-center justify-center text-white/40 mb-4">
                            {member.name} Image
                        </div>

                        <h3 className="text-xl font-serif">{member.name}</h3>
                        <p className="text-[#C9A962] text-sm">{member.role}</p>
                        <p className="text-[#6B7280] text-sm mt-2">{member.bio}</p>
                    </div>
                ))}

            </section>

            {/* CTA */}
            <section className="bg-[#C9A962] py-20 text-center px-6">

                <h2 className="font-serif text-3xl md:text-4xl text-[#0B1F1F] mb-6">
                    Ready to Explore Property?
                </h2>

                <p className="text-[#0B1F1F]/80 mb-8 max-w-xl mx-auto">
                    Start browsing curated listings or reach out for guidance on your next move.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/properties" className="btn-primary">
                        Browse Properties
                    </Link>
                    <Link href="/contact" className="btn-secondary">
                        Get In Touch
                    </Link>
                </div>

            </section>

        </div>
    );
}