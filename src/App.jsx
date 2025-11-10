import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/50 text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="text-white/40 text-sm">Built with love • Designed for performance</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-inter">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
