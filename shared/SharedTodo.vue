<template>
  <article class="todo">
    <input
      type="checkbox"
      v-model="correctedStatus"
    />

    <h4>{{ title }}</h4>

    <button @click="onDelete">Delete todo</button>
  </article>
</template>

<script setup lang="ts">
  interface IProps {
    title: string;
    status: string;
    onDelete: () => void;
  }

  const props = defineProps<IProps>();

  const correctedStatus = props.status === 'true';
</script>

<style scoped>
  .todo {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;
    border: 0.2rem solid red;
  }
</style>
