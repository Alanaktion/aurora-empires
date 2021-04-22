<template>
  <div class="flex-1 flex flex-col">
    <div class="flex bg-cyan-600 bg-opacity-20 p-2 border-b border-cyan-600">
      <div class="font-title font-medium text-white">Aurora Empires</div>
    </div>

    <div class="flex-1 flex items-center justify-center">
      <Planet type="dirt" :size="96" class="mx-4" />
      <Planet type="green" :size="128" class="mx-4" />
      <Planet type="gas1" :size="256" class="mx-4" />
      <Planet type="gas2" :size="192" class="mx-4" />
      <Planet type="moon" :size="32" class="mx-4" />
    </div>
  </div>
</template>

<script>
import Planet from './Objects/Planet.vue';

export default {
  components: {
    Planet,
  },
}
</script>
