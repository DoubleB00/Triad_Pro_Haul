import { Clock, DollarSign, Shield, Leaf } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Same-Day Service',
    description: 'Most jobs done today. Call in the morning, we come that afternoon.'
  },
  {
    icon: DollarSign,
    title: 'No Hidden Fees',
    description: 'You know the price upfront. Pay only what we quoted.'
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Professional crew with full coverage for your peace of mind.'
  },
  {
    icon: Leaf,
    title: 'Responsible Disposal',
    description: 'We donate, recycle, and reuse. Not everything goes to a landfill.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why We're Different</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
