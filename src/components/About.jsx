import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1">
            <div className="h-full w-full rounded-[22px] bg-white dark:bg-neutral-900 grid place-items-center overflow-hidden">
              {/* 3D Human using CSS card tilt */}
              <motion.img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop"
                alt="3D Avatar"
                className="w-4/5 rounded-2xl shadow-2xl"
                whileHover={{ rotateX: 8, rotateY: -8 }}
                transition={{ type: 'spring', stiffness: 150, damping: 12 }}
                style={{ transformStyle: 'preserve-3d' }}
              />
            </div>
          </div>
          <motion.div
            className="absolute -inset-6 -z-0 rounded-[36px] bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-2xl"
            aria-hidden
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight dark:text-white">About Me</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
            I'm a full‑stack developer focused on crafting sleek, performant interfaces and robust backends. I love blending motion, depth, and 3D to turn ideas into premium experiences.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {['WebGL & 3D','Framer Motion','Fast APIs','Clean Architecture'].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
