import { motion } from 'framer-motion';
import { Code2, Cpu, Boxes, Atom } from 'lucide-react';

const techs = [
  { name: 'React', Icon: Atom, color: 'from-sky-400 to-blue-500' },
  { name: 'Node', Icon: Cpu, color: 'from-emerald-400 to-teal-500' },
  { name: 'Three.js', Icon: Boxes, color: 'from-violet-400 to-fuchsia-500' },
  { name: 'TypeScript', Icon: Code2, color: 'from-indigo-400 to-purple-500' },
];

export default function TechStack() {
  return (
    <section id="tech" className="relative py-24 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-center dark:text-white"
        >
          Tech Stack
        </motion.h2>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {techs.map(({ name, Icon, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -6, rotateX: 6 }}
              className={`group relative rounded-2xl p-[1px] bg-gradient-to-br ${color} shadow-lg`}
            >
              <div className="rounded-[15px] bg-white dark:bg-neutral-900 p-6 h-full flex flex-col items-center justify-center gap-3">
                <motion.div
                  className={`w-16 h-16 rounded-2xl grid place-items-center text-white bg-gradient-to-br ${color} shadow-xl`}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                >
                  <Icon size={28} />
                </motion.div>
                <div className="font-semibold text-neutral-800 dark:text-neutral-100">{name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
