<script setup>
  const props = defineProps({
    modelValue: String,
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    disabled: Boolean,
  })
  const emit = defineEmits(['update:modelValue'])

  function handleChange(event) {
    emit('update:modelValue', event.target.value)
  }
</script>

<template>
  <input
    class="input w-full text-white bg-primary-60 border border-primary-40"
    :class="{
      'input-sm': props.size === 'small',
      'input-md': props.size === 'medium',
      'input-lg': props.size === 'large'
    }"
    :value="modelValue"
    @change="handleChange"
  />
</template>

<style scoped>
.input {
  outline: none;
}
.input::placeholder {
  color: var(--color-primary-20);
}
.input:focus {
  border-color: var(--color-white);
}
.input::selection {
  background: var(--color-info-40);
  color: var(--color-black);
}
.input-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.375rem;
}

.input-md {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  border-radius: 0.5rem;
}

.input-lg {
  padding: 1rem 2rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  border-radius: 0.75rem;
}

input:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}
</style>