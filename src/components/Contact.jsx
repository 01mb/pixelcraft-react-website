import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Frontend Engineering",
    budget: "$2,000 - $5,000",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-950 text-slate-100">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl font-bold text-white mt-1">Ready to Build Your Next Web Project?</h2>
          <p className="text-slate-400 text-sm mt-2">
            Tell us about your requirements and we will deliver a project estimate within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 bg-sky-950/40 border border-sky-800 text-center rounded-2xl">
            <div className="text-3xl mb-2">🎉</div>
            <h3 className="text-xl font-bold text-white mb-2">Inquiry Received!</h3>
            <p className="text-sm text-slate-300">
              Thanks for reaching out, <strong>{formData.name}</strong>. Our team will review your project details and contact you via <strong>{formData.email}</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Alex Henderson"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-sky-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">Work Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="alex@company.com"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">Primary Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-sky-500"
                >
                  <option>Frontend Engineering</option>
                  <option>UI/UX Design System</option>
                  <option>E-Commerce & Payments</option>
                  <option>Web Performance Audit</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">Estimated Budget</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-sky-500"
                >
                  <option>&lt; $2,000</option>
                  <option>$2,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5">Project Overview</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                placeholder="Give us a brief overview of what you are aiming to build, desired timeline, or links to references..."
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-sky-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-lg text-sm transition shadow-md shadow-sky-500/20"
            >
              Send Project Inquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
}