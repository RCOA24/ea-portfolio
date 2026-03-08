import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0e0e0e] px-5 md:px-8 py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-white font-medium leading-none tracking-tight mb-10"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 6.5rem)' }}
        >
          Available for Freelance

        </motion.h2>

        <motion.a
          href="mailto:hello@eamotion.design?subject=Hey%20Erick!"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="yellow-underline text-white font-light hover:text-[#FFCC00] transition-colors duration-300"
          style={{ fontSize: 'clamp(1.1rem, 2.8vw, 2.4rem)' }}
        >
          hello@eamotion.design
        </motion.a>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-wide">
            © {new Date().getFullYear()} Erick Austria
          </p>
          <p className="text-white/30 text-xs tracking-wide">
            Senior Motion Designer · eamotion.design
          </p>
        </div>
      </div>
    </footer>
  );
}
