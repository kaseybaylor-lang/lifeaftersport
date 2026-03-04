import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  Problem,
  Opportunity,
  Experience,
  Partners,
  Pricing,
  NextSteps,
  Contact,
} from "@/components/sections";
import { ScrollToTop, PageLoadAnimation } from "@/components/ui";

export default function Home() {
  return (
    <PageLoadAnimation>
      <Navbar />
      <Hero />
      <Problem />
      <Opportunity />
      <Experience />
      <Partners />
      <Pricing />
      <NextSteps />
      <Contact />
      <Footer />
      <ScrollToTop />
    </PageLoadAnimation>
  );
}
