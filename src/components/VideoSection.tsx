export default function VideoSection() {
  return (
    <section className="py-16 sm:py-20 bg-black border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Before & After Junk Removal</h2>
        </div>

        <div className="mb-6">
          <img
            src="/chatgpt_image_jan_16,_2026,_11_43_42_pm.png"
            alt="Before and After Junk Removal Comparison"
            className="w-full h-auto rounded-lg border-2 border-yellow-600/30 shadow-2xl"
            loading="lazy"
          />
        </div>

        <p className="text-center text-gray-300 text-lg max-w-2xl mx-auto">
          From cluttered to clean — we handle all the heavy lifting so you don't have to.
        </p>
      </div>
    </section>
  );
}
