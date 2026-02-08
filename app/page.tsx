import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import Automate from "@/components/Automate";
import Ecosystem from "@/components/Ecosystem";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />
      <Hero />
      <Approach />
      <Automate />
      <Ecosystem />
      <FAQ />
      <Footer />
    </main>
  );
}
