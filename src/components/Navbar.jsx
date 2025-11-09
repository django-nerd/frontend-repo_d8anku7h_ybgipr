import { useEffect, useState } from 'react';
import { Rocket, Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function useDarkMode() {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (enabled) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [enabled]);

  return [enabled, setEnabled];
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useDarkMode();

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('nav');
      if (!el) return;
      if (window.scrollY > 10) {
        el.classList.add('backdrop-blur-md', 'bg-white/70', 'dark:bg-neutral-900/60', 'shadow');
      } else {
        el.classList.remove('backdrop-blur-md', 'bg-white/70', 'dark:bg-neutral-900/60', 'shadow');
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="nav" className="fixed top-0 left-0 right-0 z-50 transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <motion.span
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            className="inline-flex p-2 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-indigo-500/30"
          >
            <Rocket size={20} />
          </motion.span>
          <span className="font-semibold text-lg tracking-tight dark:text-white">My Portfolio</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {['Home','About','Tech','Projects','Contact'].map((label) => (
            <a key={label} href={`#${label.toLowerCase()}`} className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors">
              {label}
            </a>
          ))}
          <DarkModeToggle enabled={dark} onToggle={() => setDark((v) => !v)} />
        </div>

        <button className="md:hidden p-2 rounded-lg border border-neutral-200 dark:border-neutral-700 dark:text-neutral-200" onClick={() => setOpen((o) => !o)} aria-label="Toggle Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {['Home','About','Tech','Projects','Contact'].map((label) => (
                <a key={label} href={`#${label.toLowerCase()}`} onClick={() => setOpen(false)} className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
                  {label}
                </a>
              ))}
              <div className="pt-2">
                <DarkModeToggle enabled={dark} onToggle={() => setDark((v) => !v)} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function DarkModeToggle({ enabled, onToggle }) {
  // 3D-ish cube toggle
  return (
    <button onClick={onToggle} aria-label="Toggle Dark Mode" className="relative w-12 h-12 perspective-1000">
      <motion.div
        className="absolute inset-0"
        animate={{ rotateY: enabled ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 180, damping: 16 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 grid place-items-center rounded-xl bg-gradient-to-br from-amber-400 to-pink-500 text-white shadow-lg" style={{ backfaceVisibility: 'hidden' }}>
          <Sun size={20} />
        </div>
        <div className="absolute inset-0 grid place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-700 text-white shadow-lg" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
          <Moon size={20} />
        </div>
      </motion.div>
    </button>
  );
}
