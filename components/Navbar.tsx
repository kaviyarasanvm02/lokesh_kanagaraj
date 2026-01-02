"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Filmography", href: "#filmography" },
    { name: "LCU", href: "#lcu" },
    { name: "About", href: "#about" },
    { name: "Upcoming", href: "#upcoming" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-bg/90 backdrop-blur-md border-b border-primary/10 py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* LOGO */}
                <Link href="/" className="text-2xl font-heading font-bold tracking-wider text-white uppercase hover:text-primary transition-colors">
                    Lokesh <span className="text-primary">Kanagaraj</span>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm uppercase tracking-widest text-muted hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all group-hover:w-full duration-300"></span>
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-5 py-2 text-xs font-bold uppercase tracking-wider border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                        Contact
                    </Link>
                </nav>

                {/* MOBILE MENU TOGGLE */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-black/95 border-b border-primary/20 p-6 flex flex-col space-y-6 md:hidden text-center backdrop-blur-xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-heading tracking-widest text-white hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="text-lg font-heading tracking-widest text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
