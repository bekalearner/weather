<script setup>
  import { WeatherIcon } from '@/shared'
  const emit = defineEmits(['click'])
  const { id } = defineProps({
    id: {
      type: Number,
      required: true,
    },
    code: {
      type: Number,
      required: true,
    },
    temperature: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  })

  function validateCode(code) {
    if (typeof code === 'string') {
      return Number(code)
    }
    return code
  }

  function handleClick() {
    emit('click', id)
  }
</script>

<template>
  <div
    class="card p-24 bg-primary-60 flex flex-col items-center gap-14 w-full rounded-xl"
    @click="handleClick"
  >
    <weather-icon :size="48" :code="validateCode(code)" />
    <div class="capitalize text-lg">
      {{ new Date(date).toLocaleDateString('ru-RU', { weekday: 'short' }) }}
    </div>
    <div class="text-lg font-bold">{{ temperature }} °C</div>
  </div>
</template>

<style scoped>
  .card {
    color: var(--color-white);
    cursor: pointer;
    transition: all 0.1s linear;
  }
  .card-active {
    background-color: var(--color-white);
    color: var(--color-primary-60);
  }

  .card:hover {
    background-color: var(--color-primary-50);
  }
  .card-active:hover {
    background-color: var(--color-primary-10);
  }
</style>
