
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'orbitron': ['Orbitron', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: '#0D0D0D',
				foreground: '#FFFFFF',
				primary: {
					DEFAULT: '#00FFA3',
					foreground: '#0D0D0D'
				},
				secondary: {
					DEFAULT: '#1A1A1A',
					foreground: '#FFFFFF'
				},
				accent: {
					DEFAULT: '#FFD86F',
					foreground: '#0D0D0D'
				},
				muted: {
					DEFAULT: '#1A1A1A',
					foreground: '#A0A0A0'
				},
				destructive: {
					DEFAULT: '#FF4444',
					foreground: '#FFFFFF'
				},
				card: {
					DEFAULT: '#1A1A1A',
					foreground: '#FFFFFF'
				},
				popover: {
					DEFAULT: '#1A1A1A',
					foreground: '#FFFFFF'
				},
				neon: {
					green: '#00FFA3',
					yellow: '#FFD86F',
					blue: '#4DFFDF',
					purple: '#B794F6',
					pink: '#F687B3'
				}
			},
			backgroundImage: {
				'neon-gradient': 'linear-gradient(90deg, #00FFA3, #4DFFDF)',
				'accent-gradient': 'linear-gradient(90deg, #FFD86F, #FFA726)',
				'hero-gradient': 'radial-gradient(ellipse at center, rgba(0, 255, 163, 0.1) 0%, transparent 70%)'
			},
			boxShadow: {
				'neon': '0 0 20px rgba(0, 255, 163, 0.5)',
				'neon-strong': '0 0 30px rgba(0, 255, 163, 0.8)',
				'accent-glow': '0 0 20px rgba(255, 216, 111, 0.5)',
				'card-hover': '0 8px 32px rgba(0, 255, 163, 0.15)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(0, 255, 163, 0.5)'
					},
					'50%': {
						boxShadow: '0 0 30px rgba(0, 255, 163, 0.8)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'progress-fill': {
					'0%': {
						width: '0%'
					},
					'100%': {
						width: 'var(--progress-value)'
					}
				},
				'counter-up': {
					'0%': {
						transform: 'translateY(100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'progress-fill': 'progress-fill 1.5s ease-out',
				'counter-up': 'counter-up 0.3s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
