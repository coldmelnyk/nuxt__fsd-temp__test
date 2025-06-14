<template>
  <SharedTodoList
    :handleDeleteTodo="handleDeleteTodo"
    :handleEditTodoStatus="handleEditTodoStatus"
    :todos="todos.getTodosValues"
  />
</template>

<script setup lang="ts">
  import type { UnwrapRef } from 'vue';

  interface IProps {
    todos: UnwrapRef<Todos>;
  }

  const props = defineProps<IProps>();

  const handleDeleteTodo = (todo: ITodo) => {
    props.todos.removeTodo(todo);
  };

  const handleEditTodoStatus = (todoToEdit: ITodo) => {
    const todo = props.todos.getTodos.find(
      todo => todo.getTodo.id === todoToEdit.id
    );

    if (todo) {
      todo.setStatus = !todo.getTodo.status;
      console.log(todo.getTodo);
    }
  };
</script>
