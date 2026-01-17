import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'residential',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'residential',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Ready to Go?</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Get in Touch</h3>

              <div className="space-y-3">
                <a
                  href="tel:3364911253"
                  className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-700 transition-colors">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-600 font-semibold">(336) 491-1253</p>
                    <p className="text-xs text-gray-600">Tap to call</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Mon-Sat 7am-7pm, Sun 9am-5pm</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Kernersville & Triad Area</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg text-white mt-6">
              <h4 className="text-base font-semibold mb-2">What You Get</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-200 mt-0.5">✓</span>
                  <span>Upfront pricing, no surprises</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-200 mt-0.5">✓</span>
                  <span>Fast response within hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-200 mt-0.5">✓</span>
                  <span>Same-day service</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 p-5 sm:p-6 rounded-lg shadow-md space-y-3">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-slate-900 mb-1 uppercase tracking-wide">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-slate-900 mb-1 uppercase tracking-wide">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
                  placeholder="(336) 555-1234"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-semibold text-slate-900 mb-1 uppercase tracking-wide">
                  What to Remove *
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white text-sm"
                >
                  <option value="residential">Residential Junk</option>
                  <option value="furniture">Furniture & Appliances</option>
                  <option value="cleanout">Estate/Cleanout</option>
                  <option value="construction">Construction Debris</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-900 mb-1 uppercase tracking-wide">
                  Details *
                </label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none text-sm"
                  placeholder="What needs to go?"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-900 mb-1 uppercase tracking-wide">
                  Email (optional)
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
                  placeholder="your@email.com"
                />
              </div>

              {submitted && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold text-sm">Request sent!</p>
                  <p className="text-green-700 text-xs">We'll call you within 2 hours.</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors shadow-lg active:scale-95"
              >
                Get Free Quote
              </button>

              <p className="text-xs text-gray-600 text-center">
                or call <a href="tel:3364911253" className="text-blue-600 hover:text-blue-700 font-semibold">(336) 491-1253</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
