import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	css: {
		transformer: 'lightningcss',
		lightningcss: {
			filename: 'src/lib/styles/style.css',
			minify: true,
			drafts: {
				nesting: true
			}
		}
	}
});
