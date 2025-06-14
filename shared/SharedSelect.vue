<template>
  <select
    :value="modelValue"
    @change="handleChange"
  >
    <option
      v-for="option in options"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
  const emit = defineEmits(['update:modelValue']);

  interface IOptions {
    label: string;
    value: boolean;
  }

  interface IProps {
    options: IOptions[];
    modelValue: boolean;
  }

  defineProps<IProps>();

  const handleChange = (e: Event) => {
    const target = e.target as HTMLSelectElement;
    const selectedValue = target.value;

    const booleanValue = selectedValue === 'true';
    emit('update:modelValue', booleanValue);
  };
</script>
