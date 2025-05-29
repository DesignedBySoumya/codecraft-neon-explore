
import React from 'react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import TopicGrid from '../components/TopicGrid';
import TrendingCarousel from '../components/TrendingCarousel';
import CompanyZone from '../components/CompanyZone';
import WeeklyPick from '../components/WeeklyPick';
import LiveFeed from '../components/LiveFeed';
import Leaderboard from '../components/Leaderboard';

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <HeroBanner />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 space-y-16 pb-16">
        {/* Topics to Explore */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-center">
            <span className="hero-text">Topics to Explore</span>
          </h2>
          <TopicGrid />
        </motion.section>

        {/* Trending Challenges */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-center">
            <span className="hero-text">Trending Challenges</span>
          </h2>
          <TrendingCarousel />
        </motion.section>

        {/* Company Challenges */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-center">
            <span className="hero-text">Company Challenges</span>
          </h2>
          <CompanyZone />
        </motion.section>

        {/* Weekly Pick */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-center">
            <span className="hero-text">Weekly Pick</span>
          </h2>
          <WeeklyPick />
        </motion.section>

        {/* Live Feed & Leaderboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-orbitron font-bold mb-6">
              <span className="hero-text">Live Solving</span>
            </h2>
            <LiveFeed />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-orbitron font-bold mb-6">
              <span className="hero-text">Leaderboard</span>
            </h2>
            <Leaderboard />
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
