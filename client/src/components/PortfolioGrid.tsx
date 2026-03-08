import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import VideoModal from './VideoModal';
import { Play } from 'lucide-react';

/**
 * Portfolio Grid — Erick Austria
 *
 * Fullstack + Design projects showcased fullbleed edge-to-edge.
 * Zero gap between cards. Yellow overlay on hover.
 */

interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  category: string;
  videoUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Design System at Scale',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663412940996/S5h3tr6YZRitgW8hkVEKBs/portfolio-card-blue-QnC32ukuV25XJm6PMKNdN4.webp',
    category: 'UI Engineering · Design Systems',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '2',
    title: 'Enterprise SaaS Dashboard',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663412940996/S5h3tr6YZRitgW8hkVEKBs/portfolio-card-earth-jz9w4vkmkN7pPicVHTE3Tx.webp',
    category: 'Fullstack · React · Node.js',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '3',
    title: 'Brand Identity Platform',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663412940996/S5h3tr6YZRitgW8hkVEKBs/portfolio-card-yellow-S8yqvpQ2XVAdxqPyjQARfd.webp',
    category: 'UX Design · Frontend Architecture',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '4',
    title: 'Motion-Driven Web App',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663412940996/S5h3tr6YZRitgW8hkVEKBs/portfolio-card-vehicle-B8HpiZYrEeFKLAbMqpjnKc.webp',
    category: 'Framer Motion · TypeScript',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '5',
    title: 'E-Commerce Experience',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663412940996/S5h3tr6YZRitgW8hkVEKBs/portfolio-card-blue-QnC32ukuV25XJm6PMKNdN4.webp',
    category: 'Next.js · Stripe · UX',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '6',
    title: 'API-First Platform',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663412940996/S5h3tr6YZRitgW8hkVEKBs/portfolio-card-earth-jz9w4vkmkN7pPicVHTE3Tx.webp',
    category: 'Backend · REST / GraphQL',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '7',
    title: 'Real-Time Collaboration Tool',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663412940996/S5h3tr6YZRitgW8hkVEKBs/portfolio-card-yellow-S8yqvpQ2XVAdxqPyjQARfd.webp',
    category: 'WebSockets · React · Postgres',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '8',
    title: 'Mobile-First Web Platform',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663412940996/S5h3tr6YZRitgW8hkVEKBs/portfolio-card-vehicle-B8HpiZYrEeFKLAbMqpjnKc.webp',
    category: 'Progressive Web App · UX',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '9',
    title: 'AI-Powered Interface',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663412940996/S5h3tr6YZRitgW8hkVEKBs/portfolio-card-blue-QnC32ukuV25XJm6PMKNdN4.webp',
    category: 'AI/ML Integration · UI Engineering',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '10',
    title: 'Developer Portfolio System',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663412940996/S5h3tr6YZRitgW8hkVEKBs/portfolio-card-earth-jz9w4vkmkN7pPicVHTE3Tx.webp',
    category: 'Vite · React · TailwindCSS',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '11',
    title: 'Fintech Dashboard',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663412940996/S5h3tr6YZRitgW8hkVEKBs/portfolio-card-yellow-S8yqvpQ2XVAdxqPyjQARfd.webp',
    category: 'Data Visualization · Finance UX',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '12',
    title: 'Community Platform',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663412940996/S5h3tr6YZRitgW8hkVEKBs/portfolio-card-vehicle-B8HpiZYrEeFKLAbMqpjnKc.webp',
    category: 'Fullstack · Social · Auth',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function PortfolioGrid() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  return (
    <>
      <section id="portfolio" className="bg-[#0e0e0e] mt-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} onSelect={setSelectedProject} />
          ))}
        </motion.div>
      </section>

      <VideoModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        videoUrl={selectedProject?.videoUrl || ''}
        title={selectedProject?.title || ''}
      />
    </>
  );
}

interface PortfolioCardProps {
  item: PortfolioItem;
  onSelect: (item: PortfolioItem) => void;
}

function PortfolioCard({ item, onSelect }: PortfolioCardProps) {
  return (
    <motion.button
      variants={itemVariants}
      onClick={() => onSelect(item)}
      className="relative overflow-hidden aspect-square group text-left w-full block"
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      />
      {/* Yellow hover overlay */}
      <div className="absolute inset-0 bg-[#FFCC00] opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 px-8">
        <Play size={26} className="text-black" strokeWidth={2} fill="black" />
        <h3
          className="text-black font-semibold text-center leading-tight"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.4rem)' }}
        >
          {item.title}
        </h3>
        <p className="text-black/60 text-xs tracking-widest uppercase">{item.category}</p>
      </div>
    </motion.button>
  );
}
