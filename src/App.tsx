import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import ServiceArea from './components/ServiceArea';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import MobileBottomBar from './components/MobileBottomBar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Reviews />
      <ServiceArea />
      <FAQ />
      <Contact />
      <MobileBottomBar />
    </div>
  );
}

export default App;
