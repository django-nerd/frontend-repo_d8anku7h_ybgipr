import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400"
            >
              Creative Developer building immersive 3D experiences
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-xl"
            >
              I craft modern, performant web apps with delightful interactions, depth, and motion. Scroll to explore.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.8 }} className="mt-8 flex items-center gap-4">
              <a href="#projects" className="px-5 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium shadow-lg shadow-neutral-900/10 dark:shadow-white/10 hover:scale-[1.03] active:scale-100 transition-transform">View Projects</a>
              <a href="#contact" className="px-5 py-3 rounded-xl bg-white/70 dark:bg-neutral-800/70 border border-neutral-200 dark:border-neutral-700 backdrop-blur-md font-medium text-neutral-800 dark:text-neutral-200 shadow hover:scale-[1.03] transition-transform">Contact Me</a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="hidden md:block" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-neutral-950 opacity-70" />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-neutral-400 dark:border-neutral-600 flex items-start justify-center mx-auto"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <motion.div className="w-1 h-2 mt-1 rounded-full bg-neutral-500 dark:bg-neutral-400" animate={{ y: [0, 16, 0] }} transition={{ repeat: Infinity, duration: 2 }} />
        </motion.div>
      </div>
    </section>
  );
}
