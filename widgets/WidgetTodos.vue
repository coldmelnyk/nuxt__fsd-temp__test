<template>
  <SharedTodoList :todos="todos" />
</template>

<script setup lang="ts">
  // here is just a mock but in real project i mean that
  // there could be something like fetching-data func
  const todos = reactive<ITodo[]>([
    {
      id: 123124124,
      title: 'New todo',
      status: 'true'
    }
  ]);
</script>
