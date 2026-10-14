export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-20 px-6 bg-slate-950 text-slate-100 border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-950/70 border border-sky-800/50 text-sky-400 text-xs font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Accepting Q2/Q3 Web Development Projects
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
          We Build Digital Products <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-indigo-400">
            Engineered to Perform.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
          PixelCraft is a modern web development & digital product studio. We craft blazingly fast single-page applications, custom e-commerce checkouts, and UI design systems for forward-thinking brands.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="#work"
            className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-lg text-sm transition shadow-lg shadow-sky-500/10"
          >
            Explore Case Studies
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg text-sm font-semibold transition"
          >
            Book Free Consultation
          </a>
        </div>

        {/* Quick Agency Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-16 border-t border-slate-800/80 mt-16">
          <div>
            <div className="text-3xl font-extrabold text-white">45+</div>
            <div className="text-xs text-slate-400 mt-1">Web Apps Shipped</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white">99%</div>
            <div className="text-xs text-slate-400 mt-1">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white">&lt;1s</div>
            <div className="text-xs text-slate-400 mt-1">Average Page Load</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white">10+</div>
            <div className="text-xs text-slate-400 mt-1">Years Combined Exp.</div>
          </div>
        </div>
      </div>
    </section>
  );
}