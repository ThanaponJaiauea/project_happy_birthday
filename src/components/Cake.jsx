import React from 'react';
import { motion } from 'framer-motion';

const Cake = ({ onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
      className="relative cursor-pointer py-16 mb-8"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative mx-auto w-40">
        {/* Flames */}
        <div className="absolute -top-12 left-0 right-0 flex justify-center gap-6">
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [-5, 5, -5] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="w-4 h-8 bg-yellow-400 rounded-full blur-[2px] border-2 border-orange-300"
            />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-1 h-4 bg-gray-400" />
          </div>
          <div className="relative">
            <motion.div
              animate={{ scale: [1.1, 1, 1.1], rotate: [5, -5, 5] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }}
              className="w-4 h-8 bg-yellow-400 rounded-full blur-[2px] border-2 border-orange-300"
            />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-1 h-4 bg-gray-400" />
          </div>
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [-2, 2, -2] }}
              transition={{ duration: 0.4, repeat: Infinity, delay: 0.2 }}
              className="w-4 h-8 bg-yellow-400 rounded-full blur-[2px] border-2 border-orange-300"
            />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-1 h-4 bg-gray-400" />
          </div>
        </div>

        {/* Cake Layers */}
        <div className="absolute top-0 w-40 h-24 bg-pink-100 rounded-t-full border-b-8 border-pink-200" />
        <div className="absolute top-10 w-40 h-24 bg-pink-200 rounded-full border-b-8 border-pink-300" />
        <div className="absolute top-20 w-40 h-12 bg-pink-300 rounded-b-3xl" />
        <div className="absolute top-[90px] w-40 h-12 text-lg font-bold text-white drop-shadow-md font-serif">
          Click here
        </div>

        {/* Frosting drips */}
        <div className="absolute top-10 flex w-full justify-around">
          <div className="w-6 h-8 bg-pink-100 rounded-b-full" />
          <div className="w-6 h-6 bg-pink-100 rounded-b-full" />
          <div className="w-6 h-9 bg-pink-100 rounded-b-full" />
          <div className="w-6 h-7 bg-pink-100 rounded-b-full" />
        </div>
      </div>
    </motion.div>
  );
};

export default Cake;
