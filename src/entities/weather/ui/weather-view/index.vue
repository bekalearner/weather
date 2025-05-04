<script setup>
  import { MapPin } from 'lucide-vue-next'
  import { WeatherIcon, getWeatherCategory } from '@/shared'

  defineProps({
    data: {
      type: Object,
    },
    location: {
      type: Object,
    },
  })
</script>

<template>
  <div
    v-if="data && location"
    class="weather-view p-24 flex flex-col justify-between items-start bg-info-70 rounded-2xl w-full text-white"
    style="gap: 180px; min-height: 600px"
    :style="{
      background: `url('/weather/card-bg/${getWeatherCategory(data.day.condition.code)}.jpg') center center no-repeat`,
      backgroundSize: 'cover',
    }"
  >
    <div class="flex flex-col items-start gap-12 z-10">
      <div class="text-2xl font-bold capitalize">
        {{
          new Date(data.date).toLocaleDateString('ru-RU', { weekday: 'long' })
        }}
      </div>
      <div class="text-lg">
        {{
          new Date(data.date).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })
        }}
      </div>
      <div class="flex gap-8 items-end">
        <map-pin :size="24" :code="data.day.condition.code" />
        <span class="text-lg">{{ location.name }}</span>
      </div>
    </div>
    <div class="flex flex-col items-start gap-12 z-10">
      <weather-icon :size="64" :code="data.day.condition.code" />
      <div class="text-4xl font-extrabold">{{ data.day.avgtemp_c }} °C</div>
      <div class="text-2xl font-bold">{{ data.day.condition.text }}</div>
    </div>
  </div>
</template>

<style scoped>
  .weather-view {
    position: relative;
  }
  .weather-view::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-primary-80);
    opacity: 0.7;
    border-radius: 1rem;
  }
</style>
