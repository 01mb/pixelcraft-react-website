import { clientTestimonials } from "../data/agencyData";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-slate-900 border-b border-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl font-bold text-white mt-1">Trusted by Engineering & Product Teams</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {clientTestimonials.map((t) => (
            <div key={t.id} className="bg-slate-950/70 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between">
              <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{t.author}</h4>
                  <p className="text-xs text-slate-400">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}