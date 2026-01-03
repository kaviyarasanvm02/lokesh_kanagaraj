"use client";

import { motion, Variants } from "framer-motion";
import { stats } from "@/data/reviews";
import Image from "next/image";
import { assets } from "@/data/assets";

export default function About() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        }
    };

    const CUBIC_EASE = [0.22, 1, 0.36, 1] as const;

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: CUBIC_EASE }
        }
    };

    return (
        <section id="about" className="py-24 bg-surface text-white overflow-hidden relative">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* TEXT CONTENT */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h4 variants={itemVariants} className="text-primary tracking-widest uppercase font-bold text-sm mb-4">
                        The Visionary
                    </motion.h4>
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
                        BEHIND MODERN <br /> TAMIL CINEMA
                    </motion.h2>
                    <motion.div variants={itemVariants} className="space-y-6 text-muted text-lg leading-relaxed">
                        <p>
                            Lokesh Kanagaraj is one of the most influential filmmakers of contemporary Indian cinema.
                            Known for his gritty storytelling, layered characters, and interconnected cinematic universe,
                            he has redefined action-drama with realism and emotional depth.
                        </p>
                        <p>
                            From raw beginnings to building the <span className="text-white font-bold">Lokesh Cinematic Universe (LCU)</span>,
                            his films resonate with intensity, style, and substance.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="group relative p-4 border border-white/5 bg-white/5 rounded-sm hover:border-primary/50 transition-colors duration-300"
                            >
                                <div className="absolute top-0 left-0 w-[2px] h-0 bg-primary group-hover:h-full transition-all duration-500 ease-in-out"></div>
                                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1 group-hover:text-primary transition-colors">{stat.value}</h3>
                                <p className="text-[10px] md:text-xs text-muted uppercase tracking-wider font-bold">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* VISUAL / IMAGE PLACEHOLDER */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: CUBIC_EASE }}
                    className="relative bg-bg border border-white/5 rounded-sm overflow-hidden group"
                >
                    <img
                        src={assets.personal}
                        alt="Lokesh Kanagaraj"
                        className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105 block"
                    />

                    {/* Flash effect on hover */}
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"></div>

                    {/* Cinematic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                </motion.div>

            </div>
        </section>
    );
}
