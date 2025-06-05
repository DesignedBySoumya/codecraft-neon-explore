
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, Award, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedChallenge = () => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-neon-green/20 via-neon-blue/20 to-neon-green/20 border border-neon-green/30 p-8 backdrop-blur-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.01 }}
    >
      {/* Animated border pulse */}
      <motion.div
        className="absolute inset-0 border-2 rounded-2xl opacity-50"
        animate={{
          borderColor: [
            'rgba(0, 255, 163, 0.5)', 
            'rgba(77, 255, 223, 0.8)', 
            'rgba(0, 255, 163, 0.5)'
          ],
          boxShadow: [
            '0 0 20px rgba(0, 255, 163, 0.3)',
            '0 0 40px rgba(77, 255, 223, 0.5)',
            '0 0 20px rgba(0, 255, 163, 0.3)'
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-green/10 to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <motion.span 
                className="bg-neon-gradient text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-4 h-4" />
                🔥 FEATURED
              </motion.span>
              <span className="difficulty-medium px-3 py-1 rounded-full text-xs font-bold border">
                Medium
              </span>
              <motion.div 
                className="flex items-center gap-1 bg-red-500/20 border border-red-500/30 px-2 py-1 rounded-full"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className="text-red-400 text-xs font-bold">🔥 TRENDING</span>
              </motion.div>
            </div>
            
            <motion.h3 
              className="text-2xl md:text-3xl font-orbitron font-bold text-foreground mb-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Binary Tree Maximum Path Sum
            </motion.h3>
            
            <motion.p 
              className="text-muted-foreground mb-6 max-w-2xl text-lg leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              A challenging tree problem that tests your understanding of recursion and dynamic programming. 
              Perfect for preparing for top tech interviews at <span className="text-neon-green font-semibold">FAANG companies</span>.
            </motion.p>

            <div className="flex items-center gap-6 mb-6 flex-wrap">
              <motion.div 
                className="flex items-center gap-2 bg-neon-green/20 px-4 py-2 rounded-full border border-neon-green/30"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="w-5 h-5 text-neon-green" />
                <span className="text-neon-green font-bold text-lg">+150 XP</span>
              </motion.div>
              <div className="flex items-center gap-2 bg-secondary/50 px-3 py-2 rounded-full">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span className="text-foreground font-medium">~45 min</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/50 px-3 py-2 rounded-full">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-muted-foreground font-medium">12.4K solved</span>
              </div>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-6"
          >
            <Button className="btn-primary text-lg px-8 py-4 group shadow-neon hover:shadow-neon-strong">
              <span className="flex items-center gap-2">
                Start Challenge
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedChallenge;
