import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-[#0e0e0e] pt-32 pb-8 px-5 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Eyebrow */}
        <p className="text-[#FFCC00] text-xs tracking-[0.25em] uppercase mb-8 font-medium">
          Senior Motion Designer · 2D &amp; 3D Animation
        </p>

        {/* Main headline */}
        <h1
          className="text-white font-medium leading-[0.88] tracking-tight"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 9.5rem)' }}
        >
          Bringing brands
          <br />
          to life{' '}
          <span className="yellow-underline">through motion.</span>
        </h1>

        {/* Sub */}
        <p className="text-white/50 text-base md:text-lg leading-relaxed mt-10 max-w-xl">
          Result-driven motion designer crafting 2D &amp; 3D animation, visual storytelling,
          and motion graphics that move people — and brands.
        </p>
      </motion.div>
    </section>
  );
}
