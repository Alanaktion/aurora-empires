<template>
  <svg :width="size" :height="size" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="shadow">
        <feDropShadow dx="0" dy="0" stdDeviation="0.5"
          :flood-color="color" flood-opacity="0.5" />
      </filter>
    </defs>
    <circle cx="8" cy="8" r="7"
      :stroke="color" stroke-width="1.5"
      :fill="color" fill-opacity="0.3"
      vector-effect="non-scaling-stroke"
      style="filter: url(#shadow);" />
  </svg>
</template>

<script>
const colorMap = {
  moon: '#94a3b8',
  dirt: '#854d0e',
  green: '#15803d',
  gas1: '#22d3ee',
  gas2: '#fb923c',
  gas3: '#818cf8',
};

export default {
  props: {
    type: String,
    size: Number,
  },
  computed: {
    color() {
      return colorMap[this.$props.type] || '#9ca3af';
    },
  },
};
</script>
