import { agencyServices } from "../data/agencyData";

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">Expertise</span>
          <h2 className="text-3xl font-bold text-white mt-2">What We Build & Deliver</h2>
          <p className="text-slate-400 text-sm mt-3">
            Every project is engineered with modern frontend standards, clean component hierarchies, and high accessibility.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agencyServices.map((service) => (
            <div
              key={service.id}
              className="bg-slate-950/70 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">{service.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">Deliverables</span>
                <ul className="space-y-1">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-center gap-1.5">
                      <span className="text-sky-400">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}