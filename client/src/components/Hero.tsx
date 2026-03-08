import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-[#0e0e0e] pt-32 pb-8 px-5 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      >


        {/* Main headline */}
        <h1
          className="text-white font-medium leading-[0.88] tracking-tight -ml-[0.05em]"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 9.5rem)' }}
        >
          Erick Austria
        </h1>

        {/* Sub */}
        <p className="text-[#FFCC00] text-base md:text-lg leading-relaxed mt-10 max-w-xl">
          Result-driven motion designer crafting 2D &amp; 3D animation, visual storytelling,
          and motion graphics that move people — and brands.
        </p>
      </motion.div>
    </section>
  );
}
