"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, User, Phone, Mail, MessageSquare, Check } from "lucide-react";
import { Property } from "@/lib/data";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    property: Property;
    agent: Property["agent"];
}

export default function BookingModal({ isOpen, onClose, property, agent }: BookingModalProps) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const timeSlots = [
        "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
        "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
        }, 1000);
    };

    const resetAndClose = () => {
        setStep(1);
        setIsSubmitted(false);
        setFormData({ name: "", phone: "", email: "", date: "", time: "", message: "" });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={resetAndClose}
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
                >
                    {/* Header */}
                    <div className="bg-[#0B1F1F] p-6 sticky top-0 z-10">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-serif text-xl text-white">Schedule Viewing</h3>
                                <p className="text-white/60 text-sm truncate">{property.title}</p>
                            </div>
                            <button onClick={resetAndClose} className="text-white/60 hover:text-white">
                                <X size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-8"
                            >
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Check size={32} className="text-green-600" />
                                </div>
                                <h4 className="font-serif text-2xl text-[#1A1A1A] mb-2">Request Sent!</h4>
                                <p className="text-[#6B7280] mb-6">
                                    A representative will contact you shortly to confirm your viewing appointment.
                                </p>
                                <button onClick={resetAndClose} className="btn-primary">
                                    Close
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Step 1: Personal Info */}
                                {step === 1 && (
                                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                        <h4 className="font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2">
                                            <User size={18} className="text-[#C9A962]" />
                                            Your Information
                                        </h4>

                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm text-[#6B7280] mb-1">Full Name *</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full px-4 py-3 bg-[#F5F5F0] border border-gray-200 focus:border-[#C9A962] focus:outline-none"
                                                    placeholder="John Doe"
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm text-[#6B7280] mb-1">Phone *</label>
                                                    <div className="relative">
                                                        <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
                                                        <input
                                                            type="tel"
                                                            required
                                                            value={formData.phone}
                                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                            className="w-full pl-10 pr-4 py-3 bg-[#F5F5F0] border border-gray-200 focus:border-[#C9A962] focus:outline-none"
                                                            placeholder="+254 712 345 678"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm text-[#6B7280] mb-1">Email</label>
                                                    <div className="relative">
                                                        <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
                                                        <input
                                                            type="email"
                                                            value={formData.email}
                                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                            className="w-full pl-10 pr-4 py-3 bg-[#F5F5F0] border border-gray-200 focus:border-[#C9A962] focus:outline-none"
                                                            placeholder="john@example.com"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => setStep(2)}
                                            disabled={!formData.name || !formData.phone}
                                            className="w-full btn-primary mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Continue to Schedule
                                        </button>
                                    </motion.div>
                                )}

                                {/* Step 2: Schedule */}
                                {step === 2 && (
                                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                        <h4 className="font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2">
                                            <Calendar size={18} className="text-[#C9A962]" />
                                            Select Date & Time
                                        </h4>

                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm text-[#6B7280] mb-1">Preferred Date *</label>
                                                <input
                                                    type="date"
                                                    required
                                                    min={new Date().toISOString().split('T')[0]}
                                                    value={formData.date}
                                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                                    className="w-full px-4 py-3 bg-[#F5F5F0] border border-gray-200 focus:border-[#C9A962] focus:outline-none"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm text-[#6B7280] mb-2">Preferred Time *</label>
                                                <div className="grid grid-cols-4 gap-2">
                                                    {timeSlots.map((time) => (
                                                        <button
                                                            key={time}
                                                            type="button"
                                                            onClick={() => setFormData({ ...formData, time })}
                                                            className={`py-2 text-sm border transition-colors ${formData.time === time
                                                                ? "bg-[#0B1F1F] text-white border-[#0B1F1F]"
                                                                : "bg-white text-[#6B7280] border-gray-200 hover:border-[#C9A962]"
                                                                }`}
                                                        >
                                                            {time}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm text-[#6B7280] mb-1 flex items-center gap-2">
                                                    <MessageSquare size={16} />
                                                    Additional Message (Optional)
                                                </label>
                                                <textarea
                                                    rows={3}
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                    className="w-full px-4 py-3 bg-[#F5F5F0] border border-gray-200 focus:border-[#C9A962] focus:outline-none resize-none"
                                                    placeholder="Any specific requirements or questions..."
                                                />
                                            </div>
                                        </div>

                                        <div className="flex gap-3 mt-6">
                                            <button
                                                type="button"
                                                onClick={() => setStep(1)}
                                                className="flex-1 py-3 border border-gray-200 hover:border-[#C9A962] transition-colors"
                                            >
                                                Back
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={!formData.date || !formData.time}
                                                className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                Confirm Booking
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </form>
                        )}
                    </div>

                    {/* Footer */}
                    {!isSubmitted && (
                        <div className="bg-[#F5F5F0] p-4 text-center">
                            <p className="text-xs text-[#6B7280]">
                                You can also reach us directly at{" "}
                                <a href="tel:+254712345678" className="text-[#C9A962] hover:underline">
                                    +254 712 345 678
                                </a>
                            </p>
                        </div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
}