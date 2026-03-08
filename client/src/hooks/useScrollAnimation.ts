import { useEffect, useRef } from 'react';

/**
 * useScrollAnimation Hook - Scroll-triggered fade-in animations
 * 
 * Design Philosophy:
 * - Uses Intersection Observer API for performance
 * - Triggers animations when elements enter viewport
 * - Smooth fade-in and slide-up effects
 * - Staggered animations for grid items
 */

export function useScrollAnimation(options = {}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return ref as React.RefObject<HTMLElement>;
}
