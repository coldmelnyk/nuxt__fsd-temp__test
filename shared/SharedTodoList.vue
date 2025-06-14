<template>
  <section class="todo-list">
    <SharedTodo
      v-for="todo in todos"
      :key="todo.id"
      :title="todo.title"
      :status="todo.status"
      :onDelete="() => handleDeleteTodo()"
      :id="todo.id"
    />
  </section>
</template>

<script setup lang="ts">
  interface IProps {
    todos: ITodo[];
  }

  defineProps<IProps>();
</script>

<style scoped>
  .todo-list {
    width: 100%;

    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
</style>
