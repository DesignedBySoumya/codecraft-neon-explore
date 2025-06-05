
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Hash, Sparkles } from 'lucide-react';

const tags = [
  { name: 'binary-search', count: 156, color: 'neon-green', popularity: 'high' },
  { name: 'dynamic-programming', count: 89, color: 'neon-blue', popularity: 'high' },
  { name: 'dfs', count: 234, color: 'accent', popularity: 'high' },
  { name: 'graph', count: 178, color: 'neon-green', popularity: 'medium' },
  { name: 'recursion', count: 145, color: 'neon-blue', popularity: 'medium' },
  { name: 'sliding-window', count: 92, color: 'accent', popularity: 'medium' },
  { name: 'heap', count: 67, color: 'neon-green', popularity: 'low' },
  { name: 'greedy', count: 123, color: 'neon-blue', popularity: 'medium' },
  { name: 'backtracking', count: 78, color: 'accent', popularity: 'low' },
  { name: 'two-pointers', count: 134, color: 'neon-green', popularity: 'medium' }
];

const TagExplorer = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const getTagStyle = (tag: any) => {
    const baseStyle = "pill-shaped px-4 py-3 rounded-full border transition-all duration-300 whitespace-nowrap backdrop-blur-sm font-medium relative overflow-hidden";
    
    if (selectedTag === tag.name) {
      return `${baseStyle} bg-neon-green text-black border-neon-green shadow-neon scale-105`;
    }
    
    return `${baseStyle} bg-secondary/50 border-border text-foreground hover:border-neon-green/50 hover:bg-neon-green/10 hover:text-neon-green hover:scale-105`;
  };

  const getPopularityBadge = (popularity: string) => {
    switch (popularity) {
      case 'high':
        return (
          <motion.div
            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🔥
          </motion.div>
        );
      case 'medium':
        return (
          <div className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs px-1 py-0.5 rounded-full">
            ⭐
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-4 min-w-max">
          {tags.map((tag, index) => (
            <motion.button
              key={tag.name}
              onClick={() => setSelectedTag(selectedTag === tag.name ? null : tag.name)}
              className={getTagStyle(tag)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: selectedTag === tag.name ? '100%' : '-100%' }}
                transition={{ duration: 0.8 }}
              />
              
              <div className="relative z-10 flex items-center gap-2">
                <Hash className="w-4 h-4" />
                <span className="text-sm font-semibold">
                  {tag.name}
                </span>
                <span className="text-xs opacity-75 bg-black/20 px-2 py-0.5 rounded-full">
                  {tag.count}
                </span>
              </div>
              
              {getPopularityBadge(tag.popularity)}
              
              {selectedTag === tag.name && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-neon-green/20"
                  layoutId="tagGlow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {selectedTag && (
        <motion.div
          initial={{ opacity: 0, height: 0, y: -20 }}
          animate={{ opacity: 1, height: 'auto', y: 0 }}
          exit={{ opacity: 0, height: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="glass-card rounded-xl p-6 border border-neon-green/30 backdrop-blur-lg bg-gradient-to-r from-secondary/80 to-secondary/60"
        >
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-5 h-5 text-neon-green" />
            <h3 className="text-lg font-semibold text-neon-green">
              Exploring: #{selectedTag}
            </h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Showing <span className="text-neon-green font-semibold">{tags.find(t => t.name === selectedTag)?.count}</span> challenges 
            tagged with <span className="text-neon-green font-semibold">#{selectedTag}</span>. 
            These problems will help you master this concept through practical application.
          </p>
          
          <motion.div 
            className="mt-4 flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <button className="bg-neon-green text-black px-4 py-2 rounded-lg font-semibold hover:bg-neon-blue transition-colors">
              View Challenges
            </button>
            <button className="border border-neon-green/50 text-neon-green px-4 py-2 rounded-lg hover:bg-neon-green/10 transition-colors">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default TagExplorer;
