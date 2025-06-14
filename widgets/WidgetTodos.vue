<template>
  <section class="widget-wrapper">
    <FeatureAddNewTodo :todos="todos" />
    <FeatureManipulateTodos :todos="todos" />
  </section>
</template>

<script setup lang="ts">
  const firstTodo = new Todo({
    id: 14212412,
    title: 'added todo!',
    status: true
  });

  const todos = reactive<Todos>(new Todos([firstTodo]));
</script>

<style scoped>
  .widget-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
</style>
