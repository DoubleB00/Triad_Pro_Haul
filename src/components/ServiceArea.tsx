import { MapPin, CheckCircle } from 'lucide-react';

const cities = [
  'Kernersville',
  'Winston-Salem',
  'Greensboro',
  'High Point',
  'Clemmons',
  'Lexington',
  'Thomasville',
  'Walkertown'
];

const counties = [
  'Forsyth County',
  'Guilford County',
  'Davidson County',
  'Randolph County'
];

export default function ServiceArea() {
  return (
    <section className="py-16 sm:py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">We Serve the Triad</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-yellow-500" />
                Main Cities
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {cities.map((city, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{city}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-yellow-500" />
                Counties
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {counties.map((county, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{county}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-black rounded-lg border-l-4 border-yellow-600">
              <p className="text-sm text-gray-300">
                <span className="font-semibold">Not listed?</span>{' '}
                <a href="tel:3364911253" className="text-yellow-500 hover:text-yellow-400 font-semibold">
                  Call
                </a>{' '}
                and we'll check.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8960464/pexels-photo-8960464.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Junk removal truck serving the Triad area"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
