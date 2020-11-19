<template>
  <button
    type="button"
    :class="[
      'px-3 py-1 rounded bg-transparent border border-cyan-500 text-cyan-400 transition-all cursor-pointer',
      'hover:border-cyan-600 hover:bg-cyan-600 hover:bg-opacity-20',
      'focus:ring focus:ring-cyan-400 focus:ring-opacity-30 focus:outline-none',
      {
        'text-lg px-5 py-2': lg,
      },
    ]"
  >
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
