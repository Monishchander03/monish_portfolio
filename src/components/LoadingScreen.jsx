import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[90] grid place-items-center bg-carbon"
      aria-label="Loading portfolio"
    >
      <div className="relative flex flex-col items-center gap-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
          className="h-16 w-16 rounded-full border border-white/10 border-t-volt shadow-glow"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm font-bold uppercase tracking-[0.35em] text-white/72"
        >
          Initializing Intelligence
        </motion.p>
      </div>
    </motion.div>
  );
}
