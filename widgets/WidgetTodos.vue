<template>
  <SharedTodoList :todos="todos" />
</template>

<script setup lang="ts">
  const { todos } = useTodos();
</script>
