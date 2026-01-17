import { Home, Sofa, Trash2, HardHat } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Cleanup',
    description: 'Garage, attic, basement, or whole house. Any type of junk.'
  },
  {
    icon: Sofa,
    title: 'Furniture & Appliances',
    description: 'Old furniture, mattresses, refrigerators, washers, dryers.'
  },
  {
    icon: Trash2,
    title: 'Estate & Cleanouts',
    description: 'Estate liquidation, foreclosures, senior downsizing.'
  },
  {
    icon: HardHat,
    title: 'Construction Debris',
    description: 'Drywall, lumber, roofing materials, renovation waste.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">We Handle It All</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-black border border-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:border-yellow-600/50 transition-all">
                <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
