import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Kernersville',
    rating: 5,
    text: 'Called morning, they came same afternoon. Professional and clean.'
  },
  {
    name: 'Michael T.',
    location: 'Winston-Salem',
    rating: 5,
    text: 'Upfront pricing, no surprises. Hauled garage full of junk.'
  },
  {
    name: 'Jennifer L.',
    location: 'Greensboro',
    rating: 5,
    text: 'Handled my parents\' estate with respect and care.'
  },
  {
    name: 'David R.',
    location: 'High Point',
    rating: 5,
    text: 'Fast and affordable. Recycled what they could.'
  }
];

export default function Reviews() {
  return (
    <section className="py-16 sm:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Customer Reviews</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 p-5 rounded-lg shadow-md">
              <div className="flex gap-0.5 mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-3 text-sm">{review.text}</p>
              <div>
                <p className="font-semibold text-white text-sm">{review.name}</p>
                <p className="text-xs text-gray-500">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
