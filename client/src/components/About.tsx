import { motion } from 'framer-motion';

/**
 * About section inspired by labrow.com/about
 * - Large "Hello! 👋" heading
 * - Bio left, clients/studios right
 * - Testimonials with yellow bg
 */

const testimonials = [
  {
    quote:
      '"It was terrific to work with Mike; he quickly understood what we required for the project and was very helpful throughout the process. If you\'re looking for a fast and responsive motion designer to hit your brief, I absolutely would recommend Mike."',
    author: 'Hayley Akins',
    role: 'Founder & CEO, Motion Hatch',
  },
  {
    quote:
      '"When a project requires our very best animators, we always look to bring Mike on board. His dedication and expertise always exceed our expectations."',
    author: 'DJ Ferro',
    role: 'Founder, Remade',
  },
  {
    quote:
      '"Mike is a dream to work with and a hugely talented animator — quick, communicative, reliable and great fun to have on the team."',
    author: 'Flo Layer',
    role: 'Interim Head of Production, Animade',
  },
  {
    quote:
      '"It\'s clear that Mike is a super talented designer, but what was most impressive was how quick he is at generating concepts, delivering quality work, and making revisions."',
    author: 'Nic Dean',
    role: 'Motion Designer & Developer',
  },
];

const selectClients = [
  'Amazon AWS', 'Google', 'Meta', 'Moneylion', 'Nintendo',
  'Pokemon', 'Universal Studios', 'Wall Street Journal', 'Walmart',
];

const selectStudios = [
  'Animade', 'Article Group', 'Malka Media', 'Motion Hatch',
  'OK Social', 'Peel Animation', 'Remade', 'School of Motion', 'We The Collective',
];

export default function About() {
  return (
    <section id="about" className="bg-[#131313]">
      {/* Bio section */}
      <div className="px-5 md:px-8 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 max-w-[1400px] mx-auto">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2
            className="text-[#FFCC00] font-medium leading-none tracking-tight mb-10"
            style={{ fontSize: 'clamp(3rem, 7vw, 7rem)' }}
          >
            Hello! 👋
          </h2>
          <div className="space-y-5 text-white/80 text-base md:text-lg leading-relaxed">
            <p>
              My name is Mike, I'm a Freelance Motion Designer based in Manchester, UK.
            </p>
            <p>
              I work with brands and agencies all around the world to make impactful animated content.
            </p>
            <p>
              I specialize in 2D animation, illustration and digital advertising, with a particular passion for mixed media.
            </p>
            <p>
              My goal is to bring my enthusiasm, fun and expertise into every project, and help clients bring their creative ideas to life.
            </p>
            <div className="pt-6">
              <p className="text-white/50 mb-2 text-sm tracking-widest uppercase">Get in touch</p>
              <a
                href="mailto:mike@labrow.com?subject=Hey%20Mike!%20👋"
                className="text-white yellow-underline text-xl font-medium hover:text-[#FFCC00] transition-colors"
              >
                mike@labrow.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          className="space-y-12"
        >
          <div>
            <p className="text-[#FFCC00] text-xs tracking-widest uppercase mb-4">Select clients</p>
            <ul className="space-y-2">
              {selectClients.map((c) => (
                <li key={c} className="text-white/80 text-base md:text-lg border-b border-white/10 pb-2">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[#FFCC00] text-xs tracking-widest uppercase mb-4">Select studios</p>
            <ul className="space-y-2">
              {selectStudios.map((s) => (
                <li key={s} className="text-white/80 text-base md:text-lg border-b border-white/10 pb-2">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Testimonials — yellow background, staggered */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`p-10 md:p-14 flex flex-col justify-between ${
              i % 2 === 0 ? 'bg-[#FFCC00]' : 'bg-[#f0c000]'
            }`}
          >
            <p className="text-black text-base md:text-lg leading-relaxed mb-8">{t.quote}</p>
            <div>
              <p className="text-black font-semibold">{t.author}</p>
              <p className="text-black/60 text-sm">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
