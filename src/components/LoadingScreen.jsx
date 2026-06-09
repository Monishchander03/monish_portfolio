import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const loadingQuotes = [
  'Loading Intelligence',
  'Building Dreams',
  'Crafting Excellence',
  'Processing Data',
  'Innovating Solutions',
  'Architecting Future',
  'Optimizing Performance',
  'Unleashing Potential',
];

export default function LoadingScreen() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % loadingQuotes.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[90] grid place-items-center bg-carbon"
      aria-label="Loading portfolio"
    >
      <div className="relative flex flex-col items-center gap-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
          className="h-16 w-16 rounded-full border border-white/10 border-t-volt shadow-glow"
        />
        <motion.div
          key={quoteIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="h-12 flex items-center justify-center"
        >
          <p className="text-center text-base font-bold uppercase tracking-widest text-volt">
            {loadingQuotes[quoteIndex]}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
