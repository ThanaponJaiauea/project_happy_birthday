import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Star, Sparkles } from 'lucide-react';
import hbdSound from '../assets/video/HBD.mp3';
import ImageGallery from './ImageGallery';

const BirthdayCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = React.useRef(new Audio(hbdSound));

  const handleOpen = () => {
    setIsOpen(true);
    triggerConfetti();
    audioRef.current.loop = true;
    audioRef.current
      .play()
      .catch((error) => console.log('Audio play failed:', error));
  };

  const triggerConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FFD700', '#FFF'],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FFD700', '#FFF'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  };

  return (
    <div className="relative z-10 flex text-center justify-center w-full max-w-md p-6">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="closed"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/30 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/50 cursor-pointer flex flex-col items-center gap-6"
            onClick={handleOpen}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Heart className="text-pink-500 w-24 h-24 fill-current" />
            </motion.div>
            <h1 className="text-4xl font-bold text-white drop-shadow-md font-serif">
              For Pornthip
            </h1>
            <p className="text-pink-400/90 text-lg">
              Click to open your surprise!
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="open"
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-pink-200 w-full"
          >
            <div className="absolute -top-6 -right-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                <Star className="w-12 h-12 text-yellow-400 fill-current drop-shadow-lg" />
              </motion.div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-center">
                <Sparkles className="w-12 h-12 text-pink-400" />
              </div>

              <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Happy Birthday!
              </h1>

              <ImageGallery />

              <motion.div
                className="space-y-4 text-gray-700 leading-relaxed font-medium"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 1.5, delayChildren: 0.5 },
                  },
                }}
              >
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
                  }}
                >
                  To the most amazing Aunt in the world,
                </motion.p>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
                  }}
                >
                  Thank you for your endless love, support, and warmth. You make
                  every day brighter just by being you.
                </motion.p>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
                  }}
                >
                  Wishing you a day filled with joy, laughter, and everything
                  you love.
                </motion.p>

                <motion.p
                  className="text-[14px] text-end"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
                  }}
                >
                  By Ham
                </motion.p>
              </motion.div>

              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={triggerConfetti}
                  className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  Celebrate Again! 🎉
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BirthdayCard;
