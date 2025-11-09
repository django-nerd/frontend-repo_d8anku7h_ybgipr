import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden">
      {/* 3D Spline Scene (futuristic cube + iridescent spheres) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Floating orbital accents to complement the 3D scene */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/40 via-purple-400/30 to-fuchsia-400/20 blur-lg"
          style={{ left: '10%', top: '20%' }}
          animate={{ x: [0, 30, 0, -20, 0], y: [0, -15, 0, 20, 0], rotate: [0, 45, 0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-fuchsia-500/40 via-indigo-400/30 to-cyan-400/20 blur-lg"
          style={{ right: '12%', top: '28%' }}
          animate={{ x: [0, -25, 0, 20, 0], y: [0, 10, 0, -18, 0], rotate: [0, -60, 0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.div
          className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-cyan-300/50 to-purple-300/40 blur-md"
          style={{ left: '20%', bottom: '18%' }}
          animate={{ x: [0, 18, 0, -14, 0], y: [0, -10, 0, 12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
      </div>

      {/* Content overlay */}
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
              A dynamic 3D hero with interactive motion and iridescent depth. Scroll to explore the work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="mt-8 flex items-center gap-4"
            >
              <a
                href="#projects"
                className="px-5 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium shadow-lg shadow-neutral-900/10 dark:shadow-white/10 hover:scale-[1.03] active:scale-100 transition-transform"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-xl bg-white/70 dark:bg-neutral-800/70 border border-neutral-200 dark:border-neutral-700 backdrop-blur-md font-medium text-neutral-800 dark:text-neutral-200 shadow hover:scale-[1.03] transition-transform"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hidden md:block"
          />
        </div>
      </div>

      {/* Soft top fade so text remains readable over the 3D canvas */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-neutral-950 opacity-70" />

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-neutral-400 dark:border-neutral-600 flex items-start justify-center mx-auto"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <motion.div
            className="w-1 h-2 mt-1 rounded-full bg-neutral-500 dark:bg-neutral-400"
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
