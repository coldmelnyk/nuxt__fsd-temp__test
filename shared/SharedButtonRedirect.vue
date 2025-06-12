<script setup lang="ts">
  const props = defineProps<{
    onClick: () => void;
  }>();
</script>

<template>
  <button @click="props.onClick">
    <slot />
  </button>
</template>
