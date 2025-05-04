<script setup>
  const props = defineProps({
    label: String,
    value: String,
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
  })
</script>

<template>
  <div
    class="d-flex justify-between uppercase mb-14"
    :class="{
      'text-lg': props.size === 'small',
      'text-xl': props.size === 'medium',
      'text-2xl': props.size === 'large',
    }"
  >
    <div class="font-bold">{{ label }}</div>
    <div>{{ value }}</div>
  </div>
</template>

<style scoped>

</style>