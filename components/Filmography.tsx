"use client";

import { motion } from "framer-motion";
import { movies } from "@/data/movies";
import Image from "next/image";

export default function Filmography() {
    const releasedMovies = movies.filter(m => !m.isUpcoming);

    return (
        <section id="filmography" className="py-24 bg-bg">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">THE FILMS</h2>
                    <div className="w-20 h-1 bg-primary"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {releasedMovies.map((movie, index) => (
                        <MovieCard key={movie.id} movie={movie} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function MovieCard({ movie, index }: { movie: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative aspect-[2/3] bg-surface overflow-hidden border border-white/5 hover:border-primary/50 transition-colors duration-500"
        >
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-neutral-900 overflow-hidden">
                {/* Real implementation would use next/image here with movie.poster */}
                <div className="w-full h-full bg-surface flex items-center justify-center text-muted/20 font-heading text-6xl uppercase truncate px-4 group-hover:scale-105 transition-transform duration-700">
                    {movie.title}
                </div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-primary text-xs tracking-widest uppercase font-bold mb-2">{movie.year} • {movie.genre}</p>
                <h3 className="text-3xl font-heading font-bold text-white mb-2 uppercase">{movie.title}</h3>
                <p className="text-sm text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {movie.oneLiner}
                </p>
            </div>

            {movie.isLCU && (
                <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-sm border border-primary/50 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-full">
                    LCU
                </div>
            )}
        </motion.div>
    );
}
