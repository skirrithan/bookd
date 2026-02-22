import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { PainPoints } from "./components/PainPoints";
import { HowItWorks } from "./components/HowItWorks";
import { Features } from "./components/Features";
import { Ticketing } from "./components/Ticketing";
import { ProductPreview } from "./components/ProductPreview";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <Ticketing />
        <HowItWorks />
        <ProductPreview />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}