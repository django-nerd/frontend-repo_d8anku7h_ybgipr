import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const projects = [
  {
    title: '3D Product Configurator',
    desc: 'Interactive WebGL experience with real-time customization.',
    link: '#',
    img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'AI Portfolio Generator',
    desc: 'Generate modern portfolios with animations and themes.',
    link: '#',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Realtime Dashboard',
    desc: 'Framer Motion + sockets for buttery smooth insights.',
    link: '#',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-28">
      {/* 3D animated background (vibrant assembly line scene) */}
      <div className="pointer-events-none absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {/* Readability mask and subtle depth glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-white/90 dark:from-neutral-950/90 dark:via-neutral-950/60 dark:to-neutral-950/90" />
        <motion.div
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-to-r from-fuchsia-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl"
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-center dark:text-white"
          >
            Featured Projects
          </motion.h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md border border-neutral-200/70 dark:border-neutral-800 shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-80" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold dark:text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{p.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
