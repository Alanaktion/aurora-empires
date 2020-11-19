<template>
  <div id="app">
    <AppRoot v-if="showGameRoot" />
    <AppSplash v-else @start="showGameRoot = true" />
  </div>
</template>

<script>
import AppRoot from './components/AppRoot.vue'
import AppSplash from './components/AppSplash.vue'

export default {
  name: 'App',
  components: {
    AppRoot,
    AppSplash,
  },
  data: () => ({
    showGameRoot: false,
  }),
}
</script>

<style>
html {
  /* https://github.com/tailwindlabs/tailwindcss/raw/v2.0.0-alpha.25/colors.js */
  --rose-50: #fff1f2;
  --rose-100: #ffe4e6;
  --rose-200: #fecdd3;
  --rose-300: #fda4af;
  --rose-400: #fb7185;
  --rose-500: #f43f5e;
  --rose-600: #e11d48;
  --rose-700: #be123c;
  --rose-800: #9f1239;
  --rose-900: #881337;
  --cyan-50: #ecfeff;
  --cyan-100: #cffafe;
  --cyan-200: #a5f3fc;
  --cyan-300: #67e8f9;
  --cyan-400: #22d3ee;
  --cyan-500: #06b6d4;
  --cyan-600: #0891b2;
  --cyan-700: #0e7490;
  --cyan-800: #155e75;
  --cyan-900: #164e63;
  --teal-50: #f0fdfa;
  --teal-100: #ccfbf1;
  --teal-200: #99f6e4;
  --teal-300: #5eead4;
  --teal-400: #2dd4bf;
  --teal-500: #14b8a6;
  --teal-600: #0d9488;
  --teal-700: #0f766e;
  --teal-800: #115e59;
  --teal-900: #134e4a;
  --gray-50: #fafafa;
  --gray-100: #f4f4f5;
  --gray-200: #e4e4e7;
  --gray-300: #d4d4d8;
  --gray-400: #a1a1aa;
  --gray-500: #71717a;
  --gray-600: #52525b;
  --gray-700: #3f3f46;
  --gray-800: #27272a;
  --gray-900: #18181b;

  height: 100%;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
body {
  margin: 0;
  height: 100%;
  background-color: var(--gray-800);
  color: var(--gray-100);
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* Typography */
h1, h2, h3, .display {
  font-family: 'Cinzel', serif;
  font-weight: 500;
}
</style>
