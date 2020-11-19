<template>
  <AppRoot v-if="showRoot" />
  <AppSplash v-else @start="showRoot = true" />
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
    showRoot: false,
  }),
}
</script>
