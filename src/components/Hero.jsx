import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-inset ring-white/20 backdrop-blur">Premium • Interactive • Modern</span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Crafting delightful digital experiences
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed">
            I blend design and engineering to build high-performing, user‑first products. Explore a curated selection of work, principles, and the tools I use every day.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="inline-flex items-center justify-center rounded-lg bg-indigo-500 hover:bg-indigo-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition">
              View Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 px-5 py-3 text-sm font-semibold text-white transition ring-1 ring-white/15">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
