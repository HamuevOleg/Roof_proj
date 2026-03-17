// src/data/imageMap.js
// Eager-import all images so Astro optimizes them at build time (WebP, resizing, etc.)
const allImages = import.meta.glob('../assets/images/**/*.{jpg,jpeg,png,webp}', { eager: true });

export function getImg(path) {
    // path: e.g. 'portfolio/p01.jpg'
    return allImages[`../assets/images/${path}`]?.default;
}
