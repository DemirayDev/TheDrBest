module.exports = {
  // ... existing config ...
  extend: {
    colors: {
      'warm-beige': '#f5e6d8',
      'warm-brown': '#8a6d5d',
    },
    fontFamily: {
      playfair: ['var(--font-playfair)'],
      poppins: ['var(--font-poppins)'],
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    animation: {
      'spin-slow': 'spin 20s linear infinite',
      'pulse-slow': 'pulse 5s ease-in-out infinite',
      'float': 'float 6s ease-in-out infinite',
      'scroll-down': 'scroll-down 2s ease-in-out infinite',
      'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
    },
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
      },
      'scroll-down': {
        '0%': { opacity: '0', transform: 'translateY(0)' },
        '50%': { opacity: '1', transform: 'translateY(6px)' },
        '100%': { opacity: '0', transform: 'translateY(0)' },
      }
    },
    transitionDuration: {
      '2000': '2000ms',
    },
    transitionTimingFunction: {
      'bounce-start': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      'bounce-end': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },
  // ... existing config ...
} 