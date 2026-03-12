import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://hameuevoleg.github.io',
    base: '/Roof_proj',
    vite: {
        plugins: [tailwindcss()],
    },
});