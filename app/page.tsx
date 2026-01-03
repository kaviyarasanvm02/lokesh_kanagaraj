import Hero from "@/components/Hero";
import About from "@/components/About";
import Filmography from "@/components/Filmography";
import Gallery from "@/components/Gallery";
import LCU from "@/components/LCU";
import Reviews from "@/components/Reviews";
import Upcoming from "@/components/Upcoming";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Filmography />
      <Gallery />
      <LCU />
      <Upcoming />
      <Reviews />
      <Contact />
    </>
  );
}
