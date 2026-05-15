import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Reviews } from "@/components/Reviews";
import { CtaStrip } from "@/components/CtaStrip";
import { ServiceArea } from "@/components/ServiceArea";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { FloatingCall } from "@/components/FloatingCall";

export default function Home() {
  return (
    <>
      <Header />
      <FloatingCall />
      <main>
        <Hero />
        <Services />
        <CtaStrip />
        <About />
        <WhyChooseUs />
        <Reviews />
        <ServiceArea />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
