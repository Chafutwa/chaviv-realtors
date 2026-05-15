"use client";

import { useState, useMemo } from "react";
import { Calculator, Info } from "lucide-react";
import { motion } from "framer-motion";

interface MortgageCalculatorProps {
    price: number;
}

export default function MortgageCalculator({ price }: MortgageCalculatorProps) {
    const [downPaymentPercent, setDownPaymentPercent] = useState(30);
    const [interestRate, setInterestRate] = useState(14);
    const [loanTerm, setLoanTerm] = useState(20);
    const [showDetails, setShowDetails] = useState(false);

    const downPayment = useMemo(() => (price * downPaymentPercent) / 100, [price, downPaymentPercent]);
    const loanAmount = price - downPayment;

    const monthlyPayment = useMemo(() => {
        const monthlyRate = interestRate / 100 / 12;
        const numberOfPayments = loanTerm * 12;

        if (interestRate === 0) return loanAmount / numberOfPayments;

        return (
            (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
        );
    }, [loanAmount, interestRate, loanTerm]);

    const totalPayment = monthlyPayment * loanTerm * 12;
    const totalInterest = totalPayment - loanAmount;

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-KE', {
            style: 'currency',
            currency: 'KES',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 shadow-lg"
        >
            <div className="flex items-center gap-3 mb-6">
                <Calculator size={24} className="text-[#C9A962]" />
                <h2 className="font-serif text-2xl text-[#1A1A1A]">Mortgage Calculator</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Down Payment */}
                <div>
                    <label className="block text-sm font-medium text-[#6B7280] mb-2">
                        Down Payment ({downPaymentPercent}%)
                    </label>
                    <input
                        type="range"
                        min="10"
                        max="50"
                        value={downPaymentPercent}
                        onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                        className="w-full accent-[#C9A962] mb-2"
                    />
                    <p className="font-semibold text-[#1A3A3A]">{formatCurrency(downPayment)}</p>
                </div>

                {/* Interest Rate */}
                <div>
                    <label className="block text-sm font-medium text-[#6B7280] mb-2">
                        Interest Rate ({interestRate}%)
                    </label>
                    <input
                        type="range"
                        min="5"
                        max="25"
                        step="0.5"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full accent-[#C9A962] mb-2"
                    />
                    <p className="font-semibold text-[#1A3A3A]">{interestRate}% per annum</p>
                </div>

                {/* Loan Term */}
                <div>
                    <label className="block text-sm font-medium text-[#6B7280] mb-2">
                        Loan Term ({loanTerm} years)
                    </label>
                    <input
                        type="range"
                        min="5"
                        max="30"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(Number(e.target.value))}
                        className="w-full accent-[#C9A962] mb-2"
                    />
                    <p className="font-semibold text-[#1A3A3A]">{loanTerm} years</p>
                </div>
            </div>

            {/* Results */}
            <div className="bg-[#F5F5F0] p-6 rounded-lg">
                <div className="text-center mb-4">
                    <p className="text-[#6B7280] text-sm mb-1">Estimated Monthly Payment</p>
                    <p className="font-serif text-4xl text-[#C9A962]">{formatCurrency(monthlyPayment)}</p>
                </div>

                <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex items-center gap-2 text-[#1A3A3A] hover:text-[#C9A962] transition-colors mx-auto"
                >
                    <Info size={16} />
                    <span className="text-sm">{showDetails ? "Hide" : "Show"} Details</span>
                </button>

                {showDetails && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-4 pt-4 border-t border-gray-300 space-y-2 text-sm"
                    >
                        <div className="flex justify-between">
                            <span className="text-[#6B7280]">Property Price</span>
                            <span className="font-medium text-[#1A1A1A]">{formatCurrency(price)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#6B7280]">Down Payment</span>
                            <span className="font-medium text-[#1A1A1A]">{formatCurrency(downPayment)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#6B7280]">Loan Amount</span>
                            <span className="font-medium text-[#1A1A1A]">{formatCurrency(loanAmount)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#6B7280]">Total Interest</span>
                            <span className="font-medium text-[#1A1A1A]">{formatCurrency(totalInterest)}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-gray-300">
                            <span className="text-[#6B7280]">Total Cost of Loan</span>
                            <span className="font-bold text-[#1A3A3A]">{formatCurrency(totalPayment)}</span>
                        </div>
                    </motion.div>
                )}
            </div>

            <p className="text-xs text-[#6B7280] mt-4 text-center">
                *This is an estimate. Actual rates may vary based on credit score and lender terms.
            </p>
        </motion.div>
    );
}