import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Mission from "@/components/Mission";
import Approach from "@/components/Approach";
import Sectors from "@/components/Sectors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Mission />
        <Approach />
        <Sectors />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
