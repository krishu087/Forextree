import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className = '' }: ThemeToggleProps) => {
  const [theme, setTheme] = useState('dark');

  // Check localStorage and OS preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    } else {
      setTheme('dark'); 
    }
  }, []);

  // Apply theme changes
  useEffect(() => {
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    document.documentElement.classList.add(`${theme}-theme`);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative h-9 w-9 rounded-full p-2 ${
        theme === 'light' 
          ? 'bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30' 
          : 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/30'
      } transition-colors duration-300 ${className}`}
      whileTap={{ scale: 0.95 }}
      aria-label={`Toggle ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative h-full w-full">
        <motion.div
          initial={false}
          animate={{ 
            rotate: theme === 'dark' ? 0 : 180,
            opacity: theme === 'dark' ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="h-5 w-5" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{ 
            rotate: theme === 'light' ? 0 : -180,
            opacity: theme === 'light' ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="h-5 w-5" />
        </motion.div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;