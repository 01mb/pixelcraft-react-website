import { useState } from "react";
import { agencyProjects } from "../data/agencyData";
import ProjectModal from "./ProjectModal";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Web App", "E-Commerce", "UI/UX Design"];

  const filteredProjects = activeCategory === "All"
    ? agencyProjects
    : agencyProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-20 px-6 bg-slate-950 border-b border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">Selected Works</span>
            <h2 className="text-3xl font-bold text-white mt-1">Featured Case Studies</h2>
            <p className="text-slate-400 text-sm mt-2">Filter client solutions across web applications and e-commerce.</p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeCategory === cat
                    ? "bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20"
                    : "bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group hover:border-slate-700 transition flex flex-col justify-between"
            >
              <div className="overflow-hidden h-60 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-sky-400 border border-slate-700">
                  {project.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{project.summary}</p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-slate-800 text-slate-300 text-[11px] rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-sky-400 font-semibold text-xs rounded-lg border border-slate-700 transition flex items-center justify-center gap-1"
                  >
                    View Project Breakdown <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}