import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: 'Neon Dashboard',
    description: 'A real-time analytics dashboard with reactive charts and dark neon aesthetics.',
    tags: ['React', 'Tailwind', 'WebSockets'],
    link: '#',
    highlight: true,
  },
  {
    title: 'E‑commerce Microfrontends',
    description: 'Composable storefront built with module federation and edge caching.',
    tags: ['Microfrontends', 'Vite', 'Cloudflare'],
    link: '#',
  },
  {
    title: 'Design System',
    description: 'Accessible components and tokens powering multiple brands.',
    tags: ['Design Tokens', 'Storybook', 'Radix'],
    link: '#',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-20 bg-slate-950">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Selected Work</h2>
            <p className="mt-2 text-white/60">A snapshot of projects that blend craft, performance, and polish.</p>
          </div>
          <a href="#" className="text-sm text-indigo-300 hover:text-indigo-200">See all</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link.startsWith('#') ? undefined : '_blank'}
              rel={p.link.startsWith('#') ? undefined : 'noreferrer'}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 hover:border-white/20 hover:from-white/10 transition`}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  {p.title}
                  {p.highlight && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] font-medium text-amber-300 ring-1 ring-inset ring-amber-400/30">
                      <Star size={12} /> Featured
                    </span>
                  )}
                </h3>
                <ExternalLink className="text-white/40 group-hover:text-white/70 transition" size={16} />
              </div>
              <p className="mt-2 text-sm text-white/60">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md bg-white/5 px-2 py-1 text-[11px] text-white/70 ring-1 ring-inset ring-white/10">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
