
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import SearchAndFilters from '../components/SearchAndFilters';
import FeaturedChallenge from '../components/FeaturedChallenge';
import TopicGrid from '../components/TopicGrid';
import TrendingCarousel from '../components/TrendingCarousel';
import FloatingChallengeCard from '../components/FloatingChallengeCard';
import CodePreviewPanel from '../components/CodePreviewPanel';
import CodeRainBackground from '../components/CodeRainBackground';

const Index = () => {
  const [isCodePanelOpen, setIsCodePanelOpen] = useState(false);

  // Sample challenges data
  const popularChallenges = [
    {
      id: '1',
      title: 'Two Sum',
      difficulty: 'easy' as const,
      xp: 50,
      timeEstimate: '15 min',
      solvedBy: 15420,
      tags: ['array', 'hash-table']
    },
    {
      id: '2',
      title: 'Merge Intervals',
      difficulty: 'medium' as const,
      xp: 120,
      timeEstimate: '30 min',
      solvedBy: 8340,
      tags: ['array', 'sorting']
    },
    {
      id: '3',
      title: 'Word Ladder',
      difficulty: 'hard' as const,
      xp: 200,
      timeEstimate: '45 min',
      solvedBy: 3210,
      tags: ['bfs', 'string']
    }
  ];

  return (
    <>
      <CodeRainBackground />
      
      <motion.div 
        className="min-h-screen bg-background relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Simplified Hero Section */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="pt-8 pb-12"
        >
          <HeroBanner />
        </motion.section>
        
        {/* Main Content Container */}
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Search Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <SearchAndFilters />
          </motion.section>

          {/* Featured Challenge - More Prominent */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <FeaturedChallenge />
          </motion.section>

          {/* Popular Challenges Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-orbitron font-bold">
                <span className="hero-text">Popular Challenges</span>
              </h2>
              <button className="text-neon-green hover:text-neon-blue transition-colors text-sm font-medium">
                View All →
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularChallenges.map((challenge) => (
                <FloatingChallengeCard
                  key={challenge.id}
                  challenge={challenge}
                  onPreview={() => setIsCodePanelOpen(true)}
                />
              ))}
            </div>
          </motion.section>

          {/* Topics Section - Simplified */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-orbitron font-bold">
                <span className="hero-text">Explore Topics</span>
              </h2>
            </div>
            <TopicGrid />
          </motion.section>

          {/* Trending Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-orbitron font-bold">
                <span className="hero-text">Trending This Week</span>
              </h2>
            </div>
            <TrendingCarousel />
          </motion.section>
        </div>

        {/* Code Preview Panel */}
        <CodePreviewPanel
          isOpen={isCodePanelOpen}
          onClose={() => setIsCodePanelOpen(false)}
        />
      </motion.div>
    </>
  );
};

export default Index;
