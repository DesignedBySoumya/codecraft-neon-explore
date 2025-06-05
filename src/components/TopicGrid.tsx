
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Award, ArrowRight, Zap } from 'lucide-react';

const topics = [
  { name: 'Arrays & Strings', icon: '🔢', count: 598, progress: 65, difficulty: 'Mixed', trending: true, gradient: 'from-neon-green/20 to-neon-blue/20' },
  { name: 'Trees & Graphs', icon: '🌳', count: 356, progress: 45, difficulty: 'Hard', trending: false, gradient: 'from-green-500/20 to-emerald-500/20' },
  { name: 'Dynamic Programming', icon: '⚡', count: 145, progress: 23, difficulty: 'Hard', trending: true, gradient: 'from-purple-500/20 to-pink-500/20' },
  { name: 'Sorting & Searching', icon: '🔍', count: 257, progress: 89, difficulty: 'Easy', trending: false, gradient: 'from-blue-500/20 to-cyan-500/20' },
  { name: 'Linked Lists', icon: '🔗', count: 98, progress: 54, difficulty: 'Medium', trending: false, gradient: 'from-orange-500/20 to-red-500/20' },
  { name: 'Hash Tables', icon: '🗂️', count: 87, progress: 43, difficulty: 'Medium', trending: true, gradient: 'from-yellow-500/20 to-orange-500/20' },
  { name: 'Stacks & Queues', icon: '📚', count: 76, progress: 71, difficulty: 'Easy', trending: false, gradient: 'from-indigo-500/20 to-purple-500/20' },
  { name: 'System Design', icon: '🏗️', count: 45, progress: 12, difficulty: 'Hard', trending: true, gradient: 'from-red-500/20 to-pink-500/20' }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Easy': return 'text-green-400 bg-green-500/20 border-green-500/30';
    case 'Medium': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
    case 'Hard': return 'text-red-400 bg-red-500/20 border-red-500/30';
    default: return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
  }
};

const TopicGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {topics.map((topic, index) => (
        <motion.div
          key={topic.name}
          className="group relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.03, y: -8 }}
        >
          {/* Enhanced Card with gradient background */}
          <div className={`relative overflow-hidden bg-gradient-to-br ${topic.gradient} backdrop-blur-sm border border-border/50 rounded-2xl p-6 cursor-pointer transition-all duration-300 group-hover:border-neon-green/50 group-hover:shadow-card-hover`}>
            
            {/* Trending Badge */}
            {topic.trending && (
              <motion.div 
                className="absolute top-3 right-3"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
              >
                <div className="flex items-center gap-1 bg-gradient-to-r from-red-500/80 to-orange-500/80 border border-red-400/50 rounded-full px-2 py-1 backdrop-blur-sm">
                  <TrendingUp className="w-3 h-3 text-white" />
                  <span className="text-xs text-white font-bold">HOT</span>
                </div>
              </motion.div>
            )}

            {/* Animated hover background */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-neon-green/10 via-neon-blue/10 to-neon-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundSize: '200% 200%' }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="relative z-10">
              {/* Enhanced Icon */}
              <motion.div 
                className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ 
                  rotate: [0, -10, 10, -5, 5, 0],
                  scale: 1.2
                }}
                transition={{ duration: 0.5 }}
              >
                {topic.icon}
              </motion.div>

              {/* Title */}
              <h3 className="font-orbitron font-bold text-lg mb-3 text-foreground group-hover:text-neon-green transition-colors">
                {topic.name}
              </h3>

              {/* Enhanced Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <span className="font-medium">{topic.count}</span>
                  <span>problems</span>
                </div>
                <motion.div 
                  className={`px-2 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(topic.difficulty)}`}
                  whileHover={{ scale: 1.05 }}
                >
                  {topic.difficulty}
                </motion.div>
              </div>

              {/* Enhanced Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-muted-foreground font-medium">Progress</span>
                  <span className="text-xs font-bold text-neon-green">{topic.progress}%</span>
                </div>
                <div className="progress-bar h-3 bg-secondary/60 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-neon-green to-neon-blue rounded-full shadow-glow"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${topic.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Enhanced Action Area */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>~{Math.floor(topic.count / 10)} hrs</span>
                </div>
                <motion.button
                  className="flex items-center gap-1 text-xs font-bold text-neon-green hover:text-neon-blue transition-colors bg-neon-green/10 hover:bg-neon-blue/10 px-3 py-1 rounded-full border border-neon-green/30 hover:border-neon-blue/30"
                  whileHover={{ scale: 1.05, x: 3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start</span>
                  <ArrowRight className="w-3 h-3" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TopicGrid;
