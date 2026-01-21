import adapter from '@sveltejs/adapter-netlify'; // Cambia adapter-auto por adapter-netlify
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto solo funciona en algunos entornos, mejor especificar netlify
		adapter: adapter({
            // si tu proyecto es puramente estático, puedes usar edge: false
            edge: false,
            split: false
        })
	}
};

export default config;
