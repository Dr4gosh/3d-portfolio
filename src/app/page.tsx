import Hero from "@/components/Hero";
import ParticlesContainer from "@/components/ParticlesContainer";

export default function Home() {
  return (
    <main className="bg-hero-pattern relative w-full bg-cover bg-center bg-no-repeat">
      <ParticlesContainer />
      <Hero />
    </main>
  );
}
