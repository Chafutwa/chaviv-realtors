{/* eslint-disable react/no-unescaped-entities 
"use client";

import { motion } from "framer-motion";
import { TrendingUp, Shield, Users, Award, Clock, Globe } from "lucide-react";

const features = [
    {
        icon: TrendingUp,
        title: "Investment Intelligence",
        description: "Our proprietary rating system helps you identify high-yield properties with strong appreciation potential.",
    },
    {
        icon: Shield,
        title: "Verified Listings",
        description: "Every property is thoroughly vetted and verified to ensure accuracy and transparency in all transactions.",
    },
    {
        icon: Users,
        title: "Expert Agents",
        description: "Our team of experienced agents specializes in Nairobi's premium neighborhoods and market trends.",
    },
    {
        icon: Award,
        title: "Premium Service",
        description: "White-glove service from property search to closing, ensuring a seamless experience for discerning clients.",
    },
    {
        icon: Clock,
        title: "Market Insights",
        description: "Real-time market data and neighborhood reports to inform your investment decisions.",
    },
    {
        icon: Globe,
        title: "Diaspora Services",
        description: "Specialized services for Those abroad, including virtual tours and remote transaction management.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="section-padding py-20 bg-[#F5F5F0]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content 
                    <div>
                        <span className="text-[#C9A962] text-sm font-bold tracking-widest uppercase mb-2 block">
                            Why Chaviv
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-6">
                            Setting the Standard in Luxury Real Estate
                        </h2>
                        <p className="text-[#6B7280] mb-8 leading-relaxed">
                            We combine deep market expertise with innovative technology to deliver an
                            unmatched real estate experience. Our commitment to excellence has made us
                            the preferred choice for luxury property seekers in Nairobi.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="border-l-2 border-[#C9A962] pl-4">
                                <div className="font-serif text-3xl text-[#1A3A3A] mb-1">98%</div>
                                <div className="text-sm text-[#6B7280]">Client Satisfaction</div>
                            </div>
                            <div className="border-l-2 border-[#C9A962] pl-4">
                                <div className="font-serif text-3xl text-[#1A3A3A] mb-1">5+</div>
                                <div className="text-sm text-[#6B7280]">Years Experience</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Grid 
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow group"
                            >
                                <div className="w-12 h-12 bg-[#F5F5F0] flex items-center justify-center mb-4 group-hover:bg-[#C9A962] transition-colors">
                                    <feature.icon className="text-[#1A3A3A] group-hover:text-[#0B1F1F]" size={24} />
                                </div>
                                <h3 className="font-serif text-lg text-[#1A1A1A] mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-[#6B7280] leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}   */}