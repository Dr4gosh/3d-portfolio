import Hero from "@/components/Hero";
import ParticlesContainer from "@/components/ParticlesContainer";

import { Link } from "@/i18n/routing";

export default function Home() {
  return (
    <main className="relative w-full bg-hero-pattern bg-cover bg-center bg-no-repeat">
      {/* <ParticlesContainer /> */}
      <Link
        href={"/"}
        locale="ro"
        className="absolute top-20 mt-20 h-20 w-20 bg-red-500 text-white"
      >
        Salut2
      </Link>
      {/* <Hero /> */}
    </main>
  );
}
