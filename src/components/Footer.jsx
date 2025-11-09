import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-16 mt-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.08),transparent_55%)]" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          <div className="relative rounded-[22px] bg-white dark:bg-neutral-950 px-6 py-10 md:px-10">
            <motion.div initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight dark:text-white">Let’s build something immersive.</h3>
                <p className="mt-1 text-neutral-600 dark:text-neutral-300">Premium web experiences with motion, depth, and detail.</p>
              </div>
              <div className="flex items-center gap-3">
                {[
                  { icon: Github, href: '#'},
                  { icon: Linkedin, href: '#'},
                  { icon: Mail, href: '#'},
                ].map(({ icon: Icon, href }) => (
                  <a key={href} href={href} className="group relative">
                    <span className="absolute -inset-2 rounded-xl bg-gradient-to-br from-indigo-500/20 to-pink-500/20 blur opacity-0 group-hover:opacity-100 transition" />
                    <div className="relative w-11 h-11 grid place-items-center rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 shadow-sm hover:scale-105 transition-transform">
                      <Icon size={20} />
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
            <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent" />
            <div className="mt-6 text-center text-sm text-neutral-500 dark:text-neutral-400">© {new Date().getFullYear()} Your Name. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
