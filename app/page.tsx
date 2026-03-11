import { Navbar, Footer } from "@/components/layout";
import Hero from "@/components/sections/Hero";
import WhyLifeAfterSport from "@/components/sections/WhyLifeAfterSport";
import { ScrollToTop, PageLoadAnimation } from "@/components/ui";

export default function Home() {
  return (
    <PageLoadAnimation>
      <Navbar />
      <Hero />
      <WhyLifeAfterSport />
      <Footer />
      <ScrollToTop />
    </PageLoadAnimation>
  );
}
