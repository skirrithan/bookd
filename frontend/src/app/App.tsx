import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Features } from "./components/Features";
import { ProductPreview } from "./components/ProductPreview";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-[#050505]">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <ProductPreview />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
