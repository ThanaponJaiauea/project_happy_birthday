import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import img1 from '../assets/images/image1.jfif';
import img3 from '../assets/images/image3.jfif';

const images = [img1, img3];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-video max-w-sm mx-auto overflow-hidden rounded-xl shadow-lg border-4 border-white">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Memory ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Dots indicator */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
