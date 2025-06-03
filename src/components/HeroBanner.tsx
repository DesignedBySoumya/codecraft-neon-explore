
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, Play } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const HeroBanner = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-background/80">
      {/* Enhanced Fullscreen Spline 3D Background - Centered & Interactive */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Kw60oEZZK6nIYdUc/scene.splinecode"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            pointerEvents: 'auto',
            filter: 'brightness(1.2) contrast(1.1) saturate(1.2)',
            opacity: 0.95,
          }}
          className="spline-container"
        />
        
        {/* Sophisticated overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent pointer-events-none z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/25 via-transparent to-background/25 pointer-events-none z-0"></div>
        
        {/* Subtle blur overlay behind text areas */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 pointer-events-none z-0">
          <div className="w-full h-full bg-white/[0.02] backdrop-blur-[2px] rounded-3xl"></div>
        </div>
      </div>

      {/* Enhanced animated particles for extra visual appeal */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-green rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-40, 40, -40],
              x: [-15, 15, -15],
              opacity: [0.1, 0.6, 0.1],
              scale: [0.3, 1.5, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Content with enhanced z-index */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-neon-green/10 border border-neon-green/30 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
            <span className="text-neon-green text-sm font-medium">Join 50K+ Active Coders</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black mb-6 leading-tight">
            <span className="hero-text block">MASTER</span>
            <span className="hero-text block bg-gradient-to-r from-neon-green via-neon-blue to-neon-green bg-clip-text text-transparent">
              ALGORITHMS
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Dive into the <span className="text-neon-green font-semibold">neon-powered</span> coding universe. 
            Solve challenges, level up your skills, and join the elite.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button 
              className="btn-primary text-lg px-8 py-4 group relative overflow-hidden"
              size="lg"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-green/20 to-neon-blue/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center">
                Start Coding Now
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button 
              variant="outline"
              className="text-lg px-8 py-4 border-neon-green/30 hover:bg-neon-green/10 group"
              size="lg"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { label: "Active Coders", value: "50K+", icon: "👨‍💻" },
              { label: "Challenges", value: "2.5K+", icon: "🎯" },
              { label: "Success Rate", value: "94%", icon: "🚀" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-orbitron font-bold text-neon-green mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 pointer-events-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neon-green/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neon-green rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroBanner;
