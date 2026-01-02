"use client";

import { motion } from "framer-motion";

export default function Upcoming() {
    return (
        <section id="upcoming" className="py-24 bg-bg border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto p-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-2xl"
                >
                    <div className="bg-bg rounded-xl border border-white/10 p-12 md:p-20 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                        <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-6">What's Next</h4>
                        <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8">
                            THE NEXT <br /> CHAPTER
                        </h2>
                        <p className="text-xl text-muted max-w-2xl mx-auto mb-12">
                            With multiple upcoming collaborations and the expansion of the LCU, the cinematic boundaries are about to be pushed further.
                        </p>

                        <div className="inline-block relative">
                            <span className="text-8xl font-heading font-bold text-white/5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">TBA</span>
                            <div className="relative z-10 border border-white/20 px-10 py-4 rounded-full backdrop-blur-md">
                                <span className="text-white font-bold uppercase tracking-widest">Project Coolie</span>
                                <span className="ml-4 text-primary text-sm">• In Production</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
