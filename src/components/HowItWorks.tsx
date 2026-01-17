import { Phone, Truck, Armchair } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    number: '1',
    title: 'Call or Quote',
    description: 'Get your price upfront. Same-day service available.'
  },
  {
    icon: Truck,
    number: '2',
    title: 'We Haul',
    description: 'Professional crew arrives, loads, and hauls everything.'
  },
  {
    icon: Armchair,
    number: '3',
    title: 'Done',
    description: 'Your space is clean. That\'s it.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Three Simple Steps</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-blue-500/30"></div>
                )}
                <div className="relative">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute top-0 right-0 w-7 h-7 bg-white text-slate-900 rounded-full flex items-center justify-center font-bold text-xs transform translate-x-2 -translate-y-2">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-300">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
