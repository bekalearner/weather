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
    class="d-flex gap-16 uppercase"
    :class="{
      'text-lg': props.size === 'small',
      'text-xl': props.size === 'medium',
      'text-2xl': props.size === 'large',
    }"
  >
    <div class="w-full font-bold">{{ label }}</div>
    <div class="w-full">{{ value }}</div>
  </div>
</template>

<style scoped>

</style>