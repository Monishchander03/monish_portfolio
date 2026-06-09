import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import About from './sections/About.jsx';
import Certifications from './sections/Certifications.jsx';
import Contact from './sections/Contact.jsx';
import Experience from './sections/Experience.jsx';
import Footer from './sections/Footer.jsx';
import Hero from './sections/Hero.jsx';
import Projects from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';
import { useLoading } from './hooks/useLoading.js';

export default function App() {
  const loading = useLoading(1100);

  return (
    <div className="min-h-screen overflow-x-hidden bg-surface text-ink antialiased">
      <AnimatePresence mode="wait">{loading && <LoadingScreen />}</AnimatePresence>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
