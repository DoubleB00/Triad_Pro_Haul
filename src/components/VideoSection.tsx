export default function VideoSection() {
  return (
    <section className="py-16 sm:py-20 bg-black border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Watch Us Work</h2>
        </div>

        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg border-2 border-yellow-600/30 shadow-2xl"
            src="https://www.youtube.com/embed/3F6tClVb2Y"
            title="Watch Us Work - Triad Pro Haul"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p className="text-center text-gray-300 mt-6 max-w-2xl mx-auto">
          See how easy junk removal can be with our professional team. We handle the heavy lifting so you don't have to.
        </p>
      </div>
    </section>
  );
}
