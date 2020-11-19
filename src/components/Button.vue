<template>
  <button type="button" :class="{ lg: lg }">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    lg: Boolean,
  },
}
</script>

<style scoped>
button {
  cursor: pointer;
  font-size: 1.5vmin;
  border: 1px solid var(--cyan-500);
  border-radius: 3px;
  background-color: transparent;
  color: var(--cyan-400);
  padding: 0.5vmin 1vmin;
  transition: all 0.2s ease-out;
}
button:hover {
  background-color: var(--cyan-900);
  border-color: var(--cyan-400);
}
button.lg {
  font-size: 2vmin;
  padding: 0.8vmin 1.5vmin;
}
</style>
