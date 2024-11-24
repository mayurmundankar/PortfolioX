import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto text-center text-gray-400"
      >
        <p className="flex items-center justify-center gap-2">
          Designed with 
          <motion.span
            animate={{ 
              scale: [1, 1.2, 1],
              color: ['#9333EA', '#EC4899', '#9333EA']
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart className="w-4 h-4 fill-current" />
          </motion.span>
          by Mayur | 2024
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;