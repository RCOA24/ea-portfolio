import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const testimonials = [
  {
    quote:
      '"Erick has an exceptional eye for motion design. He brought our brand campaign to life with animation that was both technically precise and artistically striking. Delivery was on time and beyond expectations."',
    author: 'Sofia Ramos',
    role: 'Head of Marketing, Arcline Technologies',
  },
  {
    quote:
      '"We brought Erick on for a tight-deadline explainer series and he absolutely delivered. His understanding of visual storytelling and pacing is second to none. Highly recommend for any motion project."',
    author: 'Marcus Chen',
    role: 'Creative Director, Vantara Labs',
  },
  {
    quote:
      '"Erick produced stunning 3D renders and animations for our product launch. The depth and quality of his Cinema 4D work left our team speechless. A true craftsman."',
    author: 'Priya Nair',
    role: 'Brand Manager, Vertex Digital',
  },
  {
    quote:
      '"Working with Erick was seamless. He understood our brand voice immediately and translated it into motion with incredible fluidity. His explainer videos contributed directly to a measurable lift in conversions."',
    author: 'James Whitfield',
    role: 'VP of Growth, Fundme',
  },
];

const techStack = [
  'Adobe After Effects',
  'Cinema 4D',
  'Adobe Premiere Pro',
  'Figma',
  'Motion Graphics',
  '2D Animation',
  '3D Animation',
  'Visual Storytelling',
  'Storyboarding',
  'Color Theory',
  'Typography',
  'Adobe Creative Suite',
];

const selectClients = [
  'N-able',
  'GMA Network, Inc.',
  'Al Faisaliah Hotel — Rosewood',
  'Green Jakobsen Philippines',
  'Medical Group',
  'eamotion.design',
];

const selectStudios = [
  'School of Motion',
  'mamemo productions',
  'CMB Shoot Digital',
  'Freelance — 14+ yrs',
];

const itemFade = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0e0e0e]">
      <Header />

      <main className="flex-1">
        {/* ─── Bio section ──────────────────────────── */}
        <section className="px-5 md:px-8 pt-36 pb-20 max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.12 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24"
          >
            {/* Left — heading + bio */}
            <motion.div variants={itemFade}>
              <h1
                className="text-[#FFCC00] font-semibold leading-none tracking-tight mb-10"
                style={{ fontSize: 'clamp(4rem, 9vw, 9rem)' }}
              >
                Hello!
              </h1>
              <div className="space-y-5 text-white/75 text-base md:text-lg leading-relaxed">
                <p>
                  I'm <strong className="text-white font-semibold">Erick Austria</strong>, a
                  Senior Motion Designer based in Central Luzon, Philippines — currently at{' '}
                  <strong className="text-white font-semibold">N-able</strong> and founder of{' '}
                  <strong className="text-white font-semibold">eamotion.design</strong>.
                </p>
                <p>
                  Result-driven professional with substantial experience in 2D &amp; 3D Graphics
                  Design and Animation. In-depth understanding of emerging technologies and their
                  commercial applications.
                </p>
                <p>
                  I specialize in motion graphics, visual storytelling, and character animation —
                  with a particular passion for mixed media and explainer content that actually
                  moves people.
                </p>
                <p>
                  My goal is to bring enthusiasm, craft, and expertise to every project — and
                  help clients bring their creative ideas to life through the power of motion.
                </p>
                <div className="pt-6">
                  <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-3">Get in touch</p>
                  <a
                    href="mailto:hello@eamotion.design?subject=Hey%20Erick!"
                    className="yellow-underline text-white text-xl font-medium hover:text-[#FFCC00] transition-colors duration-300"
                  >
                    hello@eamotion.design
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right — stack + clients */}
            <motion.div variants={itemFade} className="space-y-14">
              {/* Skills / Tools */}
              <div>
                <p className="text-[#FFCC00] text-xs tracking-[0.2em] uppercase mb-5">
                  Tools &amp; Skills
                </p>
                <ul className="space-y-2">
                  {techStack.map((t) => (
                    <li
                      key={t}
                      className="text-white/75 text-base md:text-lg border-b border-white/10 pb-2.5 flex items-center justify-between group"
                    >
                      {t}
                      <span className="text-white/20 text-xs group-hover:text-[#FFCC00] transition-colors">
                        →
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Select clients */}
              <div>
                <p className="text-[#FFCC00] text-xs tracking-[0.2em] uppercase mb-5">
                  Select Clients &amp; Employers
                </p>
                <ul className="space-y-2">
                  {selectClients.map((c) => (
                    <li
                      key={c}
                      className="text-white/75 text-base md:text-lg border-b border-white/10 pb-2.5"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Studios */}
              <div>
                <p className="text-[#FFCC00] text-xs tracking-[0.2em] uppercase mb-5">
                  Studios &amp; Productions
                </p>
                <ul className="space-y-2">
                  {selectStudios.map((s) => (
                    <li
                      key={s}
                      className="text-white/75 text-base md:text-lg border-b border-white/10 pb-2.5"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ─── Stats bar ────────────────────────────── */}
        <section className="border-t border-b border-white/10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4"
          >
            {[
              { value: '14+', label: 'Years of Craft' },
              { value: '100+', label: 'Projects Delivered' },
              { value: '6+', label: 'Companies Served' },
              { value: '2', label: 'Continents' },
            ].map((stat, i) => (
              <div
                key={i}
                className={`px-8 py-12 text-center ${i < 3 ? 'border-r border-white/10' : ''}`}
              >
                <p
                  className="text-[#FFCC00] font-semibold leading-none mb-3"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                >
                  {stat.value}
                </p>
                <p className="text-white/40 text-xs tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ─── Education ────────────────────────────── */}
        <section className="px-5 md:px-8 py-16 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#FFCC00] text-xs tracking-[0.2em] uppercase mb-8">Education &amp; Certifications</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-white/10 p-8">
                <p className="text-white font-medium text-lg mb-1">Far Eastern University</p>
                <p className="text-white/50 text-sm mb-3">Bachelor of Fine Arts — Major in Advertising</p>
                <p className="text-white/30 text-xs tracking-widest uppercase">1990 – 1995</p>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Figma Essential Training', issuer: 'LinkedIn Learning', date: 'Apr 2025' },
                  { name: 'Visual Essay Production (Explainer Camp)', issuer: 'School of Motion', date: 'Sep 2024' },
                ].map((cert) => (
                  <div key={cert.name} className="border border-white/10 p-6">
                    <p className="text-white font-medium mb-1">{cert.name}</p>
                    <p className="text-white/50 text-sm mb-2">{cert.issuer}</p>
                    <p className="text-white/30 text-xs tracking-widest uppercase">Issued {cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ─── Testimonials ─────────────────────────── */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-10 md:p-14 flex flex-col justify-between min-h-[320px]"
              style={{ backgroundColor: i % 2 === 0 ? '#FFCC00' : '#F5C400' }}
            >
              <p className="text-black/85 text-base md:text-lg leading-relaxed mb-8 font-light">
                {t.quote}
              </p>
              <div>
                <p className="text-black font-semibold">{t.author}</p>
                <p className="text-black/55 text-sm mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
