import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  const balloons = [
    { color: 'bg-red-400', left: '10%', delay: 0 },
    { color: 'bg-blue-400', left: '30%', delay: 2 },
    { color: 'bg-yellow-400', left: '50%', delay: 4 },
    { color: 'bg-purple-400', left: '70%', delay: 1 },
    { color: 'bg-pink-400', left: '90%', delay: 3 },
    { color: 'bg-green-400', left: '20%', delay: 5 },
    { color: 'bg-orange-400', left: '80%', delay: 6 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Balloons */}
      {balloons.map((balloon, index) => (
        <motion.div
          key={index}
          className={`absolute bottom-[-100px] w-16 h-20 rounded-full ${balloon.color} opacity-80`}
          style={{ left: balloon.left }}
          initial={{ y: 0 }}
          animate={{ y: -1000 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: balloon.delay,
            ease: 'linear',
          }}
        >
          {/* Balloon string */}
          <div className="absolute bottom-[-20px] left-1/2 w-0.5 h-6 bg-gray-400 -translate-x-1/2"></div>
        </motion.div>
      ))}

      {/* Twinkling Stars */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute bg-white rounded-full"
          style={{
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundEffects;
