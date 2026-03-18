import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// Production domain: replace 'https://proacoperis.md' with the real domain once purchased.
// Remove the GITHUB_PAGES branch and set site directly when deploying to production:
//   site: 'https://proacoperis.md',
//   base: '/',

export default defineConfig({
    site: isGitHubPages ? 'https://hameuevoleg.github.io' : 'https://proacoperis.md',
    base: isGitHubPages ? '/Roof_proj/' : '/',
    vite: {
        plugins: [tailwindcss()],
    },
});