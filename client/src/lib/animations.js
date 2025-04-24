export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export const slideUp = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const slideInFromLeft = {
  hidden: { 
    opacity: 0, 
    x: -20 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const slideInFromRight = {
  hidden: { 
    opacity: 0, 
    x: 20 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const scaleUp = {
  hidden: { 
    opacity: 0, 
    scale: 0.9 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 0, -10],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const pulse = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const glow = {
  initial: { 
    boxShadow: "0 0 0 rgba(255, 184, 0, 0)" 
  },
  animate: {
    boxShadow: [
      "0 0 0 rgba(255, 184, 0, 0)",
      "0 0 20px rgba(255, 184, 0, 0.4)",
      "0 0 0 rgba(255, 184, 0, 0)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};