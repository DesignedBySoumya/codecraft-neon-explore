
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Award } from 'lucide-react';

const topics = [
  { name: 'Arrays & Strings', icon: '🔢', count: 598, progress: 65, difficulty: 'Mixed', trending: true },
  { name: 'Trees & Graphs', icon: '🌳', count: 356, progress: 45, difficulty: 'Hard', trending: false },
  { name: 'Dynamic Programming', icon: '⚡', count: 145, progress: 23, difficulty: 'Hard', trending: true },
  { name: 'Sorting & Searching', icon: '🔍', count: 257, progress: 89, difficulty: 'Easy', trending: false },
  { name: 'Linked Lists', icon: '🔗', count: 98, progress: 54, difficulty: 'Medium', trending: false },
  { name: 'Hash Tables', icon: '🗂️', count: 87, progress: 43, difficulty: 'Medium', trending: true },
  { name: 'Stacks & Queues', icon: '📚', count: 76, progress: 71, difficulty: 'Easy', trending: false },
  { name: 'System Design', icon: '🏗️', count: 45, progress: 12, difficulty: 'Hard', trending: true }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Easy': return 'text-green-400';
    case 'Medium': return 'text-yellow-400';
    case 'Hard': return 'text-red-400';
    default: return 'text-blue-400';
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          {/* Card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-secondary/80 to-secondary/40 backdrop-blur-sm border border-border rounded-2xl p-6 cursor-pointer transition-all duration-300 group-hover:border-neon-green/50 group-hover:shadow-card-hover">
            
            {/* Trending Badge */}
            {topic.trending && (
              <div className="absolute top-3 right-3">
                <div className="flex items-center gap-1 bg-neon-green/20 border border-neon-green/40 rounded-full px-2 py-1">
                  <TrendingUp className="w-3 h-3 text-neon-green" />
                  <span className="text-xs text-neon-green font-medium">Hot</span>
                </div>
              </div>
            )}

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              {/* Icon */}
              <motion.div 
                className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {topic.icon}
              </motion.div>

              {/* Title */}
              <h3 className="font-orbitron font-bold text-lg mb-2 text-foreground group-hover:text-neon-green transition-colors">
                {topic.name}
              </h3>

              {/* Stats */}
              <div className="flex items-center justify-between mb-4 text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <span>{topic.count} problems</span>
                </div>
                <div className={`font-medium ${getDifficultyColor(topic.difficulty)}`}>
                  {topic.difficulty}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-muted-foreground">Progress</span>
                  <span className="text-xs font-medium text-neon-green">{topic.progress}%</span>
                </div>
                <div className="progress-bar h-2">
                  <motion.div 
                    className="progress-fill h-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${topic.progress}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                  />
                </div>
              </div>

              {/* Action Area */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>~{Math.floor(topic.count / 10)} hrs</span>
                </div>
                <motion.button
                  className="text-xs font-medium text-neon-green hover:text-neon-blue transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start →
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
