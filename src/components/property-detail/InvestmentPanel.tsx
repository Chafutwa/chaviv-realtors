"use client";

import { TrendingUp, BarChart3, Users, MapPin, ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import { motion } from "framer-motion";

interface InvestmentScore {
    rating: "A+" | "A" | "B+" | "B" | "C";
    rentalYield: string;
    appreciation: string;
    demandLevel: "Very High" | "High" | "Medium" | "Low";
}

interface InvestmentPanelProps {
    investmentScore: InvestmentScore;
}

const gradeColors = {
    "A+": "bg-green-500",
    "A": "bg-green-400",
    "B+": "bg-yellow-400",
    "B": "bg-yellow-500",
    "C": "bg-red-400",
};

const demandColors = {
    "Very High": "text-green-600",
    "High": "text-green-500",
    "Medium": "text-yellow-500",
    "Low": "text-red-500",
};

export default function InvestmentPanel({ investmentScore }: InvestmentPanelProps) {
    // Parse appreciation percentage
    const appreciationValue = parseInt(investmentScore.appreciation) || 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#0B1F1F] to-[#1A3A3A] p-6 shadow-lg border-l-4 border-[#C9A962]"
        >
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="font-serif text-2xl text-white mb-1">Investment Intelligence</h2>
                    <p className="text-white/60 text-sm">Data-driven insights for smart investors</p>
                </div>
                <div className={`w-16 h-16 ${gradeColors[investmentScore.rating]} rounded-full flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-xl">{investmentScore.rating}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* Rental Yield */}
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <TrendingUp size={20} className="text-[#C9A962]" />
                        <span className="text-white/80 text-sm">Rental Yield</span>
                    </div>
                    <p className="font-serif text-2xl text-white mb-1">{investmentScore.rentalYield}</p>
                    <p className="text-white/60 text-xs">Annual return on investment</p>
                </div>

                {/* Appreciation */}
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <BarChart3 size={20} className="text-[#C9A962]" />
                        <span className="text-white/80 text-sm">Appreciation</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="font-serif text-2xl text-white">{investmentScore.appreciation}</p>
                        {appreciationValue > 0 ? (
                            <ArrowUpRight size={20} className="text-green-400" />
                        ) : appreciationValue < 0 ? (
                            <ArrowDownRight size={20} className="text-red-400" />
                        ) : (
                            <Minus size={20} className="text-yellow-400" />
                        )}
                    </div>
                    <p className="text-white/60 text-xs">Year-over-year growth</p>
                </div>

                {/* Demand Level */}
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <Users size={20} className="text-[#C9A962]" />
                        <span className="text-white/80 text-sm">Market Demand</span>
                    </div>
                    <p className={`font-serif text-2xl ${demandColors[investmentScore.demandLevel]}`}>
                        {investmentScore.demandLevel}
                    </p>
                    <p className="text-white/60 text-xs">Current buyer interest level</p>
                </div>
            </div>

            {/* Investment Summary */}
            <div className="bg-[#C9A962]/20 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#C9A962] rounded-full flex items-center justify-center shrink-0">
                        <MapPin size={20} className="text-[#0B1F1F]" />
                    </div>
                    <div>
                        <h4 className="text-[#C9A962] font-semibold mb-1">Investment Outlook</h4>
                        <p className="text-white/80 text-sm leading-relaxed">
                            This property scores a <span className="text-[#C9A962] font-bold">{investmentScore.rating}</span> grade,
                            indicating {investmentScore.rating.startsWith("A") ? "excellent" : investmentScore.rating.startsWith("B") ? "good" : "moderate"} investment potential.
                            With {investmentScore.demandLevel.toLowerCase()} demand and {investmentScore.rentalYield} rental yield,
                            this represents a {investmentScore.rating.startsWith("A") ? "strong opportunity for capital appreciation and rental income" : "solid addition to a diversified portfolio"}.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}