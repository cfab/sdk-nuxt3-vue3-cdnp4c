import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(StoryblokVue, {
    accessToken: 'OurklwV5XsDJTIE1NJaD2wtt',
    use: [apiPlugin],
  });
});
