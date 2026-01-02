"use client";

import { motion, Variants } from "framer-motion";
import { movies } from "@/data/movies";
import Image from "next/image";

export default function Filmography() {
    const releasedMovies = movies;

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

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
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-1 bg-primary"
                    ></motion.div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {releasedMovies.map((movie, index) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function MovieCard({ movie }: { movie: any }) {
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            className="group relative aspect-[2/3] bg-surface overflow-hidden border border-white/5 hover:border-primary/50 transition-colors duration-500 rounded-sm"
        >
            {/* Background Image */}
            <div className="absolute inset-0 bg-neutral-900 overflow-hidden">
                {movie.poster ? (
                    <Image
                        src={movie.poster}
                        alt={movie.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                ) : (
                    <div className="w-full h-full bg-surface flex items-center justify-center text-muted/20 font-heading text-6xl uppercase truncate px-4 group-hover:scale-105 transition-transform duration-700">
                        {movie.title}
                    </div>
                )}
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>

            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-primary text-xs tracking-widest uppercase font-bold mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">{movie.year} • {movie.genre}</p>
                <h3 className="text-3xl font-heading font-bold text-white mb-2 uppercase group-hover:text-primary transition-colors">{movie.title}</h3>
                <p className="text-sm text-gray-300 line-clamp-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                    {movie.oneLiner}
                </p>
            </div>

            {movie.isLCU && (
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-primary/50 text-primary text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-full shadow-[0_0_10px_rgba(225,6,0,0.3)]">
                    LCU
                </div>
            )}
        </motion.div>
    );
}
