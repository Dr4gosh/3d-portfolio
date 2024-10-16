import Hero from "@/components/Hero";
import ParticlesContainer from "@/components/ParticlesContainer";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/locale";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <main className="relative w-full bg-hero-pattern bg-cover bg-center bg-no-repeat">
      {/* <ParticlesContainer /> */}
      {/* <Hero /> */}
      <p>{page.home.title}</p>
    </main>
  );
}
