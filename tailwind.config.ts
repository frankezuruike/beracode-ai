import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb", // blue-600
          foreground: "#fff",
        },
        secondary: {
          DEFAULT: "#64748b", // slate-500
          foreground: "#fff",
        },
        accent: {
          DEFAULT: "#f59e42", // orange-400
          foreground: "#fff",
        },
        neutral: {
          DEFAULT: "#f3f4f6", // gray-100
          foreground: "#111827", // gray-900
        },
        background: "#fff",
        surface: "#f9fafb", // gray-50
        border: "#e5e7eb", // gray-200
        muted: "#6b7280", // gray-500
        success: "#22c55e", // green-500
        warning: "#facc15", // yellow-400
        error: "#ef4444", // red-500
      },
      borderRadius: {
        lg: "1rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.75' }],
        'lg': ['1.125rem', { lineHeight: '2' }],
        'xl': ['1.25rem', { lineHeight: '2.25' }],
        '2xl': ['1.5rem', { lineHeight: '2.5' }],
        '3xl': ['1.875rem', { lineHeight: '2.75' }],
        '4xl': ['2.25rem', { lineHeight: '2.75' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.06)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
}
export default config