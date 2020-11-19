<template>
  <div id="root">
    <div class="toolbar">
      <div class="display">Aurora Empires</div>
    </div>
  </div>
</template>

<script>
export default {
  //
}
</script>

<style>
#root {
  align-self: stretch;
  justify-self: stretch;

  display: flex;
  flex-direction: column;
}
.toolbar {
  display: flex;
  background-color: var(--cyan-900);
  border-bottom: 1px solid var(--cyan-600);
  padding: 0.5rem;
}
.toolbar .display {
  color: #fff;
}
</style>
