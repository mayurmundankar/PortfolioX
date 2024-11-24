import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Brain } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=300&h=300&fit=crop"
                alt="Mayur Mundankar"
                className="rounded-2xl shadow-2xl w-64 h-64 object-cover mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-white mb-6"
            >
              About Me
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-300 leading-relaxed"
            >
              I'm a final year Engineering undergrad, a passionate Frontend Developer with a keen eye for design and a love for creating seamless user experiences. With expertise in modern web technologies, I bridge the gap between design and development.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <SkillCard 
                icon={<Code className="w-6 h-6" />}
                title="Development"
                description="Modern web technologies & frameworks"
              />
              <SkillCard 
                icon={<Palette className="w-6 h-6" />}
                title="Design"
                description="UI/UX design principles & tools"
              />
              <SkillCard 
                icon={<Brain className="w-6 h-6" />}
                title="Problem Solving"
                description="Analytical & creative solutions"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
  >
    <div className="text-purple-400 mb-2">{icon}</div>
    <h3 className="text-white font-semibold mb-1">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </motion.div>
);

export default About;