import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const footerLinks = {
    company: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/about#team" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
    ],
    properties: [
        { label: "For Sale", href: "/properties?status=For+Sale" },
        { label: "For Rent", href: "/properties?status=For+Rent" },
        { label: "New Developments", href: "/properties?type=New" },
        { label: "Neighborhoods", href: "/neighborhoods" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-[#0B1F1F] text-white">
            <div className="section-padding py-16 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <Image
                                src="/images/logo.png"
                                alt="Chaviv Realtors Logo"
                                width={160}
                                height={60}
                                className="object-contain"
                            />
                        </Link>

                        <p className="text-white/70 mb-6 max-w-sm">
                            Your trusted partner in luxury real estate. We specialize in premium properties
                            across Nairobi&apos;s finest neighborhoods.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/chavivrealtors?igsh=MWN0enJldno2dHNw&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#C9A962] hover:bg-[#C9A962] hover:text-[#0B1F1F] transition-all"
                            >
                                <Instagram size={18} />
                            </a>

                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/share/1ApFG3Sk3C/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#C9A962] hover:bg-[#C9A962] hover:text-[#0B1F1F] transition-all"
                            >
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-serif text-lg mb-6 text-[#C9A962]">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-[#C9A962] transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Properties Links */}
                    <div>
                        <h4 className="font-serif text-lg mb-6 text-[#C9A962]">Properties</h4>
                        <ul className="space-y-3">
                            {footerLinks.properties.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-[#C9A962] transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-serif text-lg mb-6 text-[#C9A962]">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-[#C9A962] mt-1 shrink-0" />
                                <span className="text-white/70 text-sm">
                                    Kilimani, Nairobi<br />
                                    Kenya
                                </span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-[#C9A962] shrink-0" />
                                <a
                                    href="tel:+254718493239"
                                    className="text-white/70 hover:text-[#C9A962] transition-colors text-sm"
                                >
                                    +254 718 493 239<br />
                                    +254 750 600 557
                                </a>
                            </li>

                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-[#C9A962] shrink-0" />
                                <a
                                    href="mailto:chavivrealtors@gmail.com"
                                    className="text-white/70 hover:text-[#C9A962] transition-colors text-sm"
                                >
                                    chavivrealtors@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/50 text-sm">
                        © {new Date().getFullYear()} Chaviv Realtors. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-white/50 hover:text-[#C9A962] text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-white/50 hover:text-[#C9A962] text-sm transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}