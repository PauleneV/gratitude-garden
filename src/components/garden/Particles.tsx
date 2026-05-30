'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ParticleProps {
  type: 'leaves' | 'flowers' | 'sparkles';
  count?: number;
  duration?: number;
}

export function Particles({ type = 'leaves', count = 10, duration = 8 }: ParticleProps) {
  const particles = Array.from({ length: count }, (_, i) => i);

  const getParticleStyle = (index: number) => {
    switch (type) {
      case 'leaves':
        return {
          emoji: '🍃',
          color: 'text-green-500',
          rotation: (index * 360) / count,
        };
      case 'flowers':
        return {
          emoji: '🌸',
          color: 'text-pink-400',
          rotation: (index * 360) / count,
        };
      case 'sparkles':
        return {
          emoji: '✨',
          color: 'text-yellow-300',
          rotation: (index * 360) / count,
        };
      default:
        return { emoji: '🍃', color: 'text-green-500', rotation: 0 };
    }
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const particleVariants = {
    animate: (index: number) => ({
      y: [0, -300, 0],
      x: [0, Math.sin((index * 360) / count) * 50, 0],
      opacity: [0, 1, 0],
      rotate: [0, 360, 360],
      transition: {
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 0.1,
      },
    }),
  };

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      variants={containerVariants}
      animate="animate"
    >
      {particles.map((index) => {
        const { emoji, color } = getParticleStyle(index);
        return (
          <motion.div
            key={index}
            className={`absolute text-2xl ${color}`}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-50px',
            }}
            variants={particleVariants}
            custom={index}
          >
            {emoji}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
