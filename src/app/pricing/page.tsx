import Hero from '../../components/Hero';
import Pricing from '../../components/Pricing';
import Features from '../../components/Features';
import Cta from '../../components/Cta';

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <section id="hero" className="scroll-mt-16">
        <Hero />
      </section>
      <section id="pricing" className="scroll-mt-16">
        <Pricing />
      </section>
      <section id="features" className="scroll-mt-16">
        <Features />
      </section>
      <section id="cta" className="scroll-mt-16">
        <Cta />
      </section>
    </main>
  );
}