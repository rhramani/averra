import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Products } from './sections/Products';
import { Benefits } from './sections/Benefits';
import { About } from './sections/About';
import { Testimonials } from './sections/Testimonials';
import { CTABanner } from './sections/CTABanner';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Benefits />
      <About />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}

export default App;
