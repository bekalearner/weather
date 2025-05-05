<script setup>
  import { Container } from '@/shared'
  import { WeatherContentWrapper, useWeatherStore } from '@/entities/weather'
  import { WeatherWidget } from '@/widgets/weather'
  import { onBeforeMount } from 'vue'

  const store = useWeatherStore()

  onBeforeMount(async () => {
    await store.getWeather({
      q: 'Бишкек',
      lang: 'ru',
      days: 4,
    })
    store.setCurrentId(0)
  })
</script>

<template>
  <main>
    <weather-content-wrapper
      v-if="store.current.day"
      :code="store.current.day.condition.code"
      class="flex items-center justify-center"
    >
      <container>
        <weather-widget />
      </container>
    </weather-content-wrapper>
  </main>
</template>
