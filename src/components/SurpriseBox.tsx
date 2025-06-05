import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shuffle, Sparkles } from 'lucide-react';
const SurpriseBox = () => {
  const [isShimmering, setIsShimmering] = useState(false);
  const handleLuckyClick = () => {
    setIsShimmering(true);
    setTimeout(() => setIsShimmering(false), 2000);
    // Here you would typically fetch a random challenge
    console.log('Getting a random challenge...');
  };
  return <div className="flex justify-center">
      <motion.div className="relative group" whileHover={{
      scale: 1.05
    }}>
        
      </motion.div>
    </div>;
};
export default SurpriseBox;