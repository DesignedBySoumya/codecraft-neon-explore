
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Zap, SlidersHorizontal, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SearchAndFilters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isFocused, setIsFocused] = useState(false);

  const filters = [
    { value: 'all', label: 'All Challenges', count: '2.5K+', color: 'neon-green' },
    { value: 'easy', label: 'Easy', count: '890', color: 'green-400' },
    { value: 'medium', label: 'Medium', count: '1.2K', color: 'yellow-400' },
    { value: 'hard', label: 'Hard', count: '410', color: 'red-400' },
    { value: 'new', label: 'New', count: '25', color: 'neon-blue' },
    { value: 'trending', label: 'Trending', count: '48', color: 'accent' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-2xl p-6 border border-neon-green/20 shadow-lg backdrop-blur-lg bg-gradient-to-r from-secondary/80 to-secondary/60"
    >
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        {/* Enhanced Search Bar - Full Pill Design */}
        <div className="relative flex-1 w-full group">
          <motion.div 
            className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: isFocused 
                ? 'linear-gradient(90deg, rgba(0, 255, 163, 0.3), rgba(77, 255, 223, 0.3))' 
                : 'linear-gradient(90deg, rgba(0, 255, 163, 0.2), rgba(77, 255, 223, 0.2))'
            }}
            animate={{
              scale: isFocused ? 1.02 : 1,
            }}
          />
          <div className="relative">
            <Search className={`absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
              isFocused ? 'text-neon-green' : 'text-muted-foreground'
            }`} />
            <motion.input
              type="text"
              placeholder="Search JavaScript challenges, data structures, or companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full pl-14 pr-6 py-4 bg-secondary/50 border border-border rounded-full text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-neon-green/50 focus:border-neon-green/50 transition-all backdrop-blur-sm font-medium"
              whileFocus={{ scale: 1.01 }}
            />
            {searchTerm && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
              >
                <Sparkles className="w-4 h-4 text-neon-green animate-pulse" />
              </motion.div>
            )}
          </div>
        </div>

        {/* Enhanced Filter Pills */}
        <div className="flex flex-wrap gap-2 lg:gap-3">
          {filters.map((filter, index) => (
            <motion.button
              key={filter.value}
              onClick={() => setSelectedFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-sm ${
                selectedFilter === filter.value
                  ? 'bg-neon-green text-black border-neon-green shadow-neon scale-105'
                  : 'bg-secondary/50 text-muted-foreground border-border hover:border-neon-green/50 hover:text-neon-green hover:bg-neon-green/10'
              }`}
              whileHover={{ scale: selectedFilter === filter.value ? 1.05 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <span>{filter.label}</span>
              <motion.span 
                className="ml-1 text-xs opacity-70"
                animate={{ opacity: selectedFilter === filter.value ? 1 : 0.7 }}
              >
                ({filter.count})
              </motion.span>
            </motion.button>
          ))}
        </div>

        {/* Enhanced Action Buttons */}
        <div className="flex gap-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-neon-green/30 hover:bg-neon-green/10 group backdrop-blur-sm"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-300" />
              Filters
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="btn-primary group shadow-neon hover:shadow-neon-strong">
              <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Surprise Me
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchAndFilters;
