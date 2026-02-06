import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Features } from "@/components/Features";
import { Services } from "@/components/Services";
import { ROI } from "@/components/ROI";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <LogoMarquee />
        <Features />
        <Services />
        <ROI />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}