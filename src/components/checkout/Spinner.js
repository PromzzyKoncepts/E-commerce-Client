import React from 'react';
import { motion } from 'framer-motion';

const Spinner = () => {
  const spinnerVariants = {
    start: {
      rotate: 0,
    },
    end: {
      rotate: 360,
    },
  };

  const spinnerTransition = {
    duration: 1,
    repeat: Infinity,
    ease: 'linear',
  };

  return (
    <div className="md:ml-0 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black opacity-30 z-5000">
      <motion.div
        style={{
          width: '4rem',
          height: '4rem',
          borderRadius: '50%',
          border: '4px solid #FFC107',
          borderTop: '4px solid transparent',
        }}
        variants={spinnerVariants}
        initial="start"
        animate="end"
        transition={spinnerTransition}
      ></motion.div>
    </div>
  );
};

export default Spinner;
