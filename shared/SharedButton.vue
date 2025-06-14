<template>
  <button
    :type="type"
    @click="onClick"
  >
    {{ name }}
  </button>
</template>

<script setup lang="ts">
  interface IProps {
    name: string;
    onClick: () => void;
    type: 'button' | 'submit' | 'reset' | undefined;
  }

  defineProps<IProps>();
</script>
