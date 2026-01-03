"use client";

import React, { memo, useEffect, useLayoutEffect, useMemo, useState, useCallback } from "react";
import {
    AnimatePresence,
    motion,
    useAnimation,
    useMotionValue,
    useTransform,
    PanInfo,
    animate
} from "framer-motion";
import { X } from "lucide-react";

// Helper hook for media query
// Helper hook for media query - Safe for hydration
function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        setMatches(media.matches); // Set initial value on client

        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [query]);

    return matches;
}

const duration = 0.15;
const transition = { duration, ease: [0.32, 0.72, 0, 1] as const, filter: "blur(4px)" };

// Types
type CardType = string | { src: string; title?: string;[key: string]: any };

// Helper to normalize card data
const getCardSrc = (card: CardType) => (typeof card === 'string' ? card : card.src);
const getCardAlt = (card: CardType, index: number) => (typeof card === 'string' ? `carousel_img_${index}` : card.title || `image_${index}`);

interface CarouselProps {
    handleClick: (card: CardType, index: number) => void;
    cards: CardType[];
    isCarouselActive: boolean;
    rotation: any; // MotionValue<number>
    transform: any; // MotionValue<string>
}

const Carousel = memo(
    ({
        handleClick,
        cards,
        isCarouselActive,
        rotation,
        transform,
    }: CarouselProps) => {
        const isScreenSizeSm = useMediaQuery("(max-width: 640px)");

        // --- IMPROVED LOGIC: Fixed Face Width, Dynamic Radius ---
        // Instead of shrinking cards to fit a fixed cylinder, we grow the cylinder to fit the cards.
        const faceCount = cards.length;
        // Use a fixed width per card (reduced on mobile)
        const faceWidth = isScreenSizeSm ? 140 : 260;
        // Add some gap between cards implies a larger circumference
        const gap = isScreenSizeSm ? 20 : 40;
        const totalCircumference = faceCount * (faceWidth + gap);

        // Calculate radius from circumference: C = 2 * pi * r  =>  r = C / (2 * pi)
        // We ensure a minimum radius so it doesn't look weird with few items
        const computedRadius = totalCircumference / (2 * Math.PI);
        const radius = Math.max(computedRadius, isScreenSizeSm ? 150 : 300);

        // Cylinder width is just for the container sizing, but strictly it's unbounded rotation
        // We'll set a standard container width for the gesture area
        const containerWidth = isScreenSizeSm ? 300 : 800;



        return (
            <motion.div
                className="flex h-full items-center justify-center cursor-grab active:cursor-grabbing"
                style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                }}
                onPan={(_, info: PanInfo) => {
                    if (isCarouselActive) {
                        // Update rotation based on delta
                        rotation.set(rotation.get() + info.delta.x * 0.1);
                    }
                }}
                onPanEnd={(_, info: PanInfo) => {
                    if (isCarouselActive) {
                        const velocity = info.velocity.x;
                        animate(rotation, rotation.get() + velocity * 0.2, {
                            type: "spring",
                            stiffness: 50,
                            damping: 20,
                            mass: 1
                        });
                    }
                }}
            >
                <motion.div
                    style={{
                        position: 'relative',
                        display: 'flex',
                        height: '100%',
                        transformOrigin: 'center',
                        justifyContent: 'center',
                        rotateY: rotation,
                        z: -radius,
                        width: containerWidth,
                        transformStyle: "preserve-3d",
                    }}
                >
                    {cards.map((card, i) => {
                        const imgSrc = getCardSrc(card);
                        const imgAlt = getCardAlt(card, i);
                        return (
                            <motion.div
                                key={`key-${imgSrc}-${i}`}
                                style={{
                                    position: 'absolute',
                                    display: 'flex',
                                    height: '100%',
                                    transformOrigin: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: `${faceWidth}px`,
                                    transform: `rotateY(${i * (360 / faceCount)
                                        }deg) translateZ(${radius}px)`,
                                    padding: '8px',
                                }}
                                onTap={() => handleClick(card, i)}
                                whileHover={{ scale: 1.1, zIndex: 10 }}
                                className="group cursor-pointer"
                            >
                                <motion.img
                                    src={imgSrc}
                                    alt={imgAlt}
                                    layoutId={`img-${imgSrc}`}
                                    initial={{ filter: "blur(4px)" }}
                                    animate={{ filter: "blur(0px)" }}
                                    transition={transition}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full rounded-xl object-cover aspect-[2/3] pointer-events-none shadow-lg group-hover:shadow-[0_0_20px_rgba(225,6,0,0.4)] transition-shadow duration-300 border border-white/5 group-hover:border-primary/50"
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        );
    }
);
Carousel.displayName = "Carousel";

export default function ThreeDCarousel({ images }: { images: CardType[] }) {
    const [activeCard, setActiveCard] = useState<CardType | null>(null);
    const [isCarouselActive, setIsCarouselActive] = useState(true);

    // Lifted state for rotation
    const rotation = useMotionValue(0);
    const transform = useTransform(
        rotation,
        (value) => `rotate3d(0, 1, 0, ${value}deg)`
    );

    // Use passed images or fallback
    const cards = useMemo(
        () => {
            if (!images) return [];
            return images;
        },
        [images]
    );

    const handleClick = useCallback((card: CardType) => {
        setActiveCard(card);
        setIsCarouselActive(false);
        rotation.stop(); // Stop the inertia animation instantly
    }, [rotation]);

    const handleClose = useCallback((e?: any) => {
        if (e) e.stopPropagation();
        setActiveCard(null);
        setIsCarouselActive(true);
    }, []);

    return (
        <div className="relative w-full overflow-hidden min-h-[600px] bg-transparent">
            <AnimatePresence mode="sync">
                {activeCard && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4"
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors z-[60] bg-white/10 hover:bg-white/20 rounded-full p-2"
                        >
                            <X size={32} />
                        </button>

                        <motion.img
                            layoutId={`img-${getCardSrc(activeCard)}`}
                            src={getCardSrc(activeCard)}
                            alt={getCardAlt(activeCard, 0)}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.4,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                            className="max-w-full max-h-[85vh] w-auto h-auto rounded-lg shadow-2xl object-contain border border-white/10"
                        />

                        {/* Title Caption */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-6 text-center"
                        >
                            <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wider">
                                {typeof activeCard === 'string' ? '' : activeCard.title}
                            </h3>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="relative h-[600px] w-full overflow-hidden">
                <Carousel
                    handleClick={handleClick}
                    cards={cards} // Removed controls
                    isCarouselActive={isCarouselActive}
                    rotation={rotation}
                    transform={transform}
                />
            </div>
            {/* Interaction Hint */}
            <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none">
                <p className="text-white/30 text-xs uppercase tracking-[0.3em] font-light animate-pulse">
                    Drag to Explore
                </p>
            </div>
        </div>
    );
}
