import { Phone, FileText } from 'lucide-react';

export default function MobileBottomBar() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-xl md:hidden z-50 pb-safe">
      <div className="grid grid-cols-2 gap-1.5 p-2">
        <a
          href="tel:3364911253"
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2.5 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-1.5 active:scale-95"
        >
          <Phone className="w-4 h-4" />
          Call
        </a>

        <button
          onClick={scrollToContact}
          className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-2.5 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-1.5 active:scale-95"
        >
          <FileText className="w-4 h-4" />
          Quote
        </button>
      </div>
    </div>
  );
}
