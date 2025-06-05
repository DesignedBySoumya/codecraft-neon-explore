
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StillNotSureBlock = () => {
  return (
    <motion.div
      className="glass-card rounded-2xl p-8 md:p-12 border border-neon-green/20 backdrop-blur-lg text-center relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-neon-green/10 via-neon-blue/10 to-neon-green/10"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10">
        <motion.div
          className="inline-flex items-center justify-center w-20 h-20 bg-neon-gradient rounded-full mb-6"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.1, rotate: 15 }}
        >
          <Brain className="w-10 h-10 text-black" />
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-orbitron font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="hero-text">Still Not Sure Where to Start?</span>
        </motion.h2>

        <motion.p
          className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          We'll help you pick the perfect challenge based on your current skills and learning goals. 
          Our AI-powered assessment takes just 5 minutes!
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button 
            className="btn-primary text-lg px-8 py-4 group shadow-neon hover:shadow-neon-strong"
            size="lg"
          >
            <Target className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Take Skill Assessment
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          <span className="text-muted-foreground">or</span>

          <Button 
            variant="outline" 
            className="border-neon-green/30 hover:bg-neon-green/10 text-lg px-8 py-4 group"
            size="lg"
          >
            <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Browse by Skill Level
          </Button>
        </motion.div>

        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {[
            { icon: '🎯', text: 'Personalized path', desc: 'Based on your goals' },
            { icon: '⚡', text: 'Quick start', desc: 'Jump right into coding' },
            { icon: '📈', text: 'Track progress', desc: 'See your improvement' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-secondary/30 rounded-lg p-4 border border-border"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl mb-2">{feature.icon}</div>
              <h4 className="font-semibold text-foreground text-sm">{feature.text}</h4>
              <p className="text-xs text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StillNotSureBlock;
