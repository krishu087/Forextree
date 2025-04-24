const theme = {
  colors: {
    primary: {
      DEFAULT: '#FFB800',
      dark: '#E6A700',
      light: '#FFCF4D'
    },
    dark: {
      DEFAULT: '#121212',
      800: '#1E1E1E',
      700: '#2D1F3F',
      600: '#333333',
      500: '#444444'
    },
    glass: {
      light: 'rgba(255, 255, 255, 0.1)',
      dark: 'rgba(0, 0, 0, 0.3)',
      overlay: 'rgba(0, 0, 0, 0.7)'
    }
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
    DEFAULT: '0 2px 5px rgba(0, 0, 0, 0.2)',
    md: '0 4px 8px rgba(0, 0, 0, 0.3)',
    lg: '0 10px 25px rgba(0, 0, 0, 0.4)',
    xl: '0 20px 50px rgba(0, 0, 0, 0.5)',
    glow: '0 0 20px rgba(255, 184, 0, 0.3)'
  },
  border: {
    light: '1px solid rgba(255, 255, 255, 0.1)',
    dark: '1px solid rgba(0, 0, 0, 0.1)',
    primary: '1px solid rgba(255, 184, 0, 0.3)'
  },
  blur: {
    sm: 'blur(4px)',
    DEFAULT: 'blur(8px)',
    lg: 'blur(16px)',
    xl: 'blur(24px)'
  },
  transitions: {
    fast: 'all 0.2s ease',
    DEFAULT: 'all 0.3s ease',
    slow: 'all 0.5s ease',
    bounce: 'all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55)'
  },
  gradients: {
    primary: 'linear-gradient(to right, #FFB800, #FFC833)',
    hero: 'linear-gradient(to bottom right, #2D1F3F, #121212)',
    card: 'linear-gradient(to bottom, rgba(45, 31, 63, 0.7), rgba(18, 18, 18, 0.7))',
    button: 'linear-gradient(to right, #FFB800, #E6A700)',
    glass: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))'
  },
  radius: {
    DEFAULT: '0.5rem',
    full: '9999px',
    sm: '0.25rem',
    lg: '1rem',
    xl: '1.5rem'
  }
};

export default theme;
