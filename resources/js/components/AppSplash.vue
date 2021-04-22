<template>
  <div class="m-auto text-center">
    <h2 class="font-title text-4xl font-medium text-cyan-400 mb-8">Aurora Empires</h2>
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
