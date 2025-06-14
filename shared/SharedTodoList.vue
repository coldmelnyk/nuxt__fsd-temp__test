<template>
  <section class="todo-list">
    <SharedTodo
      v-for="todo in todos"
      :key="todo.id"
      :title="todo.title"
      :status="todo.status"
      :onStatus="() => handleEditTodoStatus(todo)"
      :onDelete="() => handleDeleteTodo(todo)"
      :id="todo.id"
    />
  </section>
</template>

<script setup lang="ts">
  interface IProps {
    todos: ITodo[];
    handleDeleteTodo: (todo: ITodo) => void;
    handleEditTodoStatus: (todoToEdit: ITodo) => void;
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
