'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TreeProps {
  stage: number;
  animate?: boolean;
}

export function Tree({ stage, animate = true }: TreeProps) {
  const treeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const leafVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const renderTree = () => {
    switch (stage) {
      case 0: // Seed
        return (
          <motion.div className="flex flex-col items-center justify-center" variants={leafVariants}>
            <div className="w-8 h-8 bg-amber-700 rounded-full shadow-lg" />
          </motion.div>
        );
      case 1: // Sprout
        return (
          <motion.div className="flex flex-col items-center justify-center" variants={containerVariants}>
            <motion.div className="w-2 h-12 bg-green-600" variants={leafVariants} />
            <motion.div className="w-8 h-8 bg-amber-700 rounded-full shadow-lg" variants={leafVariants} />
          </motion.div>
        );
      case 2: // Plant
        return (
          <motion.div className="flex flex-col items-center justify-center" variants={containerVariants}>
            <motion.div className="flex gap-4 mb-2" variants={leafVariants}>
              <div className="w-6 h-6 bg-green-400 rounded-full opacity-80" />
              <div className="w-6 h-6 bg-green-400 rounded-full opacity-80" />
            </motion.div>
            <motion.div className="w-3 h-16 bg-green-700" variants={leafVariants} />
            <motion.div className="w-8 h-8 bg-amber-700 rounded-full shadow-lg" variants={leafVariants} />
          </motion.div>
        );
      case 3: // Tree
        return (
          <motion.div className="flex flex-col items-center justify-center" variants={containerVariants}>
            <motion.div className="flex gap-6 mb-3" variants={leafVariants}>
              <div className="w-8 h-8 bg-green-500 rounded-full opacity-90" />
              <div className="w-8 h-8 bg-green-500 rounded-full opacity-90" />
              <div className="w-8 h-8 bg-green-500 rounded-full opacity-90" />
            </motion.div>
            <motion.div className="flex gap-4 mb-2" variants={leafVariants}>
              <div className="w-6 h-6 bg-green-400 rounded-full opacity-80" />
              <div className="w-6 h-6 bg-green-400 rounded-full opacity-80" />
            </motion.div>
            <motion.div className="w-4 h-20 bg-amber-800" variants={leafVariants} />
            <motion.div className="w-10 h-10 bg-amber-700 rounded-full shadow-lg" variants={leafVariants} />
          </motion.div>
        );
      case 4: // Flourishing
        return (
          <motion.div className="flex flex-col items-center justify-center" variants={containerVariants}>
            <motion.div className="flex gap-8 mb-4" variants={leafVariants}>
              <div className="w-10 h-10 bg-emerald-500 rounded-full opacity-100 shadow-lg" />
              <div className="w-10 h-10 bg-emerald-500 rounded-full opacity-100 shadow-lg" />
              <div className="w-10 h-10 bg-emerald-500 rounded-full opacity-100 shadow-lg" />
            </motion.div>
            <motion.div className="flex gap-6 mb-3" variants={leafVariants}>
              <div className="w-8 h-8 bg-green-500 rounded-full opacity-90" />
              <div className="w-8 h-8 bg-green-500 rounded-full opacity-90" />
              <div className="w-8 h-8 bg-green-500 rounded-full opacity-90" />
            </motion.div>
            <motion.div className="flex gap-4 mb-2" variants={leafVariants}>
              <div className="w-6 h-6 bg-green-400 rounded-full opacity-80" />
              <div className="w-6 h-6 bg-green-400 rounded-full opacity-80" />
            </motion.div>
            <motion.div className="w-5 h-24 bg-amber-900 shadow-xl" variants={leafVariants} />
            <motion.div className="w-12 h-12 bg-amber-700 rounded-full shadow-2xl" variants={leafVariants} />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="w-full h-full flex items-center justify-center"
      initial={animate ? 'hidden' : 'visible'}
      animate="visible"
      variants={treeVariants}
    >
      <motion.div variants={containerVariants} initial={animate ? 'hidden' : 'visible'} animate="visible">
        {renderTree()}
      </motion.div>
    </motion.div>
  );
}
