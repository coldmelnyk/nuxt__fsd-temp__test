<template>
  <section class="widget-wrapper">
    <FeatureAddNewTodo :todos="todos" />
    <SharedTodoList :todos="todos.getTodos" />
  </section>
</template>

<script setup lang="ts">
  const todos = reactive<Todos>(
    new Todos([
      {
        id: 124124124124124,
        title: 'added todo!',
        status: true
      }
    ])
  );
</script>

<style scoped>
  .widget-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
</style>
