<template>
  <div class="splash">
    <h2>Aurora Empires</h2>
    <Button lg @click="$emit('start')">Start Game</Button>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'AppSplash',
  components: {
    Button,
  },
  emits: ['start'],
}
</script>

<style scoped>
.splash {
  margin: auto;
  text-align: center;
}
.splash h2 {
  color: var(--cyan-400);
  font-size: 5.5vmin;
}
</style>
