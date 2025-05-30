
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const topics = [
  { name: 'Arrays & Hashing', icon: '🔢', count: 342, difficulty: 'Beginner' },
  { name: 'Two Pointers', icon: '👉', count: 156, difficulty: 'Beginner' },
  { name: 'Sliding Window', icon: '🪟', count: 89, difficulty: 'Medium' },
  { name: 'Stack', icon: '📚', count: 123, difficulty: 'Beginner' },
  { name: 'Binary Search', icon: '🔍', count: 167, difficulty: 'Medium' },
  { name: 'Linked List', icon: '🔗', count: 98, difficulty: 'Beginner' },
  { name: 'Trees', icon: '🌳', count: 189, difficulty: 'Medium' },
  { name: 'Tries', icon: '🌿', count: 45, difficulty: 'Hard' },
  { name: 'Heap / Priority Queue', icon: '⛰️', count: 76, difficulty: 'Medium' },
  { name: 'Backtracking', icon: '🔄', count: 87, difficulty: 'Hard' },
  { name: 'Graphs', icon: '🕸️', count: 134, difficulty: 'Hard' },
  { name: 'Dynamic Programming', icon: '⚡', count: 145, difficulty: 'Hard' }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner': return 'text-green-400';
    case 'Medium': return 'text-yellow-400';
    case 'Hard': return 'text-red-400';
    default: return 'text-gray-400';
  }
};

const TopicGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {topics.map((topic, index) => (
        <motion.div
          key={topic.name}
          className="group bg-card border border-border rounded-lg p-4 cursor-pointer transition-all duration-300 hover:border-neon-green/50 hover:shadow-card-hover"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
              {topic.icon}
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-neon-green transition-colors" />
          </div>
          
          <h3 className="font-semibold text-foreground mb-2 group-hover:text-neon-green transition-colors">
            {topic.name}
          </h3>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {topic.count} problems
            </span>
            <span className={`text-xs font-medium ${getDifficultyColor(topic.difficulty)}`}>
              {topic.difficulty}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TopicGrid;
