import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // For demo, we just simulate success
    await new Promise((r) => setTimeout(r, 900));
    setStatus('Thanks! I will get back to you shortly.');
  };

  return (
    <section id="contact" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Let’s build something great</h2>
          <p className="mt-2 text-white/60">Share a bit about your project and I’ll respond within 24 hours.</p>
        </div>

        <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
          <input required placeholder="Name" className="col-span-1 rounded-lg bg-white/5 px-4 py-3 text-white placeholder-white/40 ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-indigo-400/40" />
          <input required type="email" placeholder="Email" className="col-span-1 rounded-lg bg-white/5 px-4 py-3 text-white placeholder-white/40 ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-indigo-400/40" />
          <input placeholder="Company / Website (optional)" className="sm:col-span-2 rounded-lg bg-white/5 px-4 py-3 text-white placeholder-white/40 ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-indigo-400/40" />
          <textarea required rows={5} placeholder="Tell me about your project" className="sm:col-span-2 rounded-lg bg-white/5 px-4 py-3 text-white placeholder-white/40 ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-indigo-400/40" />
          <div className="sm:col-span-2 flex items-center justify-between gap-3">
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition">
              <Send size={16} /> Send message
            </button>
            <p className="text-sm text-white/60">{status}</p>
          </div>
        </form>

        <p className="mt-10 text-xs text-white/40">This is a demo form. Hook it to your preferred email/API in production.</p>
      </div>
    </section>
  );
}
