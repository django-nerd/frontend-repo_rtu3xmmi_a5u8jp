import { Code2, Palette, Cpu } from 'lucide-react';

const skills = [
  { icon: Code2, title: 'Frontend Engineering', desc: 'Crafting performant interfaces with React, Vite, and modern CSS.' },
  { icon: Cpu, title: 'Systems Thinking', desc: 'Designing resilient architectures that scale gracefully.' },
  { icon: Palette, title: 'Product Design', desc: 'Bridging aesthetics and usability with component-driven design.' },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">About</h2>
          <p className="mt-2 text-white/60">I combine engineering, design, and strategy to create premium experiences.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-300 ring-1 ring-inset ring-indigo-500/20">
                <Icon size={18} />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
