import { Facebook, Twitter, Instagram, Linkedin, Film } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-surface border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0">

                    {/* BRAND */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-heading font-bold uppercase tracking-wider mb-2">
                            Lokesh <span className="text-primary">Kanagaraj</span>
                        </h2>
                        <p className="text-muted text-sm max-w-xs mx-auto md:mx-0">
                            Crafting intense narratives and building the cinematic universe of tomorrow.
                        </p>
                    </div>

                    {/* SOCIALS */}
                    <div className="flex space-x-6">
                        <SocialIcon href="#" icon={<Twitter size={20} />} />
                        <SocialIcon href="#" icon={<Instagram size={20} />} />
                        <SocialIcon href="#" icon={<Film size={20} />} /> {/* Using Film as placeholder for IMDb/Letterboxd */}
                    </div>

                    {/* LINKS */}
                    <div className="flex space-x-8 text-sm uppercase tracking-widest text-muted">
                        <Link href="#filmography" className="hover:text-primary transition-colors">Films</Link>
                        <Link href="#lcu" className="hover:text-primary transition-colors">LCU</Link>
                        <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                    </div>
                </div>

                <div className="mt-20 border-t border-white/5 pt-8 text-center text-xs text-muted/50 uppercase tracking-wider">
                    <p>&copy; {new Date().getFullYear()} Lokesh Kanagaraj. All rights reserved.</p>
                    <p className="mt-2">Crafted with Cinema & Code.</p>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
        >
            {icon}
        </Link>
    );
}
