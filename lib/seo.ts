import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const siteConfig = {
    name: "Lokesh Kanagaraj",
    description: "Filmmaker. Storyteller. Architect of the Lokesh Cinematic Universe.",
    url: "https://lokeshkanagaraj.com", // Placeholder
    ogImage: "https://lokeshkanagaraj.com/logesh.jpg", // Placeholder
    links: {
        twitter: "https://twitter.com/Dir_Lokesh",
        instagram: "https://instagram.com/lokesh.kanagaraj", // Placeholder if not real
        imdb: "https://www.imdb.com/name/nm8226019/",
    },
};
