<template>
  <button @click="onClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
  interface IProps {
    onClick: () => void;
  }

  defineProps<IProps>();
</script>
