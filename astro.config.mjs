import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
    site: isGitHubPages ? 'https://hameuevoleg.github.io' : undefined,
    base: isGitHubPages ? '/Roof_proj/' : '/',
    vite: {
        plugins: [tailwindcss()],
    },
});