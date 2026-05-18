import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		allowedHosts: ['piper-unshepherded-sequently.ngrok-free.dev']
	},
	plugins: [sveltekit()]
});
