
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shuffle, Sparkles } from 'lucide-react';

const SurpriseBox = () => {
  const [isShimmering, setIsShimmering] = useState(false);

  const handleLuckyClick = () => {
    setIsShimmering(true);
    setTimeout(() => setIsShimmering(false), 2000);
    // Here you would typically fetch a random challenge
    console.log('Getting a random challenge...');
  };

  return (
    <div className="flex justify-center">
      <motion.div
        className="relative group"
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          className={`glass-card rounded-xl p-8 text-center border-2 transition-all duration-300 ${
            isShimmering 
              ? 'border-neon-green bg-neon-green/10' 
              : 'border-border group-hover:border-neon-green/50'
          }`}
          animate={isShimmering ? {
            boxShadow: [
              '0 0 20px rgba(0, 255, 163, 0.3)',
              '0 0 40px rgba(0, 255, 163, 0.6)',
              '0 0 20px rgba(0, 255, 163, 0.3)'
            ]
          } : {}}
          transition={{ duration: 0.5, repeat: isShimmering ? Infinity : 0 }}
        >
          {/* Shimmer overlay */}
          {isShimmering && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}

          <div className="relative z-10">
            <motion.div
              className="text-6xl mb-4"
              animate={isShimmering ? { rotate: [0, 10, -10, 0] } : {}}
              transition={{ duration: 0.5, repeat: isShimmering ? Infinity : 0 }}
            >
              🎲
            </motion.div>
            
            <h3 className="text-xl font-orbitron font-bold text-foreground mb-2">
              Feeling Lucky?
            </h3>
            
            <p className="text-muted-foreground mb-6 max-w-sm">
              Let us pick a random challenge for you based on your skill level and interests!
            </p>

            <motion.button
              onClick={handleLuckyClick}
              disabled={isShimmering}
              className="btn-primary group disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isShimmering ? (
                <>
                  <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                  Finding Challenge...
                </>
              ) : (
                <>
                  <Shuffle className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Surprise Me!
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SurpriseBox;
