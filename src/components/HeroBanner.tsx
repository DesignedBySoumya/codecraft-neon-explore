
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, Code, Trophy, Users } from 'lucide-react';

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-orbitron font-black mb-4">
            <span className="hero-text">Solve & Level Up</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Master coding challenges, practice algorithms, and prepare for technical interviews
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button className="btn-primary text-lg px-8 py-3 group">
            Start Solving
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="border-neon-green/30 text-neon-green hover:bg-neon-green/10 text-lg px-8 py-3">
            View Problems
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { icon: Users, label: "Developers", value: "50K+" },
            { icon: Code, label: "Problems", value: "2.5K+" },
            { icon: Trophy, label: "Companies", value: "100+" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2">
                <stat.icon className="w-6 h-6 text-neon-green" />
              </div>
              <div className="text-2xl font-orbitron font-bold text-neon-green mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;
