import Tov from './presets'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [Tov()],
	server: {
		cors: true,
		proxy: {
			'/api': {
				target: 'https://momoyu.cc/api/',
				secure: false,
				changeOrigin: true, //this one is declare for cross
				rewrite: (path) => {
					console.log(path)
					return path.replace(/^\/api/, '')
				},
			},
			'/bing': {
				target: 'https://bing.com',
				secure: false,
				changeOrigin: true, //this one is declare for cross
				rewrite: (path) => {
					console.log(path)
					return path.replace(/^\/bing/, '')
				},
			},
		},
	},
})
