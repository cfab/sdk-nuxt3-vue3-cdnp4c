import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  meta: {
    script: [{ src: 'https://cdn.tailwindcss.com' }],
  },
  components: {
    global: true,
    dirs: ['~/components/storyblok'],
  },
});
