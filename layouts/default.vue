<script setup lang="ts">
  const route = useRoute();
</script>

<template>
  <main
    v-if="route.name === 'index'"
    class="main index"
  >
    <slot />
  </main>

  <main
    v-if="route.name === 'about'"
    class="main about"
  >
    <slot />
  </main>
</template>

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
