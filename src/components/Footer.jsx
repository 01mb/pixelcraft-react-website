export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 px-6 text-slate-500 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded bg-sky-500 flex items-center justify-center text-slate-950 font-bold text-xs">P</span>
          <span className="font-bold text-slate-300">PixelCraft Studios</span>
          <span>— Modern Web Applications</span>
        </div>

        <div className="flex gap-6 text-slate-400">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <p>© {new Date().getFullYear()} PixelCraft. All rights reserved.</p>
      </div>
    </footer>
  );
}