
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SearchAndFilters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        {/* Search Bar */}
        <div className="relative flex-1 w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input
            type="text"
            placeholder="Search problems..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent transition-all"
          />
        </div>

        {/* Difficulty Filter */}
        <div className="flex gap-2">
          {difficulties.map((difficulty) => (
            <button
              key={difficulty}
              onClick={() => setSelectedDifficulty(difficulty.toLowerCase())}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedDifficulty === difficulty.toLowerCase()
                  ? 'bg-neon-green text-black'
                  : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
              }`}
            >
              {difficulty}
            </button>
          ))}
        </div>

        {/* Random Problem Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="bg-neon-green text-black hover:bg-neon-green/90 whitespace-nowrap group">
            <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" />
            Random Problem
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default SearchAndFilters;
