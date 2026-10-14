export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-xl w-full p-6 text-slate-100 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl p-1"
          aria-label="Close modal"
        >
          ✕
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-52 object-cover rounded-xl mb-4 border border-slate-800"
        />

        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">{project.category}</span>
          <span className="text-xs text-slate-400">Client: {project.client}</span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">{project.summary}</p>

        <div className="p-3 bg-sky-950/40 border border-sky-800/40 rounded-lg mb-4 text-xs text-sky-300 font-medium">
          <strong>Outcome:</strong> {project.results}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 bg-slate-800 border border-slate-700 text-xs rounded-md text-slate-300">
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-xs transition"
        >
          Close Case Study
        </button>
      </div>
    </div>
  );
}