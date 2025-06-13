<template>
  <main :class="['main', route.name]">
    <slot />
  </main>
</template>

<script setup lang="ts">
  const route = useRoute();
</script>

<style scoped>
  .main {
    min-height: 100dvh;
  }

  .index {
    background-color: lawngreen;
  }

  .about {
    background-color: #0065fc;
  }
</style>
