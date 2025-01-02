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
          Designed & Developed by Mayur | {new Date().getFullYear()} | All Rights Reserved
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
