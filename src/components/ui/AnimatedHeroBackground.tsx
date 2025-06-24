import React from 'react';
import { motion, Variants, Transition } from 'framer-motion';

const AnimatedHeroBackground: React.FC = () => {
  // Define animation variants for the SVG paths
  const pathVariants: Variants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop", // Explicitly define type as "loop"
      } as Transition, // Cast as Transition
    },
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
        {/* Example Paths - These can be customized to create different shapes and animations */}
        {/* Path 1 */}
        <motion.path
          d="M 100 300 C 200 100, 400 100, 500 300 S 800 500, 900 300"
          fill="none"
          stroke="#cccccc" // Light grey color
          strokeWidth="4"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
        {/* Path 2 */}
        <motion.path
          d="M 100 300 C 200 500, 400 500, 500 300 S 800 100, 900 300"
          fill="none"
          stroke="#a0f0ff" // Light cyan color
          strokeWidth="4"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop", delay: 0.5 } as Transition}
        />
         {/* Path 3 */}
         <motion.path
          d="M 500 100 C 600 200, 600 400, 500 500 S 400 400, 400 200, 500 100"
          fill="none"
          stroke="#d0b0ff" // Light purple color
          strokeWidth="4"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "loop", delay: 1 } as Transition}
        />
      </svg>
    </div>
  );
};

export default AnimatedHeroBackground; 