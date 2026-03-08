import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * VideoModal Component - Dark Minimalism with Chromatic Accents
 * 
 * Design Philosophy:
 * - Smooth entrance/exit animations
 * - Full-screen modal with dark overlay
 * - Responsive video player
 * - Close button with hover effects
 */

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-40"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Modal Content */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-card rounded-sm overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-heading-md font-light">{title}</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:text-accent transition-all duration-300"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Video Container */}
              <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={videoUrl}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
