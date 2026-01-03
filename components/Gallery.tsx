"use client";

import { assets } from "@/data/assets";
import ThreeDCarousel from "./ThreeDCarousel";

export default function Gallery() {
    const movieImages = [
        { src: assets.agent, title: "Agent Amar" },
        { src: assets.anbu, title: "Anbu" },
        { src: assets.bavani, title: "Bhavani" },
        { src: assets.das, title: "Antony Das" },
        { src: assets.leooo, title: "Leo" },
        { src: assets.vikramm, title: "Vikram" },
        { src: assets.parthipan, title: "Parthiban" },
        { src: assets.kaithi, title: "Dilli (Kaithi)" },
        { src: assets.jd, title: "JD (Master)" },
        { src: assets.kamal, title: "Vikram (Vikram)" },
        { src: assets.leodass, title: "Leo Dass (Leo)" },
        { src: assets.deva, title: "Deva (Coolie)" },
        { src: assets.rolex, title: "Rolex (Vikram/Leo)" },
        { src: assets.dillivsrolex, title: "Faceoff (Dilli vs Rolex)" },
        { src: assets.master, title: "Master (Film)" },
        { src: assets.leovsparthipan, title: "Leo vs Parthiban" },
        { src: assets.alterego, title: "Alter Ego (Leo)" },
        { src: assets.interval, title: "Interval Block (Vikram)" },
        { src: assets.dasss, title: "Harold Das" },
        { src: assets.leodas2, title: "Leo Das (Badass)" },
        { src: assets.briyaniscene, title: "Briyaniscene" },
        { src: assets.kaithifight, title: "Kaithi Fight" }

    ];

    return (
        <section className="py-24 bg-bg border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-8 flex justify-between items-end">
                <h2 className="text-3xl font-heading font-bold text-white uppercase tracking-wider">Cinematic <span className="text-primary">Frames</span></h2>
                <div className="hidden md:block w-32 h-[1px] bg-white/20"></div>
            </div>

            <div className="w-full relative">
                {/* 3D Carousel Component */}
                <ThreeDCarousel images={movieImages} />

                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-primary/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
            </div>
        </section>
    );
}
