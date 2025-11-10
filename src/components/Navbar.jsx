import { useState, useEffect } from 'react';
import { Rocket, Github, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 font-semibold text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
            <Rocket size={18} />
          </span>
          <span className="tracking-tight">MyPremiumPortfolio</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#work" className="text-white/70 hover:text-white transition">Work</a>
          <a href="#about" className="text-white/70 hover:text-white transition">About</a>
          <a href="#contact" className="text-white/70 hover:text-white transition">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 text-white px-3 py-2 text-sm transition"
            aria-label="Email"
          >
            <Mail size={16} /> <span className="hidden sm:inline">Say hello</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 text-white px-3 py-2 text-sm transition"
            aria-label="GitHub"
          >
            <Github size={16} /> <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
