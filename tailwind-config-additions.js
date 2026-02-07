// Agrega estas configuraciones a tu tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'wave-slow': 'wave 15s ease-in-out infinite',
        'wave-slower': 'wave 20s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wave: {
          '0%, 100%': { 
            d: 'path("M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100 L2000,0 L0,0 Z")' 
          },
          '50%': { 
            d: 'path("M0,100 Q250,150 500,100 T1000,100 T1500,100 T2000,100 L2000,0 L0,0 Z")' 
          },
        },
      },
    },
  },
  plugins: [],
}
