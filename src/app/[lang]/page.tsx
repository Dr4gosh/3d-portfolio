import Hero from "@/components/Hero";
import ParticlesContainer from "@/components/ParticlesContainer";
import About from "@/sections/About";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const title = params.lang === "ro" ? "Acasă" : "Home";
  const description =
    params.lang === "ro"
      ? "Bine ați venit pe pagina noastră de start"
      : "Welcome to our home page";

  return {
    title,
    description,
  };
}

export default function Home({ params }: { params: { lang: string } }) {
  return (
    <main className="relative w-full bg-hero-pattern bg-cover bg-center bg-no-repeat">
      <div className="mx-auto max-w-screen-2xl">

        <ParticlesContainer />
        <Hero />
        <About />
        <h1>{params.lang === 'ro' ? 'Bine ați venit' : 'Welcome'}</h1>
        <p>{params.lang === 'ro' ? 'Aceasta este pagina de start.' : 'This is the home page.'}</p>
      </div>
    </main>
  );
}
