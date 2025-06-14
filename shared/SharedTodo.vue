<template>
  <article class="todo">
    <div class="checkbox-wrapper">
      <label :for="String(id)"> Status </label>

      <input
        :id="String(id)"
        type="checkbox"
        :checked="status"
        @change="onStatus"
      />
    </div>

    <h4>{{ title }}</h4>

    <button @click="onDelete">Delete todo</button>
  </article>
</template>

<script setup lang="ts">
  interface IProps {
    id: number;
    title: string;
    status: boolean;
    onDelete: () => void;
    onStatus: () => void;
  }

  defineProps<IProps>();
</script>

<style scoped>
  .todo {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;
    border: 0.2rem solid red;
  }

  .checkbox-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 5px;
  }
</style>
