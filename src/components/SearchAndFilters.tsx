
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Zap, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SearchAndFilters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { value: 'all', label: 'All Challenges', count: '2.5K+' },
    { value: 'easy', label: 'Easy', count: '890' },
    { value: 'medium', label: 'Medium', count: '1.2K' },
    { value: 'hard', label: 'Hard', count: '410' },
    { value: 'new', label: 'New', count: '25' },
    { value: 'trending', label: 'Trending', count: '48' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-2xl p-6 border border-neon-green/20 shadow-lg"
    >
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        {/* Enhanced Search Bar */}
        <div className="relative flex-1 w-full group">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-green/20 to-neon-blue/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 transition-colors group-focus-within:text-neon-green" />
            <input
              type="text"
              placeholder="Search algorithms, data structures, or companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-secondary/50 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-neon-green/50 focus:border-neon-green/50 transition-all backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 lg:gap-3">
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setSelectedFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                selectedFilter === filter.value
                  ? 'bg-neon-green text-black border-neon-green shadow-neon'
                  : 'bg-secondary/50 text-muted-foreground border-border hover:border-neon-green/50 hover:text-neon-green'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{filter.label}</span>
              <span className="ml-1 text-xs opacity-70">({filter.count})</span>
            </motion.button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-neon-green/30 hover:bg-neon-green/10 group"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-300" />
              Filters
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="btn-primary group">
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
