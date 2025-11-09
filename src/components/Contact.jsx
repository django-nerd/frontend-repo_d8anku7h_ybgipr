import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight dark:text-white">Get In Touch</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-prose">
            Have an idea or a project in mind? Send a message and let’s build something premium together.
          </p>

          <div className="mt-8">
            <motion.div
              initial={{ rotateX: 12, rotateY: -12, y: 10 }}
              whileInView={{ rotateX: 0, rotateY: 0, y: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
              className="relative mx-auto w-full max-w-md perspective-1000"
            >
              <div className="relative rounded-3xl p-5 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                <div className="rounded-2xl bg-white dark:bg-neutral-900 p-6 shadow-2xl">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-rose-500" />
                    <div className="h-3 w-3 rounded-full bg-amber-500" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500" />
                  </div>
                  <div className="mt-4 rounded-xl bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-800 dark:to-neutral-900 p-4">
                    <div className="h-24 rounded-lg bg-gradient-to-br from-indigo-500/20 to-pink-500/20" />
                  </div>
                  <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">3D Message Panel</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-3xl p-[1px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
        >
          <div className="rounded-[22px] bg-white dark:bg-neutral-950 p-6 md:p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Name" type="text" placeholder="Jane Doe" />
              <Field label="Email" type="email" placeholder="jane@email.com" />
            </div>
            <div className="mt-4">
              <Field label="Subject" type="text" placeholder="Project inquiry" />
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</label>
              <textarea rows={5} className="mt-2 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-sm" placeholder="Tell me about your project..." />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="text-xs text-neutral-500 dark:text-neutral-400">I typically reply within 24 hours.</div>
              <motion.button whileTap={{ scale: 0.98 }} whileHover={{ scale: 1.02 }} className="px-5 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium shadow">
                Send Message
              </motion.button>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, type = 'text', placeholder }) {
  return (
    <div>
      <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{label}</label>
      <input type={type} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-sm" />
    </div>
  );
}
