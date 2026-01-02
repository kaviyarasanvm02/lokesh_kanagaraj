"use client";

import { motion } from "framer-motion";
import { reviews } from "@/data/reviews";
import { Quote } from "lucide-react";

export default function Reviews() {
    return (
        <section className="py-24 bg-surface">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white uppercase tracking-wider">Acclaim</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-bg p-8 border border-white/5 relative group hover:border-primary/30 transition-colors"
                        >
                            <Quote className="absolute top-8 left-8 text-primary/20 w-12 h-12" />
                            <div className="relative z-10 pt-8">
                                <div className="flex gap-1 mb-6">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <div key={s} className={`w-2 h-2 rounded-full ${s <= review.rating ? "bg-primary" : "bg-white/10"}`}></div>
                                    ))}
                                </div>
                                <p className="text-lg text-gray-300 italic mb-6 leading-relaxed">"{review.quote}"</p>
                                <div className="h-[1px] w-10 bg-white/20 mb-4"></div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-white">{review.source}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
