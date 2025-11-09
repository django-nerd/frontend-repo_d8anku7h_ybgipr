import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:text-indigo-300">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <ParallaxDivider />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function ParallaxDivider() {
  return (
    <div className="relative h-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-100/70 to-transparent dark:via-neutral-900/60" />
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[140%] h-[140%] rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl will-change-transform" style={{ transform: 'translate3d(0, -10%, 0)' }} />
      </div>
    </div>
  );
}
