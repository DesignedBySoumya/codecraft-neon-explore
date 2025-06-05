
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CommunityCtaBlock = () => {
  const communities = [
    {
      platform: 'Discord',
      icon: '💬',
      members: '10,000+',
      description: 'Chat with developers, get help, and share solutions',
      link: '#'
    },
    {
      platform: 'Telegram',
      icon: '📱',
      members: '5,000+',
      description: 'Quick discussions and daily coding tips',
      link: '#'
    },
    {
      platform: 'Reddit',
      icon: '🗣️',
      members: '15,000+',
      description: 'Deep discussions and community challenges',
      link: '#'
    }
  ];

  return (
    <motion.div
      className="glass-card rounded-2xl p-8 md:p-12 border border-neon-green/20 backdrop-blur-lg bg-gradient-to-r from-neon-green/5 via-transparent to-neon-blue/5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-8">
        <motion.div
          className="inline-flex items-center gap-3 mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Users className="w-8 h-8 text-neon-green" />
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold">
            <span className="hero-text">Join Our Community</span>
          </h2>
        </motion.div>
        
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Connect with fellow developers, share solutions, and grow together in our vibrant coding community
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {communities.map((community, index) => (
          <motion.div
            key={community.platform}
            className="bg-secondary/30 rounded-xl p-6 border border-border hover:border-neon-green/50 transition-all duration-300 group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center">
              <div className="text-4xl mb-3">{community.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{community.platform}</h3>
              <div className="flex items-center justify-center gap-2 mb-3">
                <Users className="w-4 h-4 text-neon-green" />
                <span className="text-neon-green font-semibold">{community.members} members</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{community.description}</p>
              
              <Button
                className="btn-primary w-full group-hover:shadow-neon-strong"
                onClick={() => window.open(community.link, '_blank')}
              >
                <span className="flex items-center gap-2">
                  Join {community.platform}
                  <ExternalLink className="w-4 h-4" />
                </span>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-sm text-muted-foreground">
          Already part of our community? 
          <span className="text-neon-green ml-1 cursor-pointer hover:underline">
            Share your referral link
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default CommunityCtaBlock;
