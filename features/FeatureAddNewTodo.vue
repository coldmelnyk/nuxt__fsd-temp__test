<template>
  <form
    @submit="handleSubmit"
    class="feature-wrapper"
  >
    <SharedInput
      placeholder="Todo title"
      v-model="newTodo.title"
    />

    <SharedSelect
      :options="selectOptions"
      v-model="newTodo.status"
    />

    <SharedButton
      type="submit"
      name="Add todo"
      :onClick="() => {}"
    />
  </form>
</template>

<script setup lang="ts">
  import type { UnwrapRef } from 'vue';

  interface IProps {
    todos: UnwrapRef<Todos>;
  }

  const props = defineProps<IProps>();

  const newTodo = useState<ITodo>('newTodo', () => initialTodoValue());

  const handleAddTodo = () => {
    const todo = new Todo(newTodo.value);

    props.todos.addTodo(todo);
    newTodo.value = initialTodoValue();
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    handleAddTodo();
  };
</script>

<style scoped>
  .feature-wrapper {
    width: 100%;

    padding: 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
