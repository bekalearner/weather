<script setup>
  import { WeatherIcon } from '@/shared'
  defineProps({
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
</script>

<template>
  <div class=" card p-24 bg-primary-60 d-flex flex-col items-center gap-14 w-full rounded-xl">
    <weather-icon :size="48" :code="validateCode(code)"/>
    <div class="capitalize text-lg">
      {{new Date(date).toLocaleDateString('ru-RU', { weekday: 'short' })}}
    </div>
    <div class="text-lg font-bold">{{temperature}} °C</div>
  </div >
</template>

<style scoped>
  .card {
    transition: all 0.1s linear;
  }
  .card:hover {
    background-color: var(--color-primary-50);
  }

</style>