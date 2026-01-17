import { Phone, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4569340/pexels-photo-4569340.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          <h2 className="text-blue-400 font-semibold mb-3 text-sm tracking-widest">TRIAD PRO HAUL</h2>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 leading-tight">
            Junk Gone Today
          </h1>

          <p className="text-lg sm:text-xl mb-8 text-gray-300">
            We load it. We haul it. You're done.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors flex items-center justify-center gap-2 shadow-lg active:scale-95 w-full sm:w-auto"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="tel:3364911253"
              className="bg-white hover:bg-gray-100 text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors flex items-center justify-center gap-2 shadow-lg active:scale-95 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          <a href="tel:3364911253" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <Phone className="w-4 h-4" />
            <span className="text-sm font-semibold">(336) 491-1253</span>
          </a>
        </div>
      </div>
    </section>
  );
}
