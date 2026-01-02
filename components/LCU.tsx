"use client";

import { motion } from "framer-motion";
import { lcuTimeline } from "@/data/lcu";

export default function LCU() {
    return (
        <section id="lcu" className="py-24 bg-surface relative overflow-hidden">
            {/* Background abstract map/connections */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="red" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-tight"
                    >
                        The Lokesh <span className="text-primary">Cinematic Universe</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted max-w-2xl mx-auto"
                    >
                        An interconnected storytelling world where characters, events, and consequences collide across films.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 md:translate-x-0"></div>

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

            {/* Node */}
            <div className="relative z-10 w-8 h-8 rounded-full bg-bg border-4 border-surface shadow-[0_0_0_4px_rgba(225,6,0,0.5)] group-hover:bg-primary transition-colors duration-500 mb-4 md:mb-0"></div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-5/12 bg-bg/50 backdrop-blur-sm border border-white/5 p-6 rounded-sm hover:border-primary/30 transition-colors"
            >
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-heading font-bold text-white uppercase">{item.title}</h3>
                    <span className="text-sm font-bold text-primary">{item.year}</span>
                </div>
                <div className="text-xs uppercase tracking-widest text-muted mb-3">Key Character: <span className="text-white">{item.character}</span></div>
                <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                </p>
            </motion.div>
        </div>
    );
}
