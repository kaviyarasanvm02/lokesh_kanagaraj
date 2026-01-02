"use client";

import { motion } from "framer-motion";

const images = [
    "bg-red-900",
    "bg-neutral-800",
    "bg-zinc-900",
    "bg-stone-900",
    "bg-orange-950",
    "bg-black"
];

export default function Gallery() {
    return (
        <section className="py-24 bg-bg">
            <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
                <h2 className="text-3xl font-heading font-bold text-white uppercase">Visuals</h2>
                <div className="hidden md:block w-32 h-[1px] bg-white/20"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                {images.map((color, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative aspect-square md:aspect-video ${color} overflow-hidden group cursor-pointer`}
                    >
                        {/* Simulated Image */}
                        <div className="absolute inset-0 opacity-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-bold uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Still</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
