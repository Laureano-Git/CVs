import adapter from '@sveltejs/adapter-netlify'; // <--- Asegúrate de que sea este
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter() 
	}
};

export default config;
