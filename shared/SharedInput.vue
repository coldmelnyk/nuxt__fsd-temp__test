<template>
  <input
    :value="modelValue"
    @input="onInput"
    type="text"
    :placeholder="props.placeholder"
  />
</template>

<script setup lang="ts">
  const emit = defineEmits(['update:modelValue']);

  interface IProps {
    placeholder: string;
    modelValue: string;
  }

  const props = defineProps<IProps>();

  const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement;

    emit('update:modelValue', target.value);
  };
</script>
