"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-bg">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg z-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full opacity-50 animate-pulse"></div>
                {/* Grain Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            </div>

            <div className="relative z-20 container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-6"
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold uppercase tracking-tighter text-white">
                        Lokesh <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            Kanagaraj
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-lg md:text-xl text-muted tracking-[0.2em] uppercase mb-12 max-w-2xl mx-auto"
                >
                    Filmmaker. Storyteller. Architect of the LCU.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-6 justify-center"
                >
                    <Link
                        href="#filmography"
                        className="group relative px-8 py-3 bg-primary text-white font-bold uppercase tracking-widest overflow-hidden transition-all hover:bg-accent"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Filmography <ArrowRight size={18} />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </Link>

                    <Link
                        href="#lcu"
                        className="group px-8 py-3 border border-white/20 text-white font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all duration-300"
                    >
                        Explore LCU
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-muted">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
            </motion.div>
        </section>
    );
}
