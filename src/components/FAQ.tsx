import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How much does it cost?',
    answer: 'Pricing based on volume. We quote upfront with no hidden fees. Most jobs $150-$600. Call for a free estimate.'
  },
  {
    question: 'Same-day service available?',
    answer: 'Yes. Call in the morning, we come that afternoon for most Kernersville and Triad requests.'
  },
  {
    question: 'What do you take?',
    answer: 'Furniture, appliances, mattresses, electronics, yard waste, construction debris. We can\'t take hazardous materials. Call if you\'re unsure.'
  },
  {
    question: 'Do I need to prepare anything?',
    answer: 'Nope. Just point it out. We handle everything—loading, hauling, disposal.'
  },
  {
    question: 'Licensed & insured?',
    answer: 'Yes. Full liability coverage to protect your property.'
  },
  {
    question: 'Where does it go?',
    answer: 'We donate, recycle, and reuse first. Landfill is last resort.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Questions?</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-3 text-left flex items-center justify-between hover:bg-slate-800 transition-colors"
              >
                <span className="font-semibold text-white text-sm sm:text-base pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-yellow-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-3 border-t border-slate-700">
                  <p className="text-gray-300 text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
