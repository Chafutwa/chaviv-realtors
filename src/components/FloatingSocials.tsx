"use client";

import { Facebook, Instagram, Youtube, Mail, MessageCircle } from "lucide-react";

export default function FloatingSocials() {
    return (
        <div className="fixed right-5 top-1/2 -translate-y-1/2 z-[9999] hidden md:flex flex-col gap-3 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-2xl">
            <a
                href="https://wa.me/254718493239"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-green-500 text-white flex items-center justify-center hover:scale-110 transition"
            >
                <MessageCircle size={24} />
            </a>

            <a
                href="https://www.facebook.com/share/1EtRizgft1/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition"
            >
                <Facebook size={24} />
            </a>

            <a
                href="https://www.instagram.com/chavivrealtors?igsh=MWN0enJldno2dHNw&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-pink-600 text-white flex items-center justify-center hover:scale-110 transition"
            >
                <Instagram size={24} />
            </a>

            <a
                href="https://www.youtube.com/@ChavivRealtors"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center hover:scale-110 transition"
            >
                <Youtube size={24} />
            </a>

            <a
                href="mailto:chavivrealtors@gmail.com"
                className="w-12 h-12 rounded-xl bg-[#0B1F1F] text-white flex items-center justify-center hover:scale-110 transition"
            >
                <Mail size={24} />
            </a>
        </div>
    );
}