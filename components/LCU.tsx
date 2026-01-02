"use client";

import { motion } from "framer-motion";
import { lcuTimeline } from "@/data/lcu";
import Image from "next/image";
import { assets } from "@/data/assets";

export default function LCU() {
    return (
        <section id="lcu" className="py-24 bg-surface relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={assets.lcuCover}
                    alt="LCU Background"
                    fill
                    className="object-cover opacity-20 contrast-125 saturate-0 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent"></div>
            </div>

            {/* Background abstract map/connections - Animated */}
            <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <motion.path
                        d="M0,50 Q25,25 50,50 T100,50"
                        fill="none"
                        stroke="red"
                        strokeWidth="0.5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                    />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-tight"
                    >
                        The Lokesh <span className="text-primary text-glow">Cinematic Universe</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg text-muted max-w-2xl mx-auto"
                    >
                        An interconnected storytelling world where characters, events, and consequences collide across films.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Timeline Line - Animated Draw */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 md:translate-x-0 overflow-hidden">
                        <motion.div
                            initial={{ height: "0%" }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "linear" }}
                            className="w-full bg-primary shadow-[0_0_10px_#E10600]"
                        ></motion.div>
                    </div>

                    <div className="space-y-12">
                        {lcuTimeline.map((item, index) => (
                            <TimelineItem key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ item, index }: { item: any; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <div className={`flex flex-col md:flex-row items-center justify-between group ${isEven ? "" : "md:flex-row-reverse"}`}>
            {/* Spacer for Desktop */}
            <div className="hidden md:block w-5/12"></div>

            {/* Node - Scale In */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
                className="relative z-10 w-8 h-8 rounded-full bg-bg border-4 border-surface shadow-[0_0_0_4px_rgba(225,6,0,0.5)] group-hover:bg-primary group-hover:scale-125 transition-all duration-300 mb-4 md:mb-0"
            ></motion.div>

            {/* Content - Slide In */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                className="w-full md:w-5/12 bg-bg/50 backdrop-blur-sm border border-white/5 p-6 rounded-sm hover:border-primary/50 transition-colors group-hover:shadow-[0_0_30px_rgba(225,6,0,0.1)]"
            >
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-heading font-bold text-white uppercase">{item.title}</h3>
                    <span className="text-sm font-bold text-primary">{item.year}</span>
                </div>
                <div className="text-xs uppercase tracking-widest text-muted mb-3">Key Character: <span className="text-white group-hover:text-primary transition-colors">{item.character}</span></div>
                <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                </p>
            </motion.div>
        </div>
    );
}
