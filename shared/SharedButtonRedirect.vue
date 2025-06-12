<script setup lang="ts">
  const props = defineProps<{
    path: string;
  }>();

  const handleNavigate = () => navigateTo({ path: `/${props.path}` });
</script>

<template>
  <button @click="handleNavigate">
    <slot />
  </button>
</template>
