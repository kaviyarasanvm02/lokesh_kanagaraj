"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/reviews";

export default function About() {
    return (
        <section id="about" className="py-24 bg-surface text-white overflow-hidden relative">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* TEXT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h4 className="text-primary tracking-widest uppercase font-bold text-sm mb-4">The Visionary</h4>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
                        BEHIND MODERN <br /> TAMIL CINEMA
                    </h2>
                    <div className="space-y-6 text-muted text-lg leading-relaxed">
                        <p>
                            Lokesh Kanagaraj is one of the most influential filmmakers of contemporary Indian cinema.
                            Known for his gritty storytelling, layered characters, and interconnected cinematic universe,
                            he has redefined action-drama with realism and emotional depth.
                        </p>
                        <p>
                            From raw beginnings to building the <span className="text-white font-bold">Lokesh Cinematic Universe (LCU)</span>,
                            his films resonate with intensity, style, and substance.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-8 mt-12 border-t border-white/10 pt-8">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <h3 className="text-3xl font-heading font-bold text-white mb-1">{stat.value}</h3>
                                <p className="text-xs text-muted uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* VISUAL / IMAGE PLACEHOLDER */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-[3/4] bg-bg border border-white/5 rounded-sm overflow-hidden group"
                >
                    {/* Placeholder for Director's Image */}
                    <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center text-neutral-800">
                        <span className="text-9xl font-heading opacity-50">LK</span>
                    </div>

                    {/* Overlay Effect */}
                    <div className="absolute inset-0 bg-transparents group-hover:bg-primary/10 transition-colors duration-500"></div>
                    <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 transition-all duration-500 scale-95"></div>
                </motion.div>

            </div>
        </section>
    );
}
