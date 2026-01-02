"use client";

import { motion } from "framer-motion";

export default function Contact() {
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

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase font-bold text-muted tracking-widest pl-2">Name</label>
                                <input type="text" className="w-full bg-bg border border-white/10 p-4 text-white focus:border-primary outline-none transition-colors" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase font-bold text-muted tracking-widest pl-2">Email</label>
                                <input type="email" className="w-full bg-bg border border-white/10 p-4 text-white focus:border-primary outline-none transition-colors" placeholder="email@address.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase font-bold text-muted tracking-widest pl-2">Subject</label>
                            <select className="w-full bg-bg border border-white/10 p-4 text-white focus:border-primary outline-none transition-colors appearance-none">
                                <option>Production Collaboration</option>
                                <option>Media / Interview</option>
                                <option>Talent / Casting</option>
                                <option>General Enquiry</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase font-bold text-muted tracking-widest pl-2">Message</label>
                            <textarea rows={5} className="w-full bg-bg border border-white/10 p-4 text-white focus:border-primary outline-none transition-colors" placeholder="Write your message here..."></textarea>
                        </div>

                        <div className="pt-4 text-center">
                            <button type="submit" className="px-12 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors duration-300">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
}
