"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { assets } from "@/data/assets";
import Image from "next/image";

export default function Hero() {
    // Mouse tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the spotlight
    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Create the mask image template
    // We use a large soft circle for the reveal
    const maskImage = useMotionTemplate`radial-gradient(circle 350px at ${springX}px ${springY}px, black 40%, transparent 100%)`;

    // Handle mouse move
    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    return (
        <section
            className="relative min-h-[110vh] w-full bg-[#050505] overflow-hidden flex flex-col justify-center cursor-none md:cursor-default"
            onMouseMove={handleMouseMove}
        >
            {/* --- LAYERS --- */}

            {/* LAYER 1: DIMMED / GRAYSCALE (The "Off" State) */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none select-none">
                {/* Background Noise/Grid */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>

                {/* Main Text - Outline/Hollow effect */}
                <div className="relative z-20 text-center mix-blend-difference">
                    <h1 className="font-heading font-bold uppercase leading-[0.85] tracking-tighter text-[15vw] md:text-[12rem] opacity-20 text-white/10 blur-[2px]">
                        LOKESH
                    </h1>
                    <h1 className="font-heading font-bold uppercase leading-[0.85] tracking-tighter text-[15vw] md:text-[12rem] opacity-20 text-white/10 blur-[2px]">
                        KANAGARAJ
                    </h1>
                </div>

                {/* Director Image - Grayscale & Dark */}
                <div className="absolute bottom-0 right-0 lg:right-[10%] w-[90vw] lg:w-[45vw] h-[80vh] opacity-30 grayscale contrast-125">
                    <Image
                        src={assets.heroImage}
                        alt="Lokesh Kanagaraj"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                </div>
            </div>

            {/* LAYER 2: VIBRANT / REVEAL (The "Spotlight" State) */}
            <motion.div
                className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none select-none"
                style={{
                    maskImage,
                    WebkitMaskImage: maskImage // Webkit prefix for compatibility
                }}
            >
                {/* Background Tint in Spotlight */}
                <div className="absolute inset-0 bg-primary/5"></div>

                {/* Floating Movie Elements (Only visible in light) */}
                <div className="absolute top-[15%] left-[10%] w-[200px] aspect-[2/3] rotate-[-12deg] z-10">
                    <Image src={assets.leo} alt="Leo" fill className="object-cover rounded-lg shadow-2xl border border-white/20" />
                </div>
                <div className="absolute bottom-[20%] left-[15%] w-[180px] aspect-[2/3] rotate-[6deg] z-10">
                    <Image src={assets.vikram} alt="Vikram" fill className="object-cover rounded-lg shadow-2xl border border-white/20" />
                </div>

                {/* Main Text - Solid & Filled */}
                <div className="relative z-20 text-center">
                    <h1 className="font-heading font-bold uppercase leading-[0.85] tracking-tighter text-[15vw] md:text-[12rem] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-lg">
                        LOKESH
                    </h1>
                    <h1 className="font-heading font-bold uppercase leading-[0.85] tracking-tighter text-[15vw] md:text-[12rem] text-primary drop-shadow-[0_0_50px_rgba(225,6,0,0.5)]">
                        KANAGARAJ
                    </h1>
                </div>

                {/* Director Image - Full Color & Sharp */}
                <div className="absolute bottom-0 right-0 lg:right-[10%] w-[90vw] lg:w-[45vw] h-[80vh]">
                    <Image
                        src={assets.heroImage}
                        alt="Lokesh Kanagaraj"
                        fill
                        className="object-cover object-top drop-shadow-2xl"
                        priority
                    />
                    {/* Cinematic Overlay gradient on the image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>

                {/* 'LCU' Tag or extra details in spotlight */}
                <div className="absolute top-1/2 right-20 text-primary font-heading text-9xl font-black opacity-10 rotate-90 hidden md:block">
                    LCU
                </div>
            </motion.div>

            {/* --- CUSTOM CURSOR FOLLOWER UI --- */}
            {/* A visible ring helping user identify the tool position (optional but good for UX) */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 pointer-events-none z-50 hidden md:block mix-blend-difference"
                style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
            >
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-20"></div>
            </motion.div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-10 z-40 text-white/30 text-sm font-light tracking-[0.2em] uppercase">
                Explore the Universe
            </div>
        </section>
    );
}
