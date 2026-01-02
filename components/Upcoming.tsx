"use client";

import { motion } from "framer-motion";

export default function Upcoming() {
    return (
        <section id="upcoming" className="py-24 bg-bg border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto p-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-2xl"
                >
                    <div className="bg-bg rounded-xl border border-white/10 p-12 md:p-20 overflow-hidden relative">
                        {/* Animated gradient border top */}
                        <motion.div
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50"
                        ></motion.div>

                        <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-6 animate-pulse">What's Next</h4>

                        <div className="relative inline-block mb-8">
                            <motion.h2
                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 1 }}
                                className="text-5xl md:text-7xl font-heading font-bold text-white relative z-10"
                            >
                                THE NEXT <br /> CHAPTER
                            </motion.h2>
                            {/* Glitch clone (visual flair) */}
                            <motion.h2
                                animate={{ opacity: [0, 0.5, 0] }}
                                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                                className="text-5xl md:text-7xl font-heading font-bold text-primary absolute top-0 left-1 opacity-0 z-0 mix-blend-screen"
                            >
                                THE NEXT <br /> CHAPTER
                            </motion.h2>
                        </div>

                        <p className="text-xl text-muted max-w-2xl mx-auto mb-12">
                            With multiple upcoming collaborations and the expansion of the LCU, the cinematic boundaries are about to be pushed further.
                        </p>

                        <div className="inline-block relative group cursor-pointer">
                            <motion.span
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="text-8xl font-heading font-bold text-white/5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                            >
                                LCU
                            </motion.span>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative z-10 border border-white/20 px-10 py-4 rounded-full backdrop-blur-md group-hover:border-primary/50 transition-colors duration-300"
                            >
                                <span className="text-white font-bold uppercase tracking-widest group-hover:text-primary transition-colors">Kaithi 2 / Vikram 2</span>
                                <span className="ml-4 text-primary text-sm relative">
                                    <span className="relative z-10">• In Pre-Production</span>
                                    <span className="absolute top-1/2 left-0 w-2 h-2 bg-primary rounded-full animate-ping opacity-75"></span>
                                </span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
