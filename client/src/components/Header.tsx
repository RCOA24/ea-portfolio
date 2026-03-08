import { Home, User, Github, Linkedin } from 'lucide-react';
import { useLocation } from 'wouter';
import { useState, useEffect } from 'react';

export default function Header() {
  const [location] = useLocation();
  const isAbout = location === '/about';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-5 md:px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-4 bg-[#0e0e0e]/95 backdrop-blur-md border-b border-white/10' : 'py-6 bg-transparent border-b border-transparent'
        }`}
    >
      {/* Logo */}
      <a
        href="/"
        className="text-sm md:text-base font-medium text-white hover:opacity-60 transition-opacity tracking-wide"
        aria-label="Home"
      >
      </a>

      {/* Nav */}
      <nav className="flex items-center gap-8">
        <a
          href="/#portfolio"
          title="Work"
          aria-label="Work"
          className={`transition-opacity hover:opacity-60 ${isAbout ? 'text-white' : 'text-[#FFCC00]'}`}
        >
          <Home size={18} strokeWidth={1.8} />
        </a>
        <a
          href="/about"
          title="About"
          aria-label="About"
          className={`transition-opacity hover:opacity-60 ${isAbout ? 'text-[#FFCC00]' : 'text-white'}`}
        >
          <User size={18} strokeWidth={1.8} />
        </a>
        {/* <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          aria-label="GitHub"
          className="text-white hover:opacity-60 transition-opacity"
        >
          <Github size={18} strokeWidth={1.5} />
        </a> */}
        <a
          href="https://www.linkedin.com/in/erickaustria/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          aria-label="LinkedIn"
          className="text-white hover:opacity-60 transition-opacity"
        >
          <Linkedin size={18} strokeWidth={1.5} />
        </a>
      </nav>
    </header>
  );
}
