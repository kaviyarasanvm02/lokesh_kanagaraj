"use client";

import { motion, Variants } from "framer-motion";

export default function Contact() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
        }
    };

    return (
        <section id="contact" className="py-24 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col items-center">

                <div className="max-w-3xl w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Connect</h4>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase mb-6">Professional Enquiries</h2>
                        <p className="text-muted">For collaborations, production enquiries, and media.</p>
                    </motion.div>

                    <motion.form
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="space-y-6"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <motion.div variants={itemVariants} className="space-y-2">
                                <label className="text-xs uppercase font-bold text-muted tracking-widest pl-2">Name</label>
                                <input type="text" className="w-full bg-bg border border-white/10 p-4 text-white focus:border-primary outline-none transition-colors" placeholder="Your Name" />
                            </motion.div>
                            <motion.div variants={itemVariants} className="space-y-2">
                                <label className="text-xs uppercase font-bold text-muted tracking-widest pl-2">Email</label>
                                <input type="email" className="w-full bg-bg border border-white/10 p-4 text-white focus:border-primary outline-none transition-colors" placeholder="email@address.com" />
                            </motion.div>
                        </div>

                        <motion.div variants={itemVariants} className="space-y-2">
                            <label className="text-xs uppercase font-bold text-muted tracking-widest pl-2">Subject</label>
                            <div className="relative">
                                <select className="w-full bg-bg border border-white/10 p-4 text-white focus:border-primary outline-none transition-colors appearance-none cursor-pointer">
                                    <option>Production Collaboration</option>
                                    <option>Media / Interview</option>
                                    <option>Talent / Casting</option>
                                    <option>General Enquiry</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted text-xs">▼</div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-2">
                            <label className="text-xs uppercase font-bold text-muted tracking-widest pl-2">Message</label>
                            <textarea rows={5} className="w-full bg-bg border border-white/10 p-4 text-white focus:border-primary outline-none transition-colors" placeholder="Write your message here..."></textarea>
                        </motion.div>

                        <motion.div variants={itemVariants} className="pt-4 text-center">
                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: "#E10600", color: "#FFFFFF" }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="px-12 py-4 bg-white text-black font-bold uppercase tracking-widest transition-all duration-300 shadow-lg"
                            >
                                Send Message
                            </motion.button>
                        </motion.div>
                    </motion.form>
                </div>

            </div>
        </section>
    );
}
