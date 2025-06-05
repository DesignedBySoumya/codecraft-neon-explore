
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Award, Users, Eye, Flame, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FloatingChallengeCardProps {
  challenge: {
    id: string;
    title: string;
    difficulty: 'easy' | 'medium' | 'hard';
    xp: number;
    timeEstimate: string;
    solvedBy: number;
    tags: string[];
  };
  onPreview: () => void;
}

const FloatingChallengeCard = ({ challenge, onPreview }: FloatingChallengeCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getDifficultyClass = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'difficulty-easy';
      case 'medium': return 'difficulty-medium';
      case 'hard': return 'difficulty-hard';
      default: return 'difficulty-easy';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'hard': return 'text-red-400 bg-red-500/20 border-red-500/30';
      default: return 'text-green-400 bg-green-500/20 border-green-500/30';
    }
  };

  const isHighXP = challenge.xp >= 150;
  const isPopular = challenge.solvedBy > 10000;

  return (
    <motion.div
      className="challenge-card group cursor-pointer relative overflow-hidden backdrop-blur-lg"
      whileHover={{ 
        scale: 1.03, 
        y: -8,
        rotateY: 2
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Corner Tags */}
      <div className="absolute top-0 right-0 z-20">
        {isHighXP && (
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-neon-green to-neon-blue text-black px-2 py-1 rounded-bl-lg text-xs font-bold flex items-center gap-1"
          >
            <Star className="w-3 h-3" />
            High XP
          </motion.div>
        )}
        {isPopular && !isHighXP && (
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-bl-lg text-xs font-bold flex items-center gap-1"
          >
            <Flame className="w-3 h-3" />
            Hot
          </motion.div>
        )}
      </div>

      {/* Enhanced glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-green/20 via-neon-blue/20 to-neon-green/20 blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Animated border gradient */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(45deg, transparent, rgba(0, 255, 163, 0.1), transparent, rgba(77, 255, 223, 0.1), transparent)',
          backgroundSize: '400% 400%',
        }}
        animate={{
          backgroundPosition: isHovered ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%',
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />

      <div className="relative z-10 p-6">
        {/* Header with improved spacing */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <motion.h3 
              className="text-lg font-semibold text-foreground mb-3 group-hover:text-neon-green transition-colors line-clamp-2"
              animate={{ color: isHovered ? '#00FFA3' : '#FFFFFF' }}
            >
              {challenge.title}
            </motion.h3>
            <div className="flex items-center gap-3 flex-wrap">
              <motion.span 
                className={`${getDifficultyColor(challenge.difficulty)} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide`}
                whileHover={{ scale: 1.05 }}
              >
                {challenge.difficulty}
              </motion.span>
              <div className="flex items-center gap-1 text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-full">
                <Users className="w-3 h-3" />
                {challenge.solvedBy.toLocaleString()} solved
              </div>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onPreview();
              }}
              className="text-muted-foreground hover:text-neon-green hover:bg-neon-green/10 rounded-full p-2"
            >
              <Eye className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        {/* Enhanced Stats Row */}
        <div className="flex items-center gap-4 mb-4">
          <motion.div 
            className="flex items-center gap-1 bg-neon-green/20 px-3 py-1 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <Award className="w-4 h-4 text-neon-green" />
            <span className="text-neon-green font-bold text-sm">+{challenge.xp} XP</span>
          </motion.div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>~{challenge.timeEstimate}</span>
          </div>
        </div>

        {/* Enhanced Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {challenge.tags.slice(0, 3).map((tag, index) => (
            <motion.span
              key={tag}
              className="px-3 py-1 bg-secondary/50 text-xs rounded-full text-muted-foreground border border-border backdrop-blur-sm hover:border-neon-green/50 hover:text-neon-green transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              #{tag}
            </motion.span>
          ))}
          {challenge.tags.length > 3 && (
            <span className="px-3 py-1 bg-secondary/30 text-xs rounded-full text-muted-foreground border border-border/50">
              +{challenge.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Enhanced Action Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button className="w-full btn-primary group relative overflow-hidden shadow-lg hover:shadow-neon">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: isHovered ? '100%' : '-100%' }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10 flex items-center justify-center font-semibold">
              <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Start Challenge
              <motion.div
                className="ml-2"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.div>
            </span>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FloatingChallengeCard;
